namespace History.Models;

using System.Text.Json.Serialization;

public class ConsultOperation
{

    public int user_id { get; set; }
    public string email { get; set; }

    public string firstName { get; set; }
    public string lastName { get; set; }

}