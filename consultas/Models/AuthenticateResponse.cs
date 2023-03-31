namespace Consultas.Models;


public class AuthenticateResponse
{
    public long Id { get; set; }
    public string? Iban {get; set; }


    public AuthenticateResponse(UserData user)
    {
        Id = user.Id;
        Iban = user.Iban;
    }
}