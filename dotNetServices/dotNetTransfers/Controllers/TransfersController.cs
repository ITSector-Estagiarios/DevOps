using Microsoft.AspNetCore.Mvc;
using Dapr.Client;
using System.Text.Json;
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
        public ActionResult Post(TransferRequest request)
        {
            if (!verifyToken(request.token).Result) {
                return BadRequest("Invalid user");
            }
            if (request.ToAccount == fromAccount)
            {
                return BadRequest("You cannot transfer money to the same account.");
            }

            if (string.IsNullOrEmpty(request.ToAccount) || request.Amount == null)
            {
                return BadRequest("Please fill in all fields");
            }

            decimal transferAmount;
            if (!decimal.TryParse(request.Amount, out transferAmount) || transferAmount <= 0)
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

            sendEmail(request, transferAmount);


            return Ok(new { balance });
        }
    
        async private Task<bool> verifyToken(string token) {
            
            var daprClient = DaprClient.CreateInvokeHttpClient("localhost:5000");
            //Check token
            var response = await daprClient.PostAsJsonAsync("http://loginapi/users/verify", new { Token = token } );



            return response.IsSuccessStatusCode;
        }

        async private void sendEmail(TransferRequest request, decimal transferAmount) {
            
            // send email notification
            var emailContent = $"Transfer of {transferAmount.ToString("C")} made from account {fromAccount} to account {request.ToAccount}.";
            var data = new
            {
                personalizations = new List<dynamic>
                {
                    new
                    {
                        to = new List<dynamic>
                        {
                            new { email = "user@email.com" }
                        }
                    }
                },
                from = new { email = "joao.felix@itsector.pt" },
                subject = "Transfer request",
                content = new List<dynamic>
                {
                    new
                    {
                        type = "text/plain",
                        value = $"Transfer request: {transferAmount:C} from account {fromAccount} to account {request.ToAccount}"
                    }
                }
            };

            var json = JsonSerializer.Serialize(data); // Serialize data to JSON

            using var client = new DaprClientBuilder().Build();
            await client.PublishEventAsync("my-sendgrid-binding", "create", json); // Publish the serialized JSON
        }

    }
    public class Transfer
    {
        public string? FromAccount { get; set; }
        public string? ToAccount { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}
