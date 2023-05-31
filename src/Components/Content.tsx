import React from "react";
import styled from "styled-components";

const Content = styled.div`
  position: absolute;
  top: 340px;
  left: 466px;
  transform: scale(0.6);
  z-index: 4;
`;
class ContentComponent extends React.Component {
  render(): React.ReactNode {
    return (
      <Content id="content">
        <iframe
          width="2000"
          height="1000"
          frameBorder="0"
          id="content-iframe"
          title="francis-bacon-sketch"
        ></iframe>
      </Content>
    );
  }
}
export default ContentComponent;
