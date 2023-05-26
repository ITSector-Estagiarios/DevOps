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
            return NotFound();
        }

        var response = _userdataService.getIban(user.Id);
        return Ok(response);
    }
    
   [HttpPost("extract")]
    public IActionResult GetExtracts(AuthenticateExtractRequest model)
    {
        User? user = verifyToken(model.token).Result;

        if (user == null)
        {
            return NotFound();
        }
        var response = _userdataService.getExtracts(user.Id,model);
        return Ok(response);
    }

    private async Task<User?> verifyToken(string token){

        var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
        // Check token
        var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
        string response_string = await response.Content.ReadAsStringAsync();
        User? user = JsonSerializer.Deserialize<User>(response_string);
        return user;
    }

    
}
