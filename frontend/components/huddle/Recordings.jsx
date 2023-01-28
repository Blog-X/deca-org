import React from "react";
import Link from "next/link";

const Recordings = ({ recordings }) => {
  return (
    <div>
        <h1>Recordings</h1>
      <table className="table w-fit">
        <thead>
          <tr>
            <th></th>
            <th>Sr. No.</th>
            <th>Download now</th>
            <th>Duration</th>
            <th>Size</th>
          </tr>
        </thead>
        {recordings.map((recording, i) => {
          console.log(recording);
          <div> <Link href={recording.url}> Download now! </Link> with video of {recording.duration/1000}s and {recording.size} Mb </div>
          {/* <div key={i}>
            <tr>
              <th>{i + 1}</th>
              <td><Link href={recording.url}> Download now! </Link> </td>
              <td>{recording.duration/1000}s</td>
              <td>{recording.size} Mb</td>
            </tr>
          </div>; */}
        })}
      </table>
    </div>
  );
};

export default Recordings;
