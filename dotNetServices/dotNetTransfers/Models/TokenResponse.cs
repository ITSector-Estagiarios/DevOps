namespace Transfers.Models;

using System.ComponentModel.DataAnnotations;

public class TokenResponse
{
    [Required]
    public bool IsValid { get; set; }

    [Required]
    public string? Error { get; set; }

    [Required]
    public string? userId { get; set; }
}