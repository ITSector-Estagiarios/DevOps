namespace WebApi.Models;

using System.ComponentModel.DataAnnotations;

public class verifyTokenRequest
{
    [Required]
    public string Token { get; set; }

}