//Dependencies
import React, { Component } from "react";
//Assets
import "../../../css/inscripcion.css";

//Data

class StepperDatosColono extends Component {
    constructor(props){
      super(props); //EN CASO DE QUE SEAN UNDEFINED LOS INICIALIZA
      if(this.props.datosColono['cNombre'] === undefined)
        this.props.datosColono['cNombre'] = '';
      
      if(this.props.datosColono['cApellido'] === undefined)
        this.props.datosColono['cApellido'] = '';

      if(this.props.datosColono['cSexo'] === undefined)
        this.props.datosColono['cSexo'] = '';

      if(this.props.datosColono['cFecha'] === undefined)
        this.props.datosColono['cFecha'] = '';
      
      if(this.props.datosColono['cDni'] === undefined)
        this.props.datosColono['cDni'] = '';

      if(this.props.datosColono['cDomicilio'] === undefined)
        this.props.datosColono['cDomicilio'] = '';

      if(this.props.datosColono['cSocio'] === undefined)
        this.props.datosColono['cSocio'] = '';

      if(this.props.datosColono['cNumSocio'] === undefined)
        this.props.datosColono['cNumSocio'] = '';
    }

  handleChangeDatosColono(event){
    this.props.handleChangeDatosColono(event);
  }

  render() {
    return (
        <form className="form" onSubmit={this.handleSubmit}>
          <h3 className="titleBox">Datos del Colono</h3>
          <div className="info">
            <label className="label">Nombre</label>
            <input
              name="cNombre"
              className="txt"
              type="text"
              placeholder="NOMBRE DEL COLONO"
              value={this.props.datosColono['cNombre']}
              onChange={this.handleChangeDatosColono.bind(this)}
              autoComplete="off"
              spellCheck="false"
            />

            <label className="label">Apellido</label>
            <input
              name="cApellido"
              className="txt"
              type="text"
              placeholder="APELLIDO DEL COLONO"
              value={this.props.datosColono['cApellido']}
              onChange={this.handleChangeDatosColono.bind(this)}
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div className="info">
            <label className="label">Fecha de nacimiento</label>
            <input
              id="cFecha"
              className="txt"
              type="date"
              name="cFecha"
              min="2008-01-01"
              max="2016-01-01"
              value={this.props.datosColono['cFecha']}
              onChange={this.handleChangeDatosColono.bind(this)}
            />
          </div>

          <div className="info">
            <label className="label">Sexo</label>
            <div className="sel">
              <input
                type="radio"
                name="cSexo"
                onChange={this.handleChangeDatosColono.bind(this)}
                value="H"
                checked={this.props.datosColono['cSexo'] === "H"}
              />
              Masculino
            </div>
            <div className="sel">
              <input
                type="radio"
                name="cSexo"
                onChange={this.handleChangeDatosColono.bind(this)}
                value="M"
                checked={this.props.datosColono['cSexo'] === "M"}
              />
              Femenino
            </div>
          </div>

          <div className="info">
            <label className="label">DNI</label>
            <input
              id="cDni"
              className="txt"
              type="number"
              name="cDni"
              placeholder="DNI DEL COLONO"
              value={this.props.datosColono['cDni']}
              onChange={this.handleChangeDatosColono.bind(this)}
            />
          </div>

          <div className="info">
            <label className="label">Domicilio</label>
            <input
              id="cDomicilio"
              className="txt"
              type="text"
              name="cDomicilio"
              placeholder="DOMICILIO DEL COLONO"
              value={this.props.datosColono['cDomicilio']}
              onChange={this.handleChangeDatosColono.bind(this)}
              autoComplete="off"
              spellCheck="false"
            />
          </div>

           <div className="info">
            <label className="label">¿El colono es Socio?</label>
            <div className="sel">
              <input
                type="radio"
                name="cSocio"
                value="S"
                onChange={this.handleChangeDatosColono.bind(this)}
                checked={this.props.datosColono['cSocio'] === "S"}
              />
              SI
            </div>
            
            <div className="sel">
              <input
                type="radio"
                name="cSocio"
                value="N"
                onChange={this.handleChangeDatosColono.bind(this)}
                checked={this.props.datosColono['cSocio'] === "N"}
              />
              NO
            </div>
            
            {this.props.datosColono['cSocio'] ==='S'?(<input
              id="cNumSocio"
              className="txt"
              type="number"
              name="cNumSocio"
              placeholder="NUMERO DE SOCIO"
              value={this.props.datosColono['cNumSocio']}
              onChange={this.handleChangeDatosColono.bind(this)}
            />):''}
          </div> 
        </form>
    );
  }
}

export default StepperDatosColono;
