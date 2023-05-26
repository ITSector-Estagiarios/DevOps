namespace Transfers.Models;

using System.ComponentModel.DataAnnotations;

public class TransferRequest
{
    [Required]
    public string? Amount { get; set; }

    [Required]
    public string? fromAccount { get; set; }

    [Required]
    public string? ToAccount { get; set; }

    [Required]
    public string? token { get; set; }
}