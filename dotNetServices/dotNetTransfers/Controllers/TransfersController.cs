using Microsoft.AspNetCore.Mvc;
using Dapr.Client;
using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text.Json;
using System.Threading.Tasks;
using Transfers.Models;

namespace Transfers.Controllers
{
    [ApiController]
    public class TransfersController : ControllerBase
    {
        private static string fromAccount = "985632014521";
        private static List<Transfer> transfers = new List<Transfer>()
        {
            new Transfer { id = 1, FromAccount = "985632014521", ToAccount = "127456214563", Amount = 500, Date = new DateTime(2023, 03, 03) },
            new Transfer { id = 2, FromAccount = "985632014521", ToAccount = "847516329548", Amount = 1000, Date = new DateTime(2023, 03, 02) },
        };
        private static decimal balance = 100000;

        [HttpPost("transfer")]
        public ActionResult Post(TransferRequest request)
        {
            string token;
            if (request.token == null) return BadRequest("Invalid token");
            else token = request.token;
            string? guid = VerifyToken(token).Result;
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

            User? user = getUser(guid).Result;
            if (user == null)
            {
                return BadRequest("Invalid user");
            }
            string? code = null;
            code = SendEmail(request, transferAmount, user.email).Result;
            if (code == null) {
                return BadRequest("Error sending an email");
            }
            else

            return Ok( new { balance });
        }

        private async Task<string?> VerifyToken(string token)
        {
            string? userId = null;

            var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
            // Check token
            var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
            userId = await response.Content.ReadAsStringAsync();
            TokenResponse? tokenresponse = JsonSerializer.Deserialize<TokenResponse>(userId);
            if (tokenresponse == null) {
                return null;
            } else {
                if (tokenresponse.IsValid)
                    {
                        userId = tokenresponse.userId;
                    }
            }
            return userId;
        }

        async private Task<User?> getUser(string guid) {
            var client = new DaprClientBuilder().Build();
            string? jsonString = await client.GetStateAsync<string>("statestore", guid);
            if (jsonString == null) return null;
            User? user = JsonSerializer.Deserialize<User>(jsonString);
            return user;
        }

        private async Task<string?> SendEmail(TransferRequest request, decimal transferAmount, string? user_email)
        {
            var daprClient = new DaprClientBuilder().Build();
            var metadata = new Dictionary<string, string>
            {
                ["emailTo"] = "test@subject.com",
                ["subject"] = "Test email"
            };
            Random random = new Random();
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string? code = new string(Enumerable.Range(1, 4).Select(_ => chars[random.Next(chars.Length)]).ToArray());
            var data = "Your code is: " + code;


            await daprClient.InvokeBindingAsync("sendemail", "create", data, metadata);
            
            Console.WriteLine("Email sent successfully.");
            return code;
        }
    }
}