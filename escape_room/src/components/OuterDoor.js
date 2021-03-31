import React, { useState } from "react";
import door_closed from "../assets/door_closed.jpg";
import door_open from "../assets/door_open.jpg";
import plant from "../assets/plant.jpg";

const OuterDoor = () => {
  const [isSelected, setSelected] = useState(door_closed);
  const [isCircleMoved, setCircleMoved] = useState(true);

  const startStyle = {
    top: "160px",
    left: "40px",
    transition: "left 1s",
  };
  const endStyle = {
    top: "160px",
    left: "700px",
    transition: "left 1s",
  };

  const moveCircle = () => {
    setCircleMoved(!isCircleMoved);
  };

  return (
    <div>
      <img className="outer_door" alt={"doors"} src={isSelected} />
      <button
        onClick={() => setSelected(door_open)}
        className="outer_key_button"
      >
        outer
      </button>
      <button
        onClick={moveCircle}
        className="circle move_right"
        style={isCircleMoved ? startStyle : endStyle}
      ></button>
    </div>
  );
};
export default OuterDoor;
