namespace Consultas.Controllers;

using Microsoft.AspNetCore.Mvc;
using Dapr.Client;
using Consultas.Models;
using Consultas.Services;
using System.Text.Json;

[ApiController]

public class UserDataController : ControllerBase
{
    private IUserDataService _userdataService;
    
    public UserDataController(IUserDataService userdataService) 
    {
        _userdataService = userdataService;
    }

    [HttpPost("iban")]
    public IActionResult GetIban(AuthenticateIbanRequest model)
    {
        User? user = verifyToken(model.token).Result;

        if (user == null)
        {
            return StatusCode(401, "Session ended!");
        }

        var response = _userdataService.getIban(user.Id);
        publishOperation("IBAN Consult", user);
        return Ok(response);
    }
    
   [HttpPost("extract")]
    public IActionResult GetExtracts(AuthenticateExtractRequest model)
    {
        User? user = verifyToken(model.token).Result;

        if (user == null)
        {
            return StatusCode(401, "Session ended!");
        }
        var response = _userdataService.getExtracts(user.Id,model);
        publishOperation("Extract Consult", user);
        return Ok(response);
    }

    private async Task<User?> verifyToken(string token){

        var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
        // Check token
        var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
        if (response.IsSuccessStatusCode) {
            string response_string = await response.Content.ReadAsStringAsync();
            User? user = JsonSerializer.Deserialize<User>(response_string);
            return user;
        }
        return null;
    }

    private async void publishOperation(string operation, User user) {
        var daprClient = new DaprClientBuilder().Build();
        var data = new {
            type = operation,
            date = DateTime.Now,
            user_id = user.Id,
            firstName = user.FirstName,
            lastName = user.LastName
        };
        //string jsonstring = JsonSerializer.Serialize(data);
        await daprClient.PublishEventAsync("pubsub","operation", data);
        Console.WriteLine("Sent Message!");
    }

    
}
