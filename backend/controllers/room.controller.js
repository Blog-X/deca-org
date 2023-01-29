import Room from "../models/room.model.js";

const addParticipant = async (req, res) => {
  const { roomId, peerId, peerName, peerEthAddress } = req.body;
  try {
    const room = await Room.findOne({
      roomId: roomId,
    });
    if (room) {
      const peers = room.peers;
      const newPeer = {
        peerId,
        peerName,
        peerEthAddress,
      };
      peers.push(newPeer);
      const updatedRoom = await Room.findOneAndUpdate(
        {
          roomId: roomId,
        },
        {
          peers: peers,
        }
      );
      if (updatedRoom) {
        return res
          .status(200)
          .json({ room: updatedRoom, message: "Room updated successfully" });
      } else {
        return res.status(401).json({
          room: room,
          message: "Failed to update room",
        });
      }
    } else {
      const newRoom = new Room({
        roomId: roomId,
        peers: [
          {
            peerId: peerId,
            peerName: peerName,
            peerEthAddress: peerEthAddress,
          },
        ],
      });
      const saveCheck = await newRoom.save();
      if (saveCheck) {
        return res
          .status(200)
          .json({ room: newRoom, message: "Room saved successfully" });
      } else {
        return res.status(401).json({
          error: "Failed to save room",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Couldn't update room at this stage. Please try again" });
  }
};

const getParticipants = async (req, res) => {
  const { roomId } = req.body;
  const room = await Room.findOne({
    roomId: roomId,
  });
  if (room) {
    return res
      .status(200)
      .json({ room: room.peers, message: "Room found successfully" });
  } else {
    return res.status(401).json({
      error: "Room not found",
    });
  }
};

export { addParticipant, getParticipants };
