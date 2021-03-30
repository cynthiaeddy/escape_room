import React from "react";
import Door from "./Door";
import DoorAltToo from "./DoorAltToo";
import OuterDoor from "./OuterDoor";
import InnerDoor from "./InnerDoor";

const Home = () => {
  return (
    <div className="door_container">
      <OuterDoor />
      <InnerDoor />
      <DoorAltToo />
    </div>
  );
};

export default Home;
