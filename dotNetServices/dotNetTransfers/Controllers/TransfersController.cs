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
            User? user = VerifyToken(token).Result;
            if (user == null)
            {
                return StatusCode(401, "Session ended!");
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
            int newId = transfers[transfers.Count - 1].id + 1;
            Transfer newTransfer = new Transfer
            {
                id = newId, 
                FromAccount = fromAccount,
                ToAccount = request.ToAccount,
                Amount = transferAmount,
                Date = DateTime.Now,
            };
            string? code = null;
            code = SendEmail(request, transferAmount, user.email, newTransfer).Result;
            if (code == null) {
                return BadRequest("Error sending an email");
            }
            return Ok();
        }

        
        [HttpPost("transfer_confirm")]
        public ActionResult transfer_confirm(TransferConfirm request)
        {
            string token;
            if (request.token == null) return BadRequest("Invalid token");
            else token = request.token;
            User? user = VerifyToken(token).Result;
            if (user == null)
            {
                return StatusCode(401, "Session ended!");
            } 
            string code;
            if (request.code == null) return BadRequest("Invalid Code");
            else code = request.code;
            Transfer? transfer = verifyCode(code).Result;
            if (transfer == null)
            {
                return BadRequest("Invalid transfer");
            }

            transfers.Add(transfer);
            balance -= transfer.Amount;
            deleteCode(code);
            publishOperation(user);

            return Ok( new { balance });
        }


        private async Task<User?> VerifyToken(string token)
        {
            var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
            // Check token
            var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token });
            if (response.IsSuccessStatusCode) {
                string response_string = await response.Content.ReadAsStringAsync();
                User? user = JsonSerializer.Deserialize<User>(response_string);
                return user;
            }
            return null;
        }


        private async Task<string?> SendEmail(TransferRequest request, decimal transferAmount, string user_email, Transfer transfer)
        {
            var daprClient = new DaprClientBuilder().Build();
            var emaildata = new Dictionary<string, string>
            {
                ["emailTo"] = user_email,
                ["subject"] = "Test email"
            };
            Random random = new Random();
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string? code = new string(Enumerable.Range(1, 4).Select(_ => chars[random.Next(chars.Length)]).ToArray());
            var data = "Your code is: " + code;
            string jsonString = JsonSerializer.Serialize(transfer);
            await daprClient.SaveStateAsync("statestore", code, jsonString,  metadata: new Dictionary<string, string>() { 
                { 
                    "metadata.ttlInSeconds", "120" 
                } 
            });
            await daprClient.InvokeBindingAsync("sendemail", "create", data, emaildata);
            
            Console.WriteLine("Email sent successfully.");
            return code;
        }

        private async Task<Transfer?> verifyCode(string code) {
            var daprClient = new DaprClientBuilder().Build();
            string? jsonString = await daprClient.GetStateAsync<string>("statestore", code);
            if (jsonString == null) return null;
            Transfer? transfer = JsonSerializer.Deserialize<Transfer>(jsonString);
            return transfer;
        }

        private async void deleteCode(string code) {
            var daprClient = new DaprClientBuilder().Build();
            await daprClient.DeleteStateAsync("statestore", code);
        }

        private async void publishOperation(User user) {
            var daprClient = new DaprClientBuilder().Build();
            var data = new {
                type = "Transfer",
                date = DateTime.Now,
                user_id = user.Id,
                firstName = user.FirstName,
                lastName = user.LastName
            };
            //string jsonstring = JsonSerializer.Serialize(data);
            await daprClient.PublishEventAsync("pubsub","operation", data);
            Console.WriteLine("Sent Message!");
        }
    }
}