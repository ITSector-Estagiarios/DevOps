namespace Consultas.Models;

using System.ComponentModel.DataAnnotations;

public class AuthenticateNewExtract
{
    [Required]
    public User user { get; set; }
    [Required]
    public string month { get; set; }
    [Required]
    public string year { get; set; }
    [Required]
    public long value { get; set; }
    [Required]
    public long newBalance { get; set; }
    [Required]
    public string fromAccount { get; set; }
    [Required]
    public string toAccount { get; set; }

}