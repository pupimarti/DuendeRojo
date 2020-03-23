//Dependencies
import React, { Component } from "react";

//Assets
import "../../../css/inscripcion.css";

//Data

class StepperDatosTutor extends Component {
  constructor(props){//EN CASO DE QUE SEAN UNDEFINED LOS INICIALIZA
    super(props);
    if(this.props.datosTutor['pNombre'] === undefined)
      this.props.datosTutor['pNombre'] = '';
    
    if(this.props.datosTutor['pApellido'] === undefined)
      this.props.datosTutor['pApellido'] = '';

    if(this.props.datosTutor['pTel'] === undefined)
      this.props.datosTutor['pTel'] = '';

    if(this.props.datosTutor['pCel'] === undefined)
      this.props.datosTutor['pCel'] = '';
    
    if(this.props.datosTutor['pWhapp'] === undefined)
      this.props.datosTutor['pWhapp'] = '';
  }

  handleChangeDatosTutor(event){
    this.props.handleChangeDatosTutor(event);
  }

  render() {
    return (
        <form className="form">
          <h3 className="titleBox">Datos del Padre/Madre/Tutor</h3>
          <div className="info">
            <label className="label">Nombre</label>
            <input
              id="pNombre"
              className="txt"
              type="text"
              name="pNombre"
              placeholder="NOMBRES DEL TUTOR"
              value={this.props.datosTutor['pNombre']}
              onChange={this.handleChangeDatosTutor.bind(this)}
              autoComplete="off"
              spellCheck="false"
            />

            <label className="label">Apellido</label>
            <input
              id="pApellido"
              className="txt"
              type="text"
              name="pApellido"
              placeholder="APELLIDOS DEL TUTOR"
              value={this.props.datosTutor['pApellido']}
              onChange={this.handleChangeDatosTutor.bind(this)}
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div className="info">
            <label className="label">Numero de Telefono Fijo</label>
            <input
              id="pTel"
              className="txt"
              type="number"
              name="pTel"
              placeholder="NUMERO DE TELEFONO FIJO DEL TUTOR"
              value={this.props.datosTutor['pTel']}
              onChange={this.handleChangeDatosTutor.bind(this)}
            />
          </div>

          <div className="info">
            <label className="label">Numero de Celular</label>
            <input
              id="pCel"
              className="txt"
              type="number"
              name="pCel"
              placeholder="NUMERO DE CELULAR DEL TUTOR"
              value={this.props.datosTutor['pCel']}
              onChange={this.handleChangeDatosTutor.bind(this)}
            />
          </div>

          <div className="info">
            <label className="label">Grupo de Whatsapp</label>
            <p>
              Grupo creado por el profesor del grupo del Colono, integrando a
              los tutores de los colonos que lo acepten. Se enviará la
              información necesaria para los padres.
            </p>
            <div className="sel">
              <input
                type="radio"
                name="pWhapp"
                value="sw"
                onChange={this.handleChangeDatosTutor.bind(this)}
              />
              Añadirme
            </div>
            <div className="sel">
              <input
                type="radio"
                name="pWhapp"
                value="nw"
                onChange={this.handleChangeDatosTutor.bind(this)}
              />
              NO
            </div>
          </div>
        </form>
    );
  }
}

export default StepperDatosTutor;
