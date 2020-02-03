import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import Dots from './indicator-dots'
import Buttons from './buttons'
import ReactPlayer from 'react-player'
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      axis: 'x'
    }
    this.setAxis = axis => {
      return () => this.setState({'axis': axis})
    }
  }
  render () {
    return (
      <div style={{height: '100%'}}>
        <header>
          <span className={this.state.axis === 'x' ? 'axis current' : 'axis'}
            onClick={this.setAxis('x')}>horizontal</span>
          <span className={this.state.axis === 'y' ? 'axis current' : 'axis'}
            onClick={this.setAxis('y')}>vertical</span>
        </header>
        <Carousel loop axis={this.state.axis} widgets={[Dots, Buttons]} className="custom-class">
          <p style={{backgroundColor: 'royalblue', height: '100%'}}><ReactPlayer url='https://youtu.be/krAWgVJBsgA' controls/></p>
          <p style={{backgroundColor: 'orange', height: '100%'}}>FRAME 2</p>
          <p style={{backgroundColor: 'orchid', height: '100%'}}>FRAME 3</p>
        </Carousel>
      </div>
    )
  }
}

export default App;
