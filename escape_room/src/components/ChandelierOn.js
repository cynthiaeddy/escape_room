import React, { useState } from 'react'
import chandOn from '../assets/chandOn.jpg'
import circlelamp from '../assets/circlelamp.jpg'
import DoorAltToo from './DoorAltToo'

const ChandelierOn = () => {
  const [chandButton, setchandButton] = useState(true)

  const startButton = {
    top: '20%',
  }
  const stopButton = {
    top: '20%',
    background: 'blue',
  }

  const howdy = () => {
    setchandButton(!chandButton)
  }

  return (
    <div>
      hi
      <button
        className="chandelierOn circlelamp"
        onClick={howdy}
        style={chandButton ? startButton : stopButton}
        onClick={() => setchandButton(chandButton)}
      ></button>
      {/* </> */}
      <img scr={chandOn} />
      <button onClick={howdy} className="chand key_button"></button>
    </div>
  )
}

export default ChandelierOn
