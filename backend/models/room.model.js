import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    }, 
    peers: [
        {
            peerId: {
                type: String,
                required: true
            },
            peerName: {
                type: String,
                required: true
            },
            peerEthAddress: {
                type: String,
                required: true
            },
        }
    ]

}, {
    timestamps: true,
    collection: 'users'
});

export default mongoose.model('Room', roomSchema);
