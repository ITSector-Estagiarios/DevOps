namespace WebApi.Services;

using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System;
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
    ValidationResult verifyToken(string accessToken);
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

        var userId = Guid.NewGuid().ToString();

        if(!storeUser(userId, user).Result) return null;

        // authentication successful so generate jwt token
        string token = generateJwtToken(userId);
        
        var response = new AuthenticateResponse(token);

        return response;
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
    private string generateJwtToken(string userId)
    {
        // generate token that is valid for 7 days
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.Secret));
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.NameIdentifier, userId) }),
            Expires = DateTime.UtcNow.AddHours(8),
            SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public ValidationResult verifyToken(string accessToken) {
        try {
            var handler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.Secret));

            var validationParameters = new TokenValidationParameters{
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = key,
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            };

            ClaimsPrincipal principal = handler.ValidateToken(
                accessToken, validationParameters, out SecurityToken securityToken);


            return new ValidationResult { IsValid = true, userId = principal.FindFirst(ClaimTypes.NameIdentifier).Value };
        }
        catch (Exception ex) {
            return new ValidationResult { IsValid = false, Error = ex.Message };
        }
    }

    async private Task<bool> storeUser(string Guid, User user) {
        var client = new DaprClientBuilder().Build();

        try {
            Console.WriteLine("Login: " + Guid);
            await client.SaveStateAsync("statestore", Guid, user);
            
            return true;
        }
        catch (Exception ex) {
            Console.WriteLine($"Error saving state: {ex.Message}");
            return false;
        }

    }
}