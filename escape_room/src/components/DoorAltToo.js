import React, { useState } from 'react'
import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'
import door_close2 from '../assets/door_closed.jpg'
import door_close3 from '../assets/door_closed.jpg'
import door_close4 from '../assets/door_closed.jpg'
import door_close5 from '../assets/door_closed.jpg'
import door_closed6 from '../assets/door_closed.jpg'

const DoorAltToo = () => {
  const [isSelected, setSelected] = useState(true)
  const [isLeftPlantMoved, setLeftPlantMoved] = useState(true)
  const [isMidPlantMoved, setMidPlantMoved] = useState(true)
  const [isRightPlantMoved, setRightPlantMoved] = useState(true)

  const startLeftPlantStyle = {
    top: '192px',
    left: '-235px',
    transition: 'left 1s',
  }
  const endLeftPlantStyle = {
    top: '192px',
    left: '190px',
    transition: 'left 1s',
  }
  const startMidPlantStyle = {
    top: '192px',
    left: '190px',
    transition: 'left 1s',
  }
  const endMidPlantStyle = {
    top: '192px',
    left: '590px',
    transition: 'left 1s',
  }
  const startRightPlantStyle = {
    top: '192px',
    left: '590px',
    transition: 'right 1s',
  }
  const endRightPlantStyle = {
    top: '192px',
    left: '190px',
    transition: 'right 1s',
  }

  const toggleDoor = () => {
    setSelected(!isSelected)
  }
  const moveLeftPlant = () => {
    setLeftPlantMoved(!isLeftPlantMoved)
  }
  const moveMidPlant = () => {
    setMidPlantMoved(!isMidPlantMoved)
  }
  const moveRightPlant = () => {
    setRightPlantMoved(!isRightPlantMoved)
  }

  const doors = isSelected ? door_closed : door_open
  return (
    <div className="door_container">
      <button onClick={toggleDoor} className="key_button"></button>
      <button
        onClick={moveLeftPlant}
        className="plant move_right"
        style={isLeftPlantMoved ? startLeftPlantStyle : endLeftPlantStyle}
      ></button>

      <button className="chandelier move_right"></button>
      <img src={doors} className="door_left" alt={'doors'} />
      <img src={door_closed} className="door_right" />
      <button
        onClick={moveMidPlant}
        className="plant move_middle"
        style={isMidPlantMoved ? startMidPlantStyle : endMidPlantStyle}
      ></button>
      <button
        onClick={moveRightPlant}
        className="plant move_right"
        style={isRightPlantMoved ? startRightPlantStyle : endRightPlantStyle}
      ></button>
    </div>
  )
}
export default DoorAltToo
