using Babbler.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSignalR(); 
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/chat");

app.Run();
