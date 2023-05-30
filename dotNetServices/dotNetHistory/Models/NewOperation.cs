namespace History.Models;

using System.Text.Json.Serialization;

public class NewOperation
{

    public string type { get; set; }

    public DateTime date { get; set; }
}