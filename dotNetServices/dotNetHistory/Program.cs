using History.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers().AddDapr();

builder.Services.AddSingleton<IHistoryService, HistoryService>();

var app = builder.Build();

{
    // global cors policy
    app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());

    app.MapControllers();
    app.UseCloudEvents();
    app.MapSubscribeHandler();
}



app.Run("http://localhost:4003");
