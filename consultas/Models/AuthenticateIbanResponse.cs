namespace Consultas.Models;


public class AuthenticateIbanResponse
{
    public long Id { get; set; }
    public string? Iban {get; set; }


    public AuthenticateIbanResponse(UserData user)
    {
        Id = user.Id;
        Iban = user.Iban;
    }
}