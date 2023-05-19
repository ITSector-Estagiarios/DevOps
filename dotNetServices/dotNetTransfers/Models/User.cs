namespace Transfers.Models;

using System.ComponentModel.DataAnnotations;

public class User
{
    [Required]
    public int Id { get; set; }

    [Required]
    public string? FirstName { get; set; }

    [Required]
    public string? LastName { get; set; }

    [Required]
    public string? email { get; set; }

    [Required]
    public string? password { get; set; }
}