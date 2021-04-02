import React, { useState } from 'react'
import door_close2 from '../assets/door_close2.jpg'
import door_close3 from '../assets/door_close2.jpg'
import door_close4 from '../assets/door_close4.jpg'
import door_close5 from '../assets/door_close5.jpg'
import door_closed6 from '../assets/door_closed6.jpg'

class Key extends React.Component {
  state = {
    key_hidden: true,
  }

  render() {
    return (
      <div className="door_container">
        <img src={door_close5} />
        <img src={door_close5} />
      </div>
    )
  }
}
export default Key
