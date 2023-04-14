namespace Consultas.Models;


public class AuthenticateExtractResponse
{
    public List<UserExtract> extracts { get; set; }

    public AuthenticateExtractResponse(List<UserExtract> _extracts)
    {
        extracts = _extracts;
    }
}