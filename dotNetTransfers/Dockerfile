FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 4002

ENV ASPNETCORE_URLS=http://+:4002

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["dotNetTransfers.csproj", "./"]
RUN dotnet restore "dotNetTransfers.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "dotNetTransfers.csproj" -o /app/build

#FROM build AS publish
#RUN dotnet publish "dotNetTransfers.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "dotNetTransfers.dll"]
