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
    public IActionResult GetIban(AuthenticateIbanRequest model)
    {
        var response = _userdataService.getIban(model);

        if (response == null)
        {
            return NotFound();
        }

        return Ok(response);
    }
    
   [HttpPost("extract")]
    public IActionResult GetExtracts(AuthenticateExtractRequest model)
    {
        var response = _userdataService.getExtracts(model);

        if (response == null)
        {
            return NotFound();
        }

        return Ok(response);
    }
    
}
