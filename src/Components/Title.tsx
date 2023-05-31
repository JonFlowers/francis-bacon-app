import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {opacity:0;left:-100px}
    100% {opacity:0.7;left:0px}
`;
const slideIn = keyframes`
    0% {opacity:0;left:-160px}
    100% {opacity:0.8;left:0px}
`;
const Title = styled.div`
  width: 400px;
  height: 100px;
  top: 320px;
  color: #000;
  font-family: Verdana;
  background-color: #fff;
  opacity: 0.8;
  position: absolute;
  padding: 20px 0 0 0;
  animation-name: ${slideIn};
  animation-duration: 2s;
`;
const Heading = styled.h1`
  margin: 0 0 0 20px;
  position: relative;
  opacity: 0.7;
  animation-name: ${fadeIn};
  animation-duration: 2s;
`;
const Headding2 = styled.h2`
  margin: 0 0 0 20px;
  position: relative;
  opacity: 0.7;
  animation-name: ${fadeIn};
  animation-duration: 2s;
`;
type TitleProps = {
  name: string;
  yearOfBirth: string;
  yearOfDeath: string;
};
class TitleComponent extends React.Component<TitleProps> {
  componentDidMount(): void {
    window.addEventListener("load", () => {
      const title = document.getElementById("title"),
        thumbnails = document.getElementById("thumbnails");
      title?.addEventListener(
        "animationend",
        () => thumbnails?.classList.add("show"),
        false
      );
    });
  }
  render(): React.ReactNode {
    return (
      <Title id="title" className="hide">
        <Heading>{this.props.name}</Heading>
        <Headding2>
          {this.props.yearOfBirth} - {this.props.yearOfDeath}
        </Headding2>
      </Title>
    );
  }
}
export default TitleComponent;
