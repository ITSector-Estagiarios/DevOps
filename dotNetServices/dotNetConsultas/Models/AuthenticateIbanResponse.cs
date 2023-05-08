namespace Consultas.Models;


public class AuthenticateIbanResponse
{
    public string Iban {get; set; }


    public AuthenticateIbanResponse(UserData user)
    {
        Iban = user.Iban;
    }
}