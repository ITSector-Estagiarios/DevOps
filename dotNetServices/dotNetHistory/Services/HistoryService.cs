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
        
        Operation newOperation = new Operation{
            id = newId,
            user_id = operation.user_id,
            type = operation.type,
            date = operation.date,
            firstName = operation.firstName,
            lastName = operation.lastName
        };
        _operations.Add(newOperation);
    }

}