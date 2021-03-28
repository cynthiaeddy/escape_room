import React, { useState } from 'react';
import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'



const DoorAltToo = () => {

  const [isSelected, setSelected] = useState(true);

  const toggleDoor = () => {
    setSelected(!isSelected);
  }

  const doors = isSelected ? door_closed : door_open;
  return (
    <div className='door_container'>
      <button onClick={toggleDoor} className='key_button'>
      </button>
        <img alt={'doors'} src={doors} />
    </div>
  )
}
export default DoorAltToo
