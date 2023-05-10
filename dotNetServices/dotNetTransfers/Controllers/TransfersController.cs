using Microsoft.AspNetCore.Mvc;
using Dapr.Client;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text.Json;
using System.Threading.Tasks;
using Transfer.Models;

namespace Transfer.Controllers
{
    [ApiController]
    public class TransfersController : ControllerBase
    {
        private static string fromAccount = "985632014521";
        private static List<Transfer> transfers = new List<Transfer>()
        {
            new Transfer { FromAccount = "985632014521", ToAccount = "127456214563", Amount = 500, Date = new DateTime(2023, 03, 03) },
            new Transfer { FromAccount = "985632014521", ToAccount = "847516329548", Amount = 1000, Date = new DateTime(2023, 03, 02) },
        };
        private static decimal balance = 100000;

        [HttpPost("transfer")]
        public async Task<ActionResult> Post(TransferRequest request)
        {
            string guid = await VerifyToken(request.token);
            if (guid == null)
            {
                return BadRequest("Invalid user");
            }

            if (request.ToAccount == fromAccount)
            {
                return BadRequest("You cannot transfer money to the same account.");
            }

            if (string.IsNullOrEmpty(request.ToAccount) || string.IsNullOrEmpty(request.Amount))
            {
                return BadRequest("Please fill in all fields");
            }

            if (!decimal.TryParse(request.Amount, out decimal transferAmount) || transferAmount <= 0)
            {
                return BadRequest("Please enter a valid transfer amount");
            }

            if (transferAmount > balance)
            {
                return BadRequest("You don't have enough balance for this transfer");
            }

            var newTransfer = new Transfer
            {
                FromAccount = fromAccount,
                ToAccount = request.ToAccount,
                Amount = transferAmount,
                Date = DateTime.Now,
            };

            transfers.Add(newTransfer);
            balance -= transferAmount;

            User user = await GetUser(guid);
            if (user == null)
            {
                return BadRequest("Invalid user");
            }

            await SendEmail(request, transferAmount, user.email);

            return Ok(new { balance });
        }

        private async Task<string> VerifyToken(string token)
        {
            string userId = null;

            var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
            // Check token
            var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
            userId = await response.Content.ReadAsStringAsync();
            TokenResponse tokenresponse = JsonSerializer.Deserialize<TokenResponse>(userId);
            if (tokenresponse.IsValid)
            {
                userId = tokenresponse.userId;
            }

            return userId;
        }

        private async Task<User> GetUser(string guid)
        {
            var client = new DaprClientBuilder().Build();
            (string jsonString, _) = await client.GetStateAndETagAsync<string>("statestore", guid);
            if (jsonString == null)
            {
                return null;
            }

            User user = JsonSerializer.Deserialize<User>(jsonString);
            return user;
        }

        private async Task SendEmail(TransferRequest request, decimal transferAmount, string user_email)
        {
            SmtpClient smtpClient = new SmtpClient("your-smtp-server");
            MailMessage mailMessage = new MailMessage
            {
                From = new MailAddress("sender@example.com"),
                Subject = "Transfer request",
                Body = $"Transfer request: {transferAmount:C} from account {fromAccount} to account {request.ToAccount}"
            };
            mailMessage.To.Add(new MailAddress(user_email));
            
            // Send email asynchronously
            try
            {
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                // Handle any exceptions occurred during sending the email
                Console.WriteLine($"Error sending email: {ex.Message}");
                // throw an exception or return an appropriate error response
                throw;
            }
        }

    public class Transfer
    {
        public string? FromAccount { get; set; }
        public string? ToAccount { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }

    public class User {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }

    public class TokenResponse {
        public bool IsValid { get; set; }
        public string Error { get; set; }
        public string userId { get; set; }
    }
}}
