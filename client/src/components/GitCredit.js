import React from "react";
import styled from "styled-components";
function GitCredit() {
  return (
    <>
      <HeaderPrint>
        The Website was Built by Stephen Prizio and Paolo Drago
      </HeaderPrint>
      <Container>
        <div className="card" id="section1">
          <div className="smallCard">
            <a className="link" href="https://github.com/PDrago55">
              <div className="imageHolder">
                <img
                  className="imageStlye"
                  src="Headshot.JPG"
                  alt="1"
                  height="200px"
                  width="200px"
                ></img>
              </div>
              <div className="description">
                Paolo is a Full-Stack Web Developer specializing in Javascript.
              </div>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="smallCard">
            <a className="link" href="https://github.com/sPrizio">
              <div className="imageHolder">
                <img
                  className="imageStlye"
                  src="Headshot.JPG"
                  alt="2"
                  height="200px"
                  width="200px"
                ></img>
              </div>
              <div className="description">
                Stephen is a Full-Stack Software Developer specializing in Java.
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

const HeaderPrint = styled.h1`
  text-align: center;
  margin: 25px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  .imageStlye {
    border-radius: 50%;
    border: 1px solid black;
  }
  .link {
    text-decoration: none;
    color: #000000;
  }
  .card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    margin-bottom: 60px;
  }
  .imageHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .smallCard {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    width: 50%;
    height: 250px;
    padding: 50px;
    transition: transform 1s;
    box-shadow: 3px 3px 5px 6px #ccc;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
  .description {
    padding: 10px;
    font-size: 25px;
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .imageStlye {
      height: 100px;
      width: 100px;
    }
  }
`;

export default GitCredit;
