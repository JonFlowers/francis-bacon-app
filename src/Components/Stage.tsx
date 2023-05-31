import React from "react";
import styled from "styled-components";
import Door from "./Door";
import Bull from "./Bull";
import ExperimentList from "./ExperimentList";

const Stage = styled.div`
  width: 2700px;
  height: 320px;
  margin-top: 200px;
  background-image: url("images/main-bg.png");
  background-repeat: repeat-x;
  background-size: 300px 320px;
`;
class StageComponent extends React.Component {
  componentDidMount(): void {
    const door = document.getElementById("door"),
      bull = document.getElementById("bull");
    door?.addEventListener(
      "animationend",
      (event: AnimationEvent) => {
        const el = event.target as HTMLElement;
        if (el.id === "door") {
          door?.classList.add("hide");
          bull?.classList.add("show");
        }
      },
      false
    );
  }
  render(): React.ReactNode {
    return (
      <Stage id="stage">
        <Door />
        <Bull />
        <ExperimentList />
      </Stage>
    );
  }
}
export default StageComponent;
