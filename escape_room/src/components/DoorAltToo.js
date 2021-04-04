import React, { useState, useEffect } from 'react'
import door_open2 from '../assets/door_open2.jpg'
import door_closed5 from '../assets/door_closed5.jpg'
import door_openparty from '../assets/door_openparty.jpg'
import door_open2dr from '../assets/door_open2dr.jpg'
import door_openBird from '../assets/door_openBird.jpg'
import door_open2la from '../assets/door_open2la.jpg'

import chand from '../assets/chand.jpg'
import chandOn from '../assets/chandOn.jpg'
import ChandelierOn from './ChandelierOn'

const DoorAltToo = () => {
  const [isLeftDoorSelected, setLeftDoorSelected] = useState(true)
  const [isRightDoorSelected, setRightDoorSelected] = useState('')
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

  useEffect(() => {
    const timer = setTimeout(() => setRightDoorSelected(''), 1000)
    return () => clearTimeout(timer)
  })

  const toggleLeftDoor = () => {
    setLeftDoorSelected(!isLeftDoorSelected)
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
  const doorsLeft = isLeftDoorSelected ? door_closed5 : door_open2la
  const doorsRight = isRightDoorSelected ? door_open2dr : door_closed5

  return (
    <>
      <div className="door_container">
        <button onClick={toggleLeftDoor} className="key_button">
          button left door
        </button>
        <button
          onClick={() => setRightDoorSelected(door_closed5)}
          className="key_button left"
        >
          button right door
        </button>

        <img src={doorsLeft} className="door_left" alt={'doors'} />
        <img src={doorsRight} className="door_right" alt={'doors'} />

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
    </>
  )
}
export default DoorAltToo
