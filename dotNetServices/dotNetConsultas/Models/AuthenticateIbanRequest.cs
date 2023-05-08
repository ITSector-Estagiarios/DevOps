namespace Consultas.Models;

using System.ComponentModel.DataAnnotations;

public class AuthenticateIbanRequest
{
    [Required]
    public string token { get; set; }

}