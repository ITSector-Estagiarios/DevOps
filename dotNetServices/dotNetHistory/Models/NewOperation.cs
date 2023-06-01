namespace History.Models;

using System.Text.Json.Serialization;

public class NewOperation
{

    public string type { get; set; }

    public DateTime date { get; set; }
    public int user_id { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
}