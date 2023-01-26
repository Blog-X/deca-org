import Meeting from "@/components/huddle/Meeting";
import MeetRoom from "@/components/huddle/MeetRoom";
import { useRouter } from "next/router";
import { darkMode } from "@/constants/colors.constants";

import React from "react";

const MeetingPage = () => {
  const router = useRouter();
  const meetId = router.query.org_team_slug;
  return <div className="flex flex-col  bg-base-300  min-h-screen py-2">
    <h1>
        {/* {meetId} */}
        {/* <Meeting currentRoomId={meetId} /> */}
        <MeetRoom currentRoomId={meetId} ethAddress={'0xb17bc8c23e53f463F0332008D518121B74b260d2'} />
    </h1>
  </div>;
};

export default MeetingPage;
