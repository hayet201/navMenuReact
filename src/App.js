import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       display: false ,
       style:false,
       style1:false,
       style2:false
     
      }
  }
  render() {  
    return ( 
      <div className="navbar">
        <ul className="mylink">
          <li className={this.state.style ? 'style' : 'color'}  >
            <span onMouseOver={() => this.setState({ style: !this.state.style })}>Home</span>
          </li>
          <li className={this.state.style2 ? 'style2' : 'color'}> 
            <span onMouseOver={() => this.setState({ display: !this.state.display })}>Services </span>
            <div   className={this.state.display ? 'display' : 'hide'}>
              <ul className="dropdown">
                <li > For Entrepreneurs</li>
                <li> For Student</li>
                <li> Hobbyiests</li>
              </ul>
            </div>

          </li>
          <li className={this.state.style1 ? 'style1' : 'color'}>
            <span onMouseOver={() => this.setState({ style1: !this.state.style1 })}>Contact</span>
          </li>

        </ul>

      </div>

     );
  }
}
 
export default App;

  
