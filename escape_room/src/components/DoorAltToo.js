import React, { useState } from 'react';
import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'
import plant from '../assets/plant.jpg'



const DoorAltToo = () => {

  const doors = {door_closed, door_open}
  const [isSelected, setSelected] = useState(doors.door_closed);
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


  const moveCircle = () => {
    setCircleMoved(!isCircleMoved)
  }

  return (
    <div className='door_container'>
      <img alt={'doors'} src={isSelected} />
      <button onClick={()=> setSelected(doors.door_open)} className='key_button'>
      </button>
      <button onClick={moveCircle} className='circle move_right'
        style={isCircleMoved ? startStyle : endStyle}></button>
    </div>
  )
}
export default DoorAltToo
