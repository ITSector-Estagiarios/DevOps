namespace Transfer.Models;

using System.ComponentModel.DataAnnotations;

public class AuthenticateRequest
{
    [Required]
    public string amount { get; set; }

    [Required]
    public string fromAccount { get; set; }
    [Required]
    public string toAccount { get; set; }
    [Required]
    public string date { get; set; }


}