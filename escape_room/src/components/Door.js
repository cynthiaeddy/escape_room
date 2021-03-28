import React from 'react'
import door_closed from '../assets/door_closed.jpg'
import door_open from '../assets/door_open.jpg'



class Door extends React.Component {
  state = {
    openDoor: false
  }




  doorToggle = () => {
		this.setState((prevState) => {
			return { openDoor: !prevState.openDoor };
		});
	};





  render() {
    return (
      <div>
{/* <button className='key_button'></button> */}
        { (this.state.openDoor) ? <button className='key_button' onClick={this.doorToggle}><img src={door_open}/></button> : <button className='door_button'  onClick={this.doorToggle}><img src={door_closed}/></button> }

      </div>
    )
  }

}





export default Door

// { (this.state.openDoor) ? <button className='door_button' onClick={this.doorToggle}><img src={door_open}/></button> : <button className='door_button'  onClick={this.doorToggle}><img src={door_closed}/></button> }
