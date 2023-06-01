namespace History.Models;

using System.Text.Json.Serialization;

public class Operation
{
    [JsonIgnore]
    public int id { get; set; }
    [JsonIgnore]
    public int user_id { get; set; }

    public string type { get; set; }

    public DateTime date { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
}