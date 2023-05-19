namespace Transfers.Models;

using System.ComponentModel.DataAnnotations;

public class Transfer
{
    [Required]
    public int id { get; set; }

    [Required]
    public string? FromAccount { get; set; }

    [Required]
    public string? ToAccount { get; set; }

    [Required]
    public decimal Amount { get; set; }

    [Required]
    public DateTime Date { get; set; }
}