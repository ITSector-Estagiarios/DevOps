namespace WebApi.Models;

using WebApi.Entities;

public class ValidationResult
{
    public bool IsValid { get; set; }
    public string Error { get; set; }
    public string userId { get; set; }
}