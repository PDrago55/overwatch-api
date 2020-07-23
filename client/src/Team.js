import React, { useEffect } from "react";

function Team() {
  useEffect(() => {
    fetch("/api/squad/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });
  return <div>Teams</div>;
}

export default Team;
