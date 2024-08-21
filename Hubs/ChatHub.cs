using Babbler.DataStore;
using Babbler.Models;
using Microsoft.AspNetCore.SignalR;

namespace Babbler.Hubs
{
    public class ChatHub : Hub
    {
        private readonly SharedDb _shared;
        public ChatHub(SharedDb shared) => _shared = shared;

        public async Task JoinChat(UserConnection conn)
        {
            // ReceieveMessage is the function, admin is the user sending the message, last one is the message
            await Clients.All.SendAsync("ReceieveMessage", "admin", $"{conn.Username} has joined!");
        }

        public async Task JoinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);

            // Add a the joining user's unique connection ID to the in mem db
            _shared.connections[Context.ConnectionId] = conn;

            await Clients.Group(conn.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin", $"{conn.Username} has joined {conn.ChatRoom}!");
        }

        public async Task SendMessage(string msg)
        {
            // Take user connection id and store into conn, then we send the message in the group chatroom
            if (_shared.connections.TryGetValue(Context.ConnectionId, out UserConnection conn))
            {
                await Clients.Group(conn.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", conn.Username, msg);
            }
        }
        
    }
}
