import AxiosJsInstance from "@/hooks/AxiosInstance";

const addParticipant = async (roomId, peerId, peerName, peerEthAddress) => {
  const { data } = await AxiosJsInstance.post("api/room/addPeer", {
    roomId,
    peerId,
    peerName,
    peerEthAddress,
  });
  return data;
};

const updateParticipant = async (roomId, peerId, peerEthAddress) => {
    console.log(roomId, peerId, peerEthAddress);
  const { data } = await AxiosJsInstance.post("api/room/updatePeerId", {
    roomId,
    peerId,
    peerEthAddress,
  });
  return data;
};

const getParticipants = async (roomId) => {
    const { data } = await AxiosJsInstance.post("api/room/getPeers", {
        roomId
    });
    return data;
}

const removeParticipant = async (roomId, ethAddress) => {
    const response = await AxiosJsInstance.post("api/room/removePeer", {
        roomId,
        ethAddress
    });
}

export { addParticipant, updateParticipant, getParticipants, removeParticipant };
