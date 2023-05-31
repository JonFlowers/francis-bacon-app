import React from "react";
import styled from "styled-components";
import p5 from "p5";

const SpaceFrame = styled.div`
  position: absolute;
  top: 100px;
  left: 600px;
  z-index: 1;
  opacity: 0.4;
`;
class SpaceFrameComponent extends React.Component {
  componentDidMount(): void {
    const s = (p: p5) => {
      p.setup = function () {
        p.noFill();
        p.createCanvas(1000, 1000, p.WEBGL);
      };
      p.draw = function () {
        p.clear(0, 0, 0, 0);
        p.noFill();
        p.stroke("#ffffff");
        p.strokeWeight(2);
        p.rotateX(p.frameCount * 0.002);
        p.rotateY(p.frameCount * 0.002);
        p.box(500, 500, 500);
      };
    };
    const spaceFrame = document.getElementById("space-frame");
    if (spaceFrame) new p5(s, spaceFrame);
  }
  render(): React.ReactNode {
    return <SpaceFrame id="space-frame" />;
  }
}
export default SpaceFrameComponent;
