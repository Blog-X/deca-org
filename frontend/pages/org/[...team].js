import React from "react";
import { useRouter } from "next/router";

const TeamPage = () => {
  const router = useRouter();
  const slug = router.query.team;
  const orgName = slug ? slug[0] : "Organization";
  const teamName = slug ? slug.slice(1).join("_") : "Organization";
  return (
    <div>
      <p>Slug: {slug}</p>
      <p>orgName: {orgName}</p>
      <p>teamName: {teamName}</p>
    </div>
  );
};

export default TeamPage;
