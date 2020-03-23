import React, { Component } from "react";
import Slide from '@material-ui/core/Slide';

import Circulo from "./Cargando";

//dependences
import { scroller } from 'react-scroll';

import '../../../css/slideError.css';

export default class SimpleSlide extends Component {

	// Desplamiento hasta el borde inferior de la página
	onClickPrecios(){
		scroller.scrollTo("prices", {
            duration: 2000,
            delay: 100,
            smooth: true, // linear “easeInQuint” “easeOutCubic”
            offset: 50,
         });
	}


  render(){
    let content = "";
    if(this.props.tipo === "error"){
        content = (
            <div className="slide">
                    <label className="labelsito">ERROR: </label>
                    <p>Se ha producido un error al enviar la información. Revise su conexión.</p>
            </div>
        );
    }else if(this.props.tipo === "cargando"){
        content = (
            <div className="slide">
                <Circulo />
            </div>
        )
    }else if(typeof(this.props.tipo) === "object"){
        content = (
            <div className="slide">
                    <label className="labelsito">¡REGISTRADO CON EXITO!</label>
                    <p>Se ha registrado a {this.props.tipo.cApellido}, {this.props.tipo.cNombre} con éxito, <strong>su número de colono es: {this.props.tipo.numero}</strong>. Para completar la inscripción solo debe hacer el pago al Director. <strong className="click" onClick={this.onClickPrecios.bind(this)}>Click aquí para ver los precios.</strong></p>
            </div>
        )
    }else{
        content = <div></div>;
    }
  return (
      <Slide direction="down" in={true} mountOnEnter>
          {content}
      </Slide>
  );
  }
}