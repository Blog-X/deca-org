import { useRouter } from "next/router";

import React from "react";

const Meeting = () => {
  const router = useRouter();
  const slug = router.query.org_team_slug;
  return <div>
    <h1>
        {slug}
    </h1>
  </div>;
};

export default Meeting;
