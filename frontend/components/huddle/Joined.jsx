import React from "react";
import Controls from "./Controls";
import MeetNavbar from "./MeetNavbar";
import MeVideoElem from "./MeVideoElem";
import PeerVideoAudioElem from "./PeerVideoAudioElem";
import { useHuddleStore } from "@huddle01/huddle01-client/store";
import { huddleClient } from "@/constants/api.constants";

const Joined = (props) => {
  const peerId = useHuddleStore((state) => state.peerId);
  const hostId = useHuddleStore((state) => state.hostId);
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);

  //   console.log(props);
  const getFactor = (num) => {
    if (num == 0) return 1;
    if (num === 1) return 1.2;
    if (num === 2) return 0.2;
    if (num === 3) return -0.8;
    return -1;
  };
  const videoWidth =
    ((window.innerWidth / 4) * 3) /
    (props.peersKeys.length + getFactor(props.peersKeys.length));
  // console.log(videoWidth);

  return (
    <div className="h-screen w-screen ">
      <div className="top-bar w-screen">
        <MeetNavbar name={props.name} roomId={props.roomId} />
      </div>
      <div className="flex h-screen w-screen overflow-x-hidden">
        <div className="video-rendering basis-3/4 bg-base-300 h-full overflow-y-auto">
          {props.peersKeys.length >= 0 && (
            <div className="flex flex-row flex-wrap max-h-3/4 overflow-y-auto">
              {props.peersKeys.map((key) => (
                <div
                  key={`peer-${key}`}
                  style={{ width: videoWidth }}
                  className="space-between p-2 m-2 bg-base-200 h-fit rounded-lg mx-auto "
                >
                  <PeerVideoAudioElem
                    key={`peerId-${key}`}
                    peerIdAtIndex={key}
                  />
                </div>
              ))}
              <div
                style={{ width: videoWidth }}
                className="my-video p-2 m-2 bg-primary h-fit rounded-lg mx-auto"
              >
                <MeVideoElem />
              </div>
            </div>
          )}
          <br />
          <div className="controls">
            <Controls />
          </div>
        </div>
        <div className="bg- w-1/4 mx-2 h-screen ">
          <div className="participants bg-base-300 max-h-1/3 overflow-y-auto">
            <div className="p-2 bg-base-200 rounded-lg mx-auto">
              <h1 className="text-center text-white text-lg">Participants</h1>
              <div className="participants-list">
                <ul>
                  <li>
                    <span>1.</span>
                    <span className="p-1">{props.name}</span>
                  </li>
                  {/* {props.nameArr.map((key, i) => (
                    <li key={i}>
                      <span>{i + 2}.</span>
                      <span className="p-1">{key.name}</span>
                    </li>
                  ))} */}
                  {props.peersKeys.map((key, i) => (
                    <div className="p-2" key={`peerId${i}`}>
                      <li key={i}>
                        <span>{i + 2}.</span>
                        <span className="p-1">{key}</span>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="participants bg-base-300 max-h-1/3 overflow-y-auto">
            <div className="p-2 bg-base-200 rounded-lg mx-auto">
              {peerId === hostId && <h1 className="text-center text-white text-lg">
                Lobby Participants
              </h1>}
              <br />
              <div className="lobby-list">
                {peerId === hostId &&
                  lobbyPeers?.map((peer, i) => (
                    <div className="flex flex-row justify-between"
                    key={`${peerId}_${i}`}>
                      <span className="p-1"> { i + 1 }. </span>
                      <span className="p-2">{peer.peerId}</span>
                      
                      <button
                        className="btn btn-success btn-xs	"
                        onClick={async () =>
                          await huddleClient.allowLobbyPeerToJoinRoom(peer.peerId)
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-warning btn-xs"
                        onClick={async () =>
                          await huddleClient.disallowLobbyPeerFromJoiningRoom(
                            peer.peerId
                          )
                        }
                      >
                        Reject
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="participants bg-base-300 max-h-1/3 overflow-y-auto">
            <div className="p-2 bg-base-200 rounded-lg mx-auto">
              <h1 className="text-center text-white text-lg">Push Chat</h1>
              <div className="chats-list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joined;
