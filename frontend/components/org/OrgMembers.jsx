import React from "react";

const OrgMembers = ({members}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full h-1/2 overflow-y-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map((member, index) => {
                return (
                  <tr key={index} className={index % 2 === 0 ? `active` : ""}>
                    <th>{index + 1}</th>
                    <td>{member.name}</td>
                    <td>{member.address}</td>
                    <td>{member.team}</td>
                  </tr>
                );
              })}

            {/* <tr>
              <th>1</th>
              <td>Team (x)</td>
              <td>Finance</td>
            </tr>
            <tr className="active">
              <th>2</th>
              <td>Team (x)</td>
              <td>Tech</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Team (x)</td>
              <td>Cloud</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgMembers;
