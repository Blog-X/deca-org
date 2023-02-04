import AxiosJsInstance from "@/hooks/AxiosInstance";
import { getWalletDetails } from "@/hooks/getAddress.hook";
import React, { useEffect } from "react";

const OrgChats = ({ orgAddress, orgChatss }) => {
  const [orgChats, setOrgChats] = React.useState([]);
  const [userChat, setUserChat] = React.useState([]);
  const [myPeerId, setMyPeerId] = React.useState();

  useEffect(() => {
    const setId = async () => {
      const { address } = await getWalletDetails();
      setMyPeerId(address);
    }
    setId();
  }, []);

  useEffect(() => {
    const getChats = async () => {
      if (orgAddress === undefined) return;
      const { data } = await AxiosJsInstance.post("/api/orgChat/getChats", {
        orgAddress: orgAddress,
      });
      setOrgChats(data?.chats);
    };
    getChats();
  }, [orgChats]);
  return (
    <div className="w-full bg-base-300 h-3/4">
      <h1 className="text-2xl mx-auto mt-10 p-2 w-fit">Chats</h1>
      <hr />
      {orgChats &&
        orgChats.map((chat, i) => {
          return chat.peerId === myPeerId ? (
            <div key={i} className="chat chat-end ">
              <div className="chat-header">
                {chat?.displayName}
                <time className="text-xs opacity-50">
                  {chat?.timestamp?.slice(11, 16)}
                </time>
              </div>
              <div className="chat-bubble">{chat?.message}</div>
            </div>
          ) : (
            <div key={i} className="chat chat-start">
              <div className="chat-header">
                {chat?.displayName}
                <time className="text-xs opacity-50">
                  {chat?.timestamp?.slice(11, 16)}
                </time>
              </div>
              <div className="chat-bubble">{chat?.message}</div>
            </div>
          );
        })}
      <div className="w-full flex mt-10">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-5/6 mx-auto "
          onChange={(e) => setUserChat(e.target.value)}
        />
        <button className="btn btn-outline btn-accent mr-2" onClick={ () =>{
          AxiosJsInstance.post("/api/orgChat/addChat", {
            orgAddress: orgAddress,
            message: userChat,
            senderEthAddress: myPeerId,
          });
        }}>Send</button>
      </div>
    </div>
  );
};

export default OrgChats;
