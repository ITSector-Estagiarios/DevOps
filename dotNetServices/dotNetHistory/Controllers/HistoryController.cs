namespace History.Controllers;

using Microsoft.AspNetCore.Mvc;
using Dapr;
using Dapr.Client;
using History.Models;
using History.Services;
using System.Text.Json;

[ApiController]
public class HistoryController : ControllerBase
{
    private IHistoryService _historyService;

    public HistoryController(IHistoryService historyService)
    {
        _historyService = historyService;
    }

    [HttpPost("history")]
    public IActionResult History(HistoryRequest request)
    {
        string token;
        if (request.token == null) return BadRequest("Invalid token");
        else token = request.token;
        User? user = VerifyToken(token).Result;
        if (user == null)
        {
            return BadRequest("Invalid user");
        }
        var response = _historyService.GetUserOperations(user.Id);
        string json = JsonSerializer.Serialize(response);
        return Ok(json);
    }

    [Topic("pubsub", "operation")]
    [HttpPost("receive-message")]
    public IActionResult ReceiveMessage(NewOperation operation)
    {
        Console.WriteLine("Received message: " + operation.type);
        _historyService.addNewOperation(operation);
        
        return Ok();
    }

    private async Task<User?> VerifyToken(String token)
    {
        var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
        // Check token
        var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
        string response_string = await response.Content.ReadAsStringAsync();
        User? user = JsonSerializer.Deserialize<User>(response_string);
        return user;
    }

}
