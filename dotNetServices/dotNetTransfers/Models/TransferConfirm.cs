namespace Transfers.Models;

using System.ComponentModel.DataAnnotations;

public class TransferConfirm
{
    [Required]
    public string? code { get; set; }

    [Required]
    public string? token { get; set; }
}