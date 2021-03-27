import React from 'react'


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
      <div>i'm the door!

       { (this.state.openDoor) ? <button className='door_button' onClick={this.doorToggle}>i'm closed</button> : <button className='door_button'  onClick={this.doorToggle}>i'm open</button> }

      </div>
    )
  }

}

export default Door
