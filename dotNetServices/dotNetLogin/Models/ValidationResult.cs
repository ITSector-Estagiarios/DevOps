namespace WebApi.Models;

using WebApi.Entities;

public class ValidationResult
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string email { get; set; }
}