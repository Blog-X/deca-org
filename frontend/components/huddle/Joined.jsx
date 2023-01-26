import React from "react";
import MeetNavbar from "./MeetNavbar";
import MeVideoElem from "./MeVideoElem";
import PeerVideoAudioElem from "./PeerVideoAudioElem";

const Joined = (props) => {
//   console.log(props);
    const videoWidth = (window.innerWidth / 4 * 3) / (props.peersKeys.length - 1.5);
    console.log(videoWidth);

  return (
    <div className="h-screen w-screen ">
      <div className="top-bar w-screen">
        <MeetNavbar name={props.name} roomId={props.roomId} />
      </div>
      <div className="flex h-screen w-screen overflow-x-hidden">
        <div className="video-rendering basis-3/4 bg-base-300 h-full overflow-y-auto">
          <div className="flex flex-row flex-wrap h-3/4 overflow-y-auto">
            {props.peersKeys.map((key) => (
              <div style={{ width: videoWidth }} className="space-between p-2 m-2 bg-base-200 h-fit rounded-lg mx-auto ">
                <PeerVideoAudioElem key={`peerId-${key}`} peerIdAtIndex={key} />
              </div>
            ))}
          </div>
          <br />
          <div className="host-controls">

          </div>
          <div className="my-video">
            <MeVideoElem />
          </div>
        </div>
        <div className="bg-white w-1/4 h-screen"></div>
      </div>
    </div>
  );
};

export default Joined;
