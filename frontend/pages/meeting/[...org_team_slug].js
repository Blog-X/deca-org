import Meeting from "@/components/huddle/Meeting";
import { useRouter } from "next/router";

import React from "react";

const MeetingPage = () => {
  const router = useRouter();
  const meetId = router.query.org_team_slug;
  return <div>
    <h1>
        {meetId}
        <Meeting currentRoomId={meetId} />
    </h1>
  </div>;
};

export default MeetingPage;
