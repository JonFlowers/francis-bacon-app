import React from "react";
import styled, { keyframes } from "styled-components";

const doorTransition = keyframes`
    to {
        left:80px;
        width: 244px;
    }
`;
const doorBody = keyframes`
  to {
    transform: skew(-10deg, -10deg) scale(100%);
    opacity:1;
  }
`;
const doorEcto = keyframes`
    to {
        transform: skew(10deg, 10deg) scale(180%);
        opacity:1;
    }
`;
const doorEctoFade = keyframes`
    to {
        transform: scale(10%);
        opacity:0;
    }
`;
const DoorContainer = styled.div.attrs((props) => ({
  className: props.className
}))`
  & .hide {
    display: none;
  }
  & .transition {
    animation: 2s ease 0s 1 normal forwards running ${doorTransition};
  }
  & .transition div {
    animation: 1s ease 0s 1 normal forwards running ${doorEctoFade};
  }
  & :hover div#door-body {
    animation: 3s ease 0s infinite alternate none running ${doorBody};
  }
  & . :hover div#door-ecto {
    animation: 3s ease 0s infinite alternate none running ${doorEcto};
  }
`;
const Door = styled.a`
  background-color: #000;
  width: 200px;
  height: 320px;
  display: block;
  position: relative;
  left: 400px;
`;
const DoorEcto = styled.div`
  background: url("images/dyer-centre-ecto.png") center/40% no-repeat;
  width: 116px;
  height: 82px;
  position: relative;
  top: 264px;
  left: 50px;
  opacity: 0.2;
`;
const DoorBody = styled.div`
  background: url("images/dyer-centre-body.png") center/80% no-repeat;
  width: 200px;
  height: 145px;
  position: relative;
  opacity: 0.6;
  top: 120px;
`;
class DoorComponent extends React.Component {
  componentDidMount(): void {
    const door = document.getElementById("door");
    door?.addEventListener("click", () => door.classList.add("transition"));
  }
  render(): React.ReactNode {
    return (
      <DoorContainer id="doorcontainer">
        <Door href="#" id="door">
          <DoorEcto id="door-ecto"></DoorEcto>
          <DoorBody id="door-body"></DoorBody>
        </Door>
      </DoorContainer>
    );
  }
}
export default DoorComponent;
