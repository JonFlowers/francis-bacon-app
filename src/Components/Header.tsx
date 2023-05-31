import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #181e24;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 40px;
  padding-left: 74px;
  font-size: 60pt;
  color: #9bafc1;
  font-family: Impact, sans-serif;
  height: 120px;
  width: 2586px;
`;
type HeaderProps = {
  title: string;
};
class HeaderComponent extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return <Header>{this.props.title}</Header>;
  }
}
export default HeaderComponent;
