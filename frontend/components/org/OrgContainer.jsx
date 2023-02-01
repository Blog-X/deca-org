import React from "react";
import HeroSection from "./HeroSection";
import Team from "./Team";
import OrgChat from "./OrgChats";
import Link from "next/link";
import { useRouter } from "next/router";
import { APP_DOMAIN } from "@/constants/app.constants";
import PastRecordings from "./PastRecordings";

const OrgContainer = ({ orgName }) => {
  const [team, setTeam] = React.useState([]);
  const [meetLink, setMeetLink] = React.useState("");
  const router = useRouter();
  return (
    <div className="px-4">
      <HeroSection orgName={orgName} />
      <div className="flex flex-col sm:flex-row">
        <div className="mt-12 w-full md:w-1/2">
          <Team team={team} />
          <div className="my-5 py-2 w-full flex flex-col ">
            <button
              className="mx-auto btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => {
                setMeetLink(APP_DOMAIN + router.asPath);
                console.log(meetLink);
              }}
            >
              Generate a meeting link
            </button>
            {meetLink && (
              <Link className="mx-auto m-2 link link-accent" href={meetLink}>
                {" "}
                Start a meeting!{" "}
              </Link>
            )}
          </div>
          <div className="my-5 py-2 w-full flex flex-col ">
            <h1 className="text-2xl mx-auto my-4">Past recordings</h1>
            <PastRecordings />
          <div className="mx-auto my-4">
            Wanna stream some stuff to your organization? Click here to stream using Livepeer!
          </div>
          <div className="mx-auto my-4">
            Need a place to store files permanently with complete security? CLick here and store your files using LightHouse!
          </div>
          </div>
        </div>
        <div className="mx-auto">
          <OrgChat />
        </div>
      </div>
    </div>
  );
};

export default OrgContainer;
