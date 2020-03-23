//Dependencies
import React, { Component } from "react";

//Assets
import "../../../css/inscripcion.css";

//Data

class StepperDatosMedicos extends Component {

  constructor(props){
    super(props);//EN CASO DE QUE SEAN UNDEFINED LOS INICIALIZA
    if(this.props.datosMedicos['cCeliaco'] === undefined)
      this.props.datosMedicos['cCeliaco'] = '';
    
    if(this.props.datosMedicos['cRespiratoria'] === undefined)
      this.props.datosMedicos['cRespiratoria'] = '';

    if(this.props.datosMedicos['cERespiratoria'] === undefined)
      this.props.datosMedicos['cERespiratoria'] = '';

    if(this.props.datosMedicos['cCorazon'] === undefined)
      this.props.datosMedicos['cCorazon'] = '';
    
    if(this.props.datosMedicos['cECorazon'] === undefined)
      this.props.datosMedicos['cECorazon'] = '';

    if(this.props.datosMedicos['cHeridas'] === undefined)
      this.props.datosMedicos['cHeridas'] = '';

    if(this.props.datosMedicos['cEHeridas'] === undefined)
      this.props.datosMedicos['cEHeridas'] = '';
  }
  
handleChangeDatosMedicos(event){
  this.props.handleChangeDatosMedicos(event);
}

  render() {
    return (
        <form className="form">
          <h3 className="titleBox">Datos Médicos del Colono</h3>
          <div className="info">
            <label className="label">¿Padece celiaquía?</label>
            <div className="sel">
              <input
                type="radio"
                name="cCeliaco"
                value="S"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              SI
            </div>
            <div className="sel">
              <input
                type="radio"
                name="cCeliaco"
                value="N"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              NO
            </div>
          </div>

          <div className="info">
            <label className="label">¿Padece asma o alguna enfermedad respiratoria?</label>
            <div className="sel">
              <input
                type="radio"
                name="cRespiratoria"
                value="S"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              SI
            </div>
            <div className="sel">
              <input
                type="radio"
                name="cRespiratoria"
                value="N"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              NO
            </div>
            {this.props.datosMedicos['cRespiratoria']==='S'?(<input
              className="txt"
              type="text"
              name="cERespiratoria"
              placeholder="DESCRIPCIÓN DE LA ENFERMEDAD"
              value={this.props.datosMedicos['cERespiratoria']}
              onChange={this.handleChangeDatosMedicos.bind(this)}
            />):''}
            </div>

            <div className="info">
            <label className="label">¿Padece de algún problema de corazón?</label>
            <div className="sel">
              <input
                type="radio"
                name="cCorazon"
                value="S"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              SI
            </div>
            <div className="sel">
              <input
                type="radio"
                name="cCorazon"
                value="N"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              NO
            </div>
            {this.props.datosMedicos.cCorazon==='S'?(<textarea
              className="txt"
              type="text"
              name="cECorazon"
              placeholder="DESCRIPCIÓN DEL PROBLEMA"
              value={this.props.datosMedicos.cECorazon}
              onChange={this.handleChangeDatosMedicos.bind(this)}
            />):''}
          </div>

          <div className="info">
            <label className="label">¿Es posible aplicarle una pomada o desinfectante de heridas?</label>
            <div className="sel">
              <input
                type="radio"
                name="cHeridas"
                value="S"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              SI
            </div>
            <div className="sel">
              <input
                type="radio"
                name="cHeridas"
                value="N"
                onChange={this.handleChangeDatosMedicos.bind(this)}
              />
              NO
            </div>
            {this.props.datosMedicos['cHeridas']==='N'?(<textarea
              className="txt"
              type="text"
              name="cEHeridas"
              placeholder="DESCRIPCIÓN DEL MOTIVO"
              value={this.props.datosMedicos['cEHeridas']}
              onChange={this.handleChangeDatosMedicos.bind(this)}
            />):''}
          </div>
        </form>
    );
  }
}

export default StepperDatosMedicos;
