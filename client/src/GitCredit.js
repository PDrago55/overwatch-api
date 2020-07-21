import React from "react";
import styled from "styled-components";
function GitCredit() {
  return (
    <>
      <div>The Website was Built by Stephen Prizio and Paolo Drago</div>
      <Container>
        <div className="card">
          <img
            className="imageStlye"
            src="Headshot.JPG"
            alt="1"
            height="100px"
            width="100px"
          ></img>
          <div>
            Paolo is a Full-Stack Web Developer specializing in Javascript.
          </div>
        </div>
        <div className="card">
          <img
            className="imageStlye"
            src="Headshot.JPG"
            alt="2"
            height="100px"
            width="100px"
          ></img>
          <div>
            Stephen is a Full-Stack Software Developer specializing in Java.
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  .imageStlye {
    border-radius: 50%;
  }
  .card {
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
  }
`;

export default GitCredit;
