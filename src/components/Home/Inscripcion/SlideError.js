import React, { Component } from "react";
import Slide from '@material-ui/core/Slide';

import '../../../css/slideError.css';

export default class SimpleSlide extends Component {
  
  render(){
  return (
      <Slide direction="down" in={true} mountOnEnter>
          <div className="slide">
            <label className="titulo">ERROR: </label>
            {this.props.error}
          </div>
      </Slide>
  );
  }
}