namespace Fund.Models;

using System.Text.Json.Serialization;

public class TrasnferOperation
{

    public decimal amount { get; set; }
    public int user_id { get; set; }
    public string email { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }

}