namespace Consultas.Models;

using System.ComponentModel.DataAnnotations;

public class AuthenticateIbanRequest
{
    [Required]
    public string Id { get; set; }

}