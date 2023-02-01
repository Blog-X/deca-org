import React from "react";

const PastRecordings = () => {
  const [recordings, setRecordings] = React.useState([]);
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Link</th>
                <th>Size</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {recordings &&
                recordings.map((meet, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{meet.link}</td>
                      <td>{meet.size}</td>
                      <td>{meet.duration}</td>
                    </tr>
                  );
                })}

              <tr>
                <th>1</th>
                <td>Team (x)</td>
                <td>Finance</td>
                <td>10</td>
              </tr>
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastRecordings;
