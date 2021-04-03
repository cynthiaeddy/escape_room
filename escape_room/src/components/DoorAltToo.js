import React, { useState } from 'react'
import door_open from '../assets/door_open.jpg'
import door_open2 from '../assets/door_open2.jpg'
import door_closed from '../assets/door_closed.jpg'
import door_closed5 from '../assets/door_closed5.jpg'
import plant from '../assets/plant.jpg'
import chand from '../assets/chand.jpg'
import chandOn from '../assets/chandOn.jpg'
// import ChandelierOn from './ChandelierOn'

const DoorAltToo = () => {
  const [isLeftDoorSelected, setLeftDoorSelected] = useState(true)
  const [isRightDoorSelected, setRightDoorSelected] = useState(true)
  const [isLeftPlantMoved, setLeftPlantMoved] = useState(true)
  const [isMidPlantMoved, setMidPlantMoved] = useState(true)
  const [isChandelierSelected, setChandelierSelected] = useState(chand)
  const [isChandelierOn, setChandelierOn] = useState(true)

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
  const turnOnChandelier = () => {
    setChandelierSelected(!isChandelierSelected)
  }

  const doorsLeft = isLeftDoorSelected ? door_closed5 : door_open2
  const doorsRight = isRightDoorSelected ? door_closed5 : door_open2

  return (
    <div className="door_container">
      <button onClick={toggleLeftDoor} className="key_button"></button>
      <button onClick={toggleRightDoor} className="key_button left"></button>

      <img src={doorsLeft} className="door_left" alt={'doors'} />
      <img src={door_closed5} className="door_right" />
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
        onClick={() => setChandelierSelected(chandOn)}
        className="plant move_right"
      ></button>
      <img src={isChandelierSelected} className="chandOn_click" />
    </div>
  )
}
export default DoorAltToo
