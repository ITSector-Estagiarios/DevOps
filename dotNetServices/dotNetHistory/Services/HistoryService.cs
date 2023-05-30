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
    // users hardcoded for simplicity, store in a db with hashed passwords in production applications
    private List<Operation> _operations = new List<Operation>
    {
        new Operation { id = 1, user_id = 1, type = "Consult", date = new DateTime(2023, 03, 02) },
        new Operation { id = 2, user_id = 1, type = "Consult", date = new DateTime(2023, 03, 06) },
        new Operation { id = 3, user_id = 1, type = "Consult", date = new DateTime(2023, 05, 19) },
        new Operation { id = 4, user_id = 2, type = "Consult", date = new DateTime(2023, 02, 16) },
        new Operation { id = 5, user_id = 2, type = "Consult", date = new DateTime(2023, 04, 20) },
        new Operation { id = 6, user_id = 2, type = "Transfer", date = new DateTime(2023, 05, 12) },
        
    };


    public IEnumerable<Operation> GetUserOperations(int id)
    {
        var user_operations = _operations.Where(x => x.user_id == id).ToList();
        return user_operations;
    }

    public void addNewOperation(NewOperation operation) 
    {
        int newId = _operations[_operations.Count - 1].id + 1;
        Operation newOperation = new Operation{
            id = newId,
            user_id = 1,
            type = operation.type,
            date = operation.date
        };
        _operations.Add(newOperation);
    }

}