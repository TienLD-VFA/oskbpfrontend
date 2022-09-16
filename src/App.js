import React from "react";
import "./App.scss";
import Framework7 from "framework7/lite-bundle";
import Framework7React, { Swiper } from "framework7-react";
import "framework7/css/bundle";
import TutorialDialog from "./components/TutorialDialog/TutorialDialog";
Framework7.use(Framework7React);
// sase
function App() {
  return (
    <div className="App">
      <TutorialDialog />
    </div>
  );
}

export default App;
