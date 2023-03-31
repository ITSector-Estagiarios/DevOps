namespace Consultas.Controllers;

using Microsoft.AspNetCore.Mvc;
using Consultas.Models;
using Consultas.Services;

[ApiController]

public class UserDataController : ControllerBase
{
    private IUserDataService _userdataService;
    
    public UserDataController(IUserDataService userdataService) 
    {
        _userdataService = userdataService;
    }

    [HttpPost("iban")]
    public IActionResult GetIban(AuthenticateRequest model)
    {
        var response = _userdataService.Authenticate(model);

        if (response == null)
        {
            return NotFound();
        }

        return Ok(response);
    }
}
