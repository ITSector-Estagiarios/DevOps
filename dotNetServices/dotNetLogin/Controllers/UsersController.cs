namespace WebApi.Controllers;

using Microsoft.AspNetCore.Mvc;
using WebApi.Helpers;
using WebApi.Models;
using WebApi.Services;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("authenticate")]
    public IActionResult Authenticate(AuthenticateRequest model)
    {
        var response = _userService.Authenticate(model);

        if (response == null)
            return BadRequest(new { message = "Email or password is incorrect" });
        
        return Ok(response);
    }
    [HttpPost("verify")]
    public IActionResult verifyToken(verifyTokenRequest model)
    {
        var result = _userService.verifyToken(model.Token).Result;
        if (result.IsValid) {
            return Ok(result);
        }
        else {
            return BadRequest();
        }
    }

    [Authorize]
    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userService.GetAll();
        return Ok(users);
    }

    [HttpGet("echo")]
    public IActionResult Echo()
    {
        System.Console.WriteLine("Running echo...");
        return Ok("Echoing...");
    }
}
