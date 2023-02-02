import React from "react";

const OrgChats = () => {
  const [roomChats, setRoomChats] = React.useState([]);
  return (
    <div className="w-full">
        <h1 className="text-2xl mx-auto my-10 w-full">
            Chats
        </h1>
      {roomChats &&
        roomChats.map((chat, i) => {
          return chat.peerId === myPeerId ? (
            <div key={i} className="chat chat-end">
              <div className="chat-header">
                {chat?.displayName}
                <time className="text-xs opacity-50">
                  {chat?.timestamp.slice(11, 16)}
                </time>
              </div>
              <div className="chat-bubble">{chat?.message}</div>
            </div>
          ) : (
            <div key={i} className="chat chat-start">
              <div className="chat-header">
                {chat?.displayName}
                <time className="text-xs opacity-50">
                  {chat?.timestamp.slice(11, 16)}
                </time>
              </div>
              <div className="chat-bubble">{chat?.message}</div>
            </div>
          );
        })}
    </div>
  );
};

export default OrgChats;
