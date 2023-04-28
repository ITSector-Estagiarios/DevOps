namespace WebApi.Models;

using System.ComponentModel.DataAnnotations;

public class verifyTokenRequest
{
    [Required]
    public string email { get; set; }
    [Required]
    public string token { get; set; }

}