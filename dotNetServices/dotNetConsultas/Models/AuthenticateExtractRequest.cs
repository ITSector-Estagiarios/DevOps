namespace Consultas.Models;

using System.ComponentModel.DataAnnotations;

public class AuthenticateExtractRequest
{
    [Required]
    public string token { get; set; }
    [Required]
    public string month { get; set; }
    [Required]
    public string year { get; set; }



}