import React from "react";
import styled, { keyframes } from "styled-components";
import Title from "./Title";
const blackPanel = keyframes`
    0%   {left:80px; width: 244px; height: 320px;}
    20% { height: 562px;}
    80% {left:300px; width: 244px}
    100% {left:360px; width: 488px; height: 562px;}
`;
const bullRear = keyframes`
    0%   {opacity:0; background-size: 200px 380px}
    50%  {opacity:1}
    100%  {opacity:0; background-size: 120px 380px}
`;
const whitePanelBorderLeft = keyframes`
    0%   {left:280px;opacity:0}
    80% {left:420px;opacity:1.0}
    100% {left:360px;opacity:0}
`;
const bullSlice = keyframes`
    0%   {opacity:0; background-size: 80px 460px}
    55%  {opacity:1}
    100% {opacity:0; background-size: 20px 460px}
`;
const whitePanelLeft = keyframes`
    0%   {left:280px;opacity:0}
    80%  {left:440px;opacity:1.0}
    100% {left:360px;opacity:0}
`;
const bullBody = keyframes`
    0%   {opacity:0; background-size: 200px 460px}
    60%  {opacity:1}
    100% {opacity:0; background-size: 100px 460px}
`;
const whitePanelRight = keyframes`
    0%   {left:280px;border-right:1px solid #000;opacity:0}
    80% {left:544px;border-right:10px solid #000;opacity:1.0}
    100% {left:360px;opacity:0}
`;
const bullHorn = keyframes`
    0%   {opacity:0; background-size: 280px 370px}
    65%  {opacity:1}
    100% {opacity:0; background-size: 170px 370px}
`;
const deathMask = keyframes`
    0% { background: no-repeat center/100% url('images/life-mask-1.jpeg'); }
    33.3% { background: no-repeat center/100% url('images/life-mask-2.jpeg'); }
    66.6% { background: no-repeat center/100% url('images/life-mask-3.jpeg'); }
    100% { background: no-repeat center/100% url('images/life-mask-1.jpeg'); }
`;
const fade = keyframes`
    0% { opacity:0 }
    100% { opacity:1 }
`;
const Bull = styled.div`
  display: none;
  width: 100%;
  height: 320px;
`;
const BlackPanel = styled.div.attrs((props) => ({
  className: props.className
}))`
  & .fade {
    animation: 6s linear 0s infinite alternate forwards running ${fade};
  }
  & .death-mask {
    height: 562px;
    animation: 2s linear infinite normal forwards running ${deathMask},
      4.5s linear infinite alternate forwards running ${fade};
  }
  left: 80px;
  width: 244px;
  height: 320px;
  background-color: black;
  position: absolute;
  background-size: cover;
  animation: 4s ease 0s 1 normal forwards running ${blackPanel};
`;
const BullRear = styled.div`
  width: 488px;
  height: 562px;
  background-image: linear-gradient(black, transparent 30%),
    url("images/bull-rear.jpg");
  background-size: 120px 380px;
  background-repeat: no-repeat;
  background-position: left bottom;
  opacity: 0;
  animation: 4s ease 0s 1 normal forwards running ${bullRear};
`;
const WhitePanelBorderLeft = styled.div`
  border: 1px solid #000;
  left: 420px;
  top: 300px;
  width: 20px;
  height: 460px;
  background-color: white;
  position: absolute;
  opacity: 0;
  animation-name: ${whitePanelBorderLeft};
  animation-duration: 4s;
`;
const BullSlice = styled.div`
  width: 20px;
  height: 460px;
  background-image: url("images/bull-border.jpg");
  background-size: 20px 460px;
  opacity: 0;
  animation-name: ${bullSlice};
  animation-duration: 4s;
`;
const WhitePanelLeft = styled.div`
  border: 1px solid #000;
  left: 440px;
  top: 300px;
  width: 100px;
  height: 460px;
  background-color: white;
  position: absolute;
  opacity: 0;
  animation-name: ${whitePanelLeft};
  animation-duration: 4s;
`;
const BullBody = styled.div`
  width: 100px;
  height: 460px;
  background-image: url("images/bull-body.jpg");
  background-size: 100px 460px;
  opacity: 0;
  animation-name: ${bullBody};
  animation-duration: 4s;
`;
const WhitePanelRight = styled.div`
  border: 1px solid #000;
  border-right: 10px solid #000;
  left: 544px;
  top: 390px;
  width: 170px;
  height: 370px;
  background-color: white;
  position: absolute;
  opacity: 0;
  animation-name: ${whitePanelRight};
  animation-duration: 4s;
`;
const BullHorn = styled.div`
  width: 170px;
  height: 370px;
  background-image: url("images/bull-horn.jpg");
  background-size: contain;
  opacity: 0;
  animation-name: ${bullHorn};
  animation-duration: 4s;
`;
class BullComponent extends React.Component {
  componentDidMount(): void {
    const bullrear = document.getElementById("bull-rear"),
      title = document.getElementById("title");
    bullrear?.addEventListener(
      "animationend",
      () => {
        title?.classList.remove("hide");
        bullrear.classList.remove("bull-rear");
        bullrear.classList.add("death-mask");
      },
      false
    );
  }
  render(): React.ReactNode {
    return (
      <Bull id="bull">
        <BlackPanel id="black-panel">
          <BullRear id="bull-rear" className="bull-rear"></BullRear>
          <Title name="Francis Bacon" yearOfBirth="1909" yearOfDeath="1992" />
        </BlackPanel>
        <WhitePanelBorderLeft id="white-panel-border-left">
          <BullSlice id="bull-slice"></BullSlice>
        </WhitePanelBorderLeft>
        <WhitePanelLeft id="white-panel-left">
          <BullBody id="bull-body"></BullBody>
        </WhitePanelLeft>
        <WhitePanelRight id="white-panel-right">
          <BullHorn id="bull-horn"></BullHorn>
        </WhitePanelRight>
      </Bull>
    );
  }
}
export default BullComponent;
