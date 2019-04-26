import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <p>{`${name}, your current entry count is ...`}</p>
      <div className="white f3" />
      <div className="white f1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;
