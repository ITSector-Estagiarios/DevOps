@echo off

start /B cmd /k "cd website && npm start"
start /B cmd /k "cd dotNetServices/dotNetLogin && dapr run --app-id loginapi --app-port 4000 --dapr-http-port 5000 dotnet run"
start /B cmd /k "cd dotNetServices/dotNetConsultas && dapr run --app-id consultasapi --app-port 4001 --dapr-http-port 5001 dotnet run"
start /B cmd /k "cd dotNetServices/dotNetTransfers && dapr run --app-id transferapi --app-port 4002 --dapr-http-port 5002 dotnet run"
start /B cmd /k "cd dotNetServices/dotNetHistory && dapr run --app-id historyapi --app-port 4003 --dapr-http-port 5003 dotnet run"
start /B cmd /k "dapr dashboard -p 9000"