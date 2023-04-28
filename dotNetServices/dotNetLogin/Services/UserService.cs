namespace WebApi.Services;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Dapr.Client;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models;

public interface IUserService
{
    AuthenticateResponse Authenticate(AuthenticateRequest model);
    IEnumerable<User> GetAll();
    User GetById(int id);
    Task<bool> verifyToken(string email, string token);
}

public class UserService : IUserService
{
    // users hardcoded for simplicity, store in a db with hashed passwords in production applications
    private List<User> _users = new List<User>
    {
        new User { Id = 1, FirstName = "Test", LastName = "User", email = "user@email.com", password = "Mksd<12214!" },
        new User { Id = 2, FirstName = "Main", LastName = "User", email = "main@email.com", password = "Mksd<12214!" }
    };

    private readonly AppSettings _appSettings;

    public UserService(IOptions<AppSettings> appSettings)
    {
        _appSettings = appSettings.Value;
    }

    public AuthenticateResponse Authenticate(AuthenticateRequest model)
    {
        var user = _users.SingleOrDefault(x => x.email == model.email && x.password == model.password);

        // return null if user not found
        if (user == null) return null;

        // authentication successful so generate jwt token
        string token = generateJwtToken(user);
        if (!storeToken(model.email, token).Result) return null;

        Console.WriteLine(verifyToken(model.email, token).Result);


        return new AuthenticateResponse(user, token);
    }

    public IEnumerable<User> GetAll()
    {
        return _users;
    }

    public User GetById(int id)
    {
        return _users.FirstOrDefault(x => x.Id == id);
    }

    // helper methods
    private string generateJwtToken(User user)
    {
        // generate token that is valid for 7 days
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    async public Task<bool> verifyToken(string email, string token) {

        var client = new DaprClientBuilder().Build();

        var state = await client.GetStateAsync<dynamic>("statestore", email);

        return state.ToString() == token;
    }

    async private Task<bool> storeToken(string email, string token) {
        var client = new DaprClientBuilder().Build();

        try {
            await client.SaveStateAsync("statestore", email, token);

            return true;
        }
        catch (Exception ex) {
            Console.WriteLine($"Error saving state: {ex.Message}");
            return false;
        }

    }
}