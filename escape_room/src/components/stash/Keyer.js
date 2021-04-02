import React, { useState } from 'react'

import door_open from '../assets/door_open.jpg'
import door_close2 from '../assets/door_closed.jpg'
import door_close3 from '../assets/door_closed.jpg'
import door_close4 from '../assets/door_closed.jpg'
import door_close5 from '../assets/door_closed.jpg'
import door_closed6 from '../assets/door_closed.jpg'

const Keyer = () => {
  const [isSelected, setSelected] = useState(true)
  const [isCircleMoved, setCircleMoved] = useState(true)

  const startStyle = {
    top: '185px',
    left: '25px',
    transiti5on: 'left 1s',
  }
  const endStyle = {
    top: '185px',
    left: '315px',
    transition: 'left 1s',
  }

  const toggleDoor = () => {
    setSelected(!isSelected)
  }
  const moveCircle = () => {
    setCircleMoved(!isCircleMoved)
  }

  const doors = isSelected ? door_close2 : door_open
  return (
    <div className="door_container">
      <button onClick={toggleDoor} className="key_button"></button>
      <button
        onClick={moveCircle}
        className="circle move_right"
        style={isCircleMoved ? startStyle : endStyle}
      ></button>

      <button className="half_circle move_right"></button>
      <img alt={'doors'} src={doors} />
      <img src={door_close2} />
    </div>
  )
}
export default Keyer
