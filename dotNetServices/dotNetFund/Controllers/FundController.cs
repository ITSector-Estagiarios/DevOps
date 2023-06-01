namespace History.Controllers;

using Microsoft.AspNetCore.Mvc;
using Dapr;
using Dapr.Client;
using Fund.Models;
using System.Text.Json;

[ApiController]
public class FundController : ControllerBase
{



    [Topic("pubsub", "operation")]
    [HttpPost("receive-message")]
    public IActionResult ReceiveMessage(NewOperation operation)
    {
        Console.WriteLine("Received message: " + operation.type);
        if (operation.type == "Transfer") {
            TrasnferOperation transfer = JsonSerializer.Deserialize<TrasnferOperation>(operation.message_data);
            if (transfer.amount > 1000) {
                sendEmail(transfer);
            }
        }
        
        return Ok();
    }

    private async void sendEmail(TrasnferOperation transfer) {
        var daprClient = new DaprClientBuilder().Build();
        var emaildata = new Dictionary<string, string>
        {
            ["emailTo"] = transfer.email,
            ["subject"] = "Test email"
        };
        var data = "Would you be interested in a Fund investment?";
        string jsonString = JsonSerializer.Serialize(transfer);

        await daprClient.InvokeBindingAsync("sendemail", "create", data, emaildata);
        
        Console.WriteLine("Email sent successfully.");
    }


}
