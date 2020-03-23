import React from 'react';

import ApiController from './controller/ApiController';
import Cargando from './components/Cargando/AppCargando';
import Home from './components/Home';

//CSS
import './css/reset.css';
import './css/App.css';
import './css/fonts.css';
import './css/animaciones.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
	this.state = {data: [], estado: 'cargando'};
  }

  okBusqueda(newData)
    {
        this.setState(
			{
				data: newData[0]
      }
		)
  }

  handleSetEstado(tipo){
    this.setState({
      estado: tipo
    })
  }

  componentDidMount(){
	  ApiController.getConfigs(this.okBusqueda.bind(this), this.handleSetEstado.bind(this));
  }

  render() {
    return (
      <div>
        {this.state.estado === 'cargado'?(
          <Home data={this.state.data}/>
        ):(
          <Cargando estado={this.state.estado}/>
        )}
      </div>
    );
  }
}