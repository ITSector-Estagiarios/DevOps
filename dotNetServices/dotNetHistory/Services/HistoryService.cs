namespace History.Services;

using Microsoft.Extensions.Options;
using System;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using Dapr.Client;
using History.Models;


public interface IHistoryService
{
    IEnumerable<Operation> GetUserOperations(int id);
    void addNewOperation(NewOperation operation);
}

public class HistoryService : IHistoryService
{
    private List<Operation> _operations = new List<Operation>{};


    public IEnumerable<Operation> GetUserOperations(int id)
    {
        var user_operations = _operations.Where(x => x.user_id == id).ToList();
        return user_operations;
    }

    public void addNewOperation(NewOperation operation) 
    {
        int newId;
        if (_operations.Count == 0) {
            newId = 1;
        } else {
            newId = _operations[_operations.Count - 1].id + 1;
        }
        if (operation.type == "Transfer") {
            TrasnferOperation transfer = JsonSerializer.Deserialize<TrasnferOperation>(operation.message_data);
            Operation newOperation = new Operation{
                id = newId,
                user_id = transfer.user_id,
                type = operation.type,
                date = operation.date,
                firstName = transfer.firstName,
                lastName = transfer.lastName
            };
            _operations.Add(newOperation);
        }
        if (operation.type.Contains("Consult")) {
            ConsultOperation consult = JsonSerializer.Deserialize<ConsultOperation>(operation.message_data);
            Operation newOperation = new Operation{
                id = newId,
                user_id = consult.user_id,
                type = operation.type,
                date = operation.date,
                firstName = consult.firstName,
                lastName = consult.lastName
            };
            _operations.Add(newOperation);
        }
        

    }

}