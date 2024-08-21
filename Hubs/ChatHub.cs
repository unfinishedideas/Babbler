using Babbler.Models;
using Microsoft.AspNetCore.SignalR;

namespace Babbler.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnection conn)
        {
            // ReceieveMessage is the function, admin is the user sending the message, last one is the message
            await Clients.All.SendAsync("ReceieveMessage", "admin", $"{conn.Username} has joined!");
        }

        public async Task JoinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);
            await Clients.Group(conn.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin", $"{conn.Username} has joined {conn.ChatRoom}!");
        }
        
    }
}
