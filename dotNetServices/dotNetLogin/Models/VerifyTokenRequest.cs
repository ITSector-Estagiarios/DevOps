namespace WebApi.Models;

using System.ComponentModel.DataAnnotations;

public class verifyTokenRequest
{
    [Required]
    public string user { get; set; }
    [Required]
    public string token { get; set; }

}