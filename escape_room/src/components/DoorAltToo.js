import React, { useState } from 'react';
import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'



const DoorAltToo = () => {

  const [isSelected, setSelected] = useState(true);
  const [isCircleMoved, setCircleMoved] = useState(true)

  const startStyle = {
    top: '160px',
    left: '40px',
    transition: 'left 1s'


  }
  const endStyle = {
    top: '160px',
    left: '700px',
    transition: 'left 1s',
  }

  const toggleDoor = () => {
    setSelected(!isSelected);
  }
  const moveCircle = () => {
    setCircleMoved(!isCircleMoved)
  }

  const doors = isSelected ? door_closed : door_open;
  return (
    <div className='door_container'>
      <button onClick={toggleDoor} className='key_button'>
      </button>
      <button onClick={moveCircle} className='circle move_right'
        style={isCircleMoved ? startStyle : endStyle}></button>
        <img alt={'doors'} src={doors} />
    </div>
  )
}
export default DoorAltToo
