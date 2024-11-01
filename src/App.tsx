import React from "react";
import Header from "./Components/Header";
import SpaceFrame from "./Components/SpaceFrame";
import Stage from "./Components/Stage";
import Content from "./Components/Content";
import "./App.css";
import "./styles.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header title="The Francis Bacon Sketchbook" />
        <SpaceFrame />
        <Stage />
        <Content />
        <SpeedInsights />
      </div>
    );
  }
}
export default App;
