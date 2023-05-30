namespace Consultas.Services;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Consultas.Models;

public interface IUserDataService
{
    AuthenticateIbanResponse getIban(int userId);

    AuthenticateExtractResponse getExtracts(int userId, AuthenticateExtractRequest model);
}

public class UserDataService : IUserDataService
{
    // users hardcoded for simplicity, store in a db with hashed passwords in production applications
    private List<UserData> _users = new List<UserData>
    {
        new UserData { Id = 1, Iban = "PT50 1234 5678 9012 3456 7890 1" },
        new UserData { Id = 2, Iban = "PT50 1200 5600 9321 3456 1020 3" }
    };

    private List<UserExtract> _extracts = new List<UserExtract>
    {
        new UserExtract { Id = 1, user_Id = 1, month = "January", year = "2022", value = 23 },
        new UserExtract { Id = 2, user_Id = 1, month = "January", year = "2022", value = -4 },
        new UserExtract { Id = 3, user_Id = 1, month = "February", year = "2022", value = 8 },
        new UserExtract { Id = 4, user_Id = 1, month = "January", year = "2021", value = 5 },
        new UserExtract { Id = 5, user_Id = 1, month = "January", year = "2022", value = 36}
    };


    public AuthenticateIbanResponse getIban(int userId)
    {
        var user = _users.SingleOrDefault(x => x.Id == (long)userId);

        // return null if user not found
        if (user == null) return null;

        return new AuthenticateIbanResponse(user);
    }

    public AuthenticateExtractResponse getExtracts(int userId, AuthenticateExtractRequest model) {
        var extracts = _extracts.Where( x => x.user_Id == (long)userId && x.month == model.month && x.year == model.year).ToList();

        return new AuthenticateExtractResponse(extracts);
    }

}