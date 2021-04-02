import React, { useState } from 'react'
// import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'
import door_close2 from '../assets/door_closed.jpg'
import door_close3 from '../assets/door_closed.jpg'
import door_close4 from '../assets/door_closed.jpg'
import door_close5 from '../assets/door_closed.jpg'
import door_closed6 from '../assets/door_closed.jpg'
import plant from '../assets/plant.jpg'

// imageHash: Date.now()

const DoorAltToo = () => {
  const [isLeftDoorSelected, setLeftDoorSelected] = useState(true)
  const [isRightDoorSelected, setRightDoorSelected] = useState(true)
  const [isLeftPlantMoved, setLeftPlantMoved] = useState(true)
  const [isMidPlantMoved, setMidPlantMoved] = useState(true)
  const [isRightPlantMoved, setRightPlantMoved] = useState(true)

  const startLeftPlantStyle = {
    top: '34%',
    left: '-49%',
    transition: 'left 1s',
  }
  const endLeftPlantStyle = {
    top: '34%',
    left: '35%',
    transition: 'left 1s',
  }
  const startMidPlantStyle = {
    top: '34%',
    left: '35%',
    transition: 'left 1s',
  }
  const endMidPlantStyle = {
    top: '34%',
    left: '116%',
    transition: 'left 1s',
  }
  const startRightPlantStyle = {
    top: '34%',
    left: '116%',
    transition: 'left 1s',
  }
  const endRightPlantStyle = {
    top: '34%',
    left: '35%',
    transition: 'left 1s',
  }

  const toggleLeftDoor = () => {
    setLeftDoorSelected(!isLeftDoorSelected)
  }
  const toggleRightDoor = () => {
    setRightDoorSelected(!isRightDoorSelected)
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

  const doorsLeft = isLeftDoorSelected ? door_closed6 : door_open
  const doorsRight = isRightDoorSelected ? door_closed6 : door_open

  return (
    <div className="door_container">
      <button onClick={toggleLeftDoor} className="key_button"></button>
      <img src={doorsLeft} className="door_left" alt={'doors'} />
      <img src={door_closed6} className="door_right" />
      <button className="chandelier move_right"></button>
      <button
        onClick={moveLeftPlant}
        className="plant move_left"
        style={isLeftPlantMoved ? startLeftPlantStyle : endLeftPlantStyle}
      ></button>
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
