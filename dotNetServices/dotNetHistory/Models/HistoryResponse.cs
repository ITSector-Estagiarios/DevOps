namespace History.Models;

public class HistoryResponse
{
    public List<Operation> operations { get; set; }

    public HistoryResponse(List<Operation> _operations)
    {
        operations = _operations;
    }
}