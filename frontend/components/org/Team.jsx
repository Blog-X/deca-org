import React from "react";

const Team = ({ team }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Task</th>
              <th>No. of members</th>
            </tr>
          </thead>
          <tbody>
            {team &&
              team.map((member, index) => {
                return (
                  <tr key={index} className={index % 2 === 0 ? ``: "active"}>
                    <th>{index + 1}</th>
                    <td>{member.teamName}</td>
                    <td>{member.task}</td>
                    <td>{member.noOfMembers}</td>
                  </tr>
                );
              })}

            {/* <tr>
              <th>1</th>
              <td>Team (x)</td>
              <td>Finance</td>
              <td>10</td>
            </tr>
            <tr className="active">
              <th>2</th>
              <td>Team (x)</td>
              <td>Tech</td>
              <td>20</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Team (x)</td>
              <td>Cloud</td>
              <td>5</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
