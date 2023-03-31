namespace Consultas.Services;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Consultas.Models;

public interface IUserDataService
{
    AuthenticateResponse Authenticate(AuthenticateRequest model);
}

public class UserDataService : IUserDataService
{
    // users hardcoded for simplicity, store in a db with hashed passwords in production applications
    private List<UserData> _users = new List<UserData>
    {
        new UserData { Id = 1, Iban = "PT50 1234 5678 9012 3456 7890 1" },
        new UserData { Id = 2, Iban = "PT50 1200 5600 9321 3456 1020 3" }
    };

    public AuthenticateResponse Authenticate(AuthenticateRequest model)
    {
        var user = _users.SingleOrDefault(x => x.Id == (long)Convert.ToInt64(model.Id));

        // return null if user not found
        if (user == null) return null;

        return new AuthenticateResponse(user);
    }


}