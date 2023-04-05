FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 4001

ENV ASPNETCORE_URLS=http://+:4001

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["consultas.csproj", "./"]
RUN dotnet restore "consultas.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "consultas.csproj" -o /app/build

#FROM build AS publish
#RUN dotnet publish "WebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "consultas.dll"]
