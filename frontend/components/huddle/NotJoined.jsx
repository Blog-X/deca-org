import React from "react";
import { darkMode } from "@/constants/colors.constants";
import {
  NOT_JOINED_MEET_TITLE,
  NOT_JOINED_MEET_SUBTITLE,
} from "@/constants/app.constants";

import { huddleClient } from "@/constants/api.constants";

const NotJoined = (props) => {
  const handleJoin = async () => {
    try {
      await huddleClient.join(props.currentRoomId, {
        address: props.ethAddress,
        wallet: "",
        ens: "axit.eth",
      });
      props.setNameArr([
        ...nameArr,
        {
          name: "name",
          address: props.ethAddress,
          id: props.peerId,
        },
      ]);
      alert("joined");
      console.log("joined");
      //   window.location.reload()
    } catch (error) {
      console.log({ error });
    }
  };
//   console.log(props);
  return (
    <div>
      <div className="mx-auto mt-20 card w-1/3 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{NOT_JOINED_MEET_TITLE}</h2>
          <p>
            {NOT_JOINED_MEET_SUBTITLE}{" "}
            <span className="text-bold text-lg">{props.roomId}</span> !
          </p>
          <div className="card-actions justify-end">
            <input
              type="text"
              placeholder="Please enter your name"
              onChange={(e) => {
                props.setName(e.target.value);
              }}
              className="input input-bordered input-primary w-full my-2"
            />
            <div className="alert alert-info shadow-lg my-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>
                  Please note that this name will be final and can't be changed
                  henceforth in the meeting.
                </span>
              </div>
            </div>
            <button className="btn" onClick={async () => await handleJoin()}>
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotJoined;
