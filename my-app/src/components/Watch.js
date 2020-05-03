import React, { Component } from 'react'
import ReactDOM from 'react-dom';




function tick() {
    const element = (
      <div className="w-100 p-2    ">
       
        <h2 className="p-0 m-0">{new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('rootAS')
    );
  }
   
  setInterval(tick, 1000);


class Watch extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div id ="rootAS"
                 className=" p-0 m-0  text-danger    mb-3"
            
            >
                
            </div>
        )
    }
}

export default Watch
