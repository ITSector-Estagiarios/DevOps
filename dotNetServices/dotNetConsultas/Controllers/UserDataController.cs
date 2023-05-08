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
        string guid = verifyToken(model.token).Result;

        if (guid == null)
        {
            return NotFound();
        }
        int userId = getUserId(guid).Result;
        if (userId == 0)
        {
            return NotFound();
        }
        var response = _userdataService.getIban(userId);
        return Ok(response);
    }
    
   [HttpPost("extract")]
    public IActionResult GetExtracts(AuthenticateExtractRequest model)
    {
        string guid = verifyToken(model.token).Result;
        if (guid == null)
        {
            return NotFound();
        }
        int userId = getUserId(guid).Result;
        if (userId == 0)
        {
            return NotFound();
        }
        var response = _userdataService.getExtracts(userId,model);
        return Ok(response);
    }

    async private Task<string> verifyToken(string token) {
        string userId = null;

        var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
        //Check token
        var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token } );
        userId = await response.Content.ReadAsStringAsync();
        TokenResponse tokenresponse = JsonSerializer.Deserialize<TokenResponse>(userId);
        if (tokenresponse.IsValid) userId = tokenresponse.userId;

        return userId;
    }

    async private Task<int> getUserId(string guid) {
        var client = new DaprClientBuilder().Build();
        string jsonString = await client.GetStateAsync<string>("statestore", guid);
        if (jsonString == null) return 0;

        return 1;
    }

    private class TokenResponse {
        public bool IsValid { get; set; }
        public string Error { get; set; }
        public string userId { get; set; }
    }

    private class User {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
    
}
