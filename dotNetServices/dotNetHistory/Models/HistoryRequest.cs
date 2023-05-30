namespace History.Models;

using System.ComponentModel.DataAnnotations;

public class HistoryRequest
{
    [Required]
    public string token { get; set; }
}