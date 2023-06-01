
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers().AddDapr();


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



app.Run("http://localhost:4004");
