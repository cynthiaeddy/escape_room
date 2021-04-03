import React, { useState } from 'react'
import chandOn from '../assets/chandOn.jpg'

const ChandelierOn = () => {
  const [chandButton, setchandButton] = useState(true)
  console.log('hi')

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
      howdy
      <button
        className="meow"
        // onClick={howdy}
        // style={chandButton ? startButton : stopButton}
        onClick={() => setchandButton(chandOn)}
      ></button>
      {/* <img scr={chandOn} /> */}
      {/* <button onClick={howdy} className="chand key_button"></button> */}
    </div>
  )
}

export default ChandelierOn
