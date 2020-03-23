import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import './AppCargando.css';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#fdd',
  },
  barColorPrimary: {
    backgroundColor: '#d22222',
  },
})(LinearProgress);

export default function Card(props) {



  return (
    <div className="contenedor">
        <div className="logo-y-barra">
          <img src="./logo.png" alt="logo"/>
          {props.estado === "error"?(
          <div>
            <p className="error">¡Ups! Hubo un error al cargar los datos. Vuelva a intentarlo más tarde.</p>
          </div>
          ):
        (
          <div>
            <div className="cargando">Cargando...</div>
            <ColorLinearProgress />
          </div>
        )}
        </div>
    </div>
  );
}

