

namespace Consultas.Models;

public class UserExtract
{
    public long Id { get; set; }
    public long user_Id { get; set; }

    public string month { get; set; }

    public string year { get; set; }

    public long value { get; set; }
    public long newBalance { get; set; }
    public string fromAccount { get; set; }
    public string toAccount { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
}