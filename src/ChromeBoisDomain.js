import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    const {screenX, screenY} = event
    drawChromeBoiAtCoords(screenX,screenY)
  }
  
  handleKeyPress = (event) => {
    if (event.key === 'a'){
      resize('+')
    }
    if (event.key === 's'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
      >
      </canvas>
    )
  }
}
