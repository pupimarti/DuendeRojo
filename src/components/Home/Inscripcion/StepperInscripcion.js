import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import ReactDOM from 'react-dom';

import '../../../css/stepperInscripcion.css';

import SlideError from './SlideError';

import SlideMensajeInscripcion from './SlideMensajeInscripcion';

import StepperDatosColono from './StepperDatosColono';

import StepperDatosTutor from './StepperDatosTutor';

import StepperDatosMedicos from './StepperDatosMedicos';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: '#D22222',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  completed:{
     color: "#D22222",
  },
  button: {
    backgroundColor: '#D22222',
    color: '#FFF',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&:hover': {
        backgroundColor: '#fff',
        color: "#D22222",
        boxShadow: "0px 0px 5px #000",
        fontWeight: "bold",
     },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Ingrese datos del colono', 'Ingrese datos del Tutor', 'Ingrese datos médicos del colono'];
}



export default function VerticalLinearStepper(props) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [datosColono, setDatosColono] = React.useState([{cNombre: ''},
                                                        {cApellido: ''},
                                                        {cSexo: ''},
                                                        {cFecha: ''},
                                                        {cDni: ''},
                                                        {cDomicilio: ''},
                                                        {cSocio: ''},
                                                        {cNumSocio: ''}]);

  const [datosTutor, setDatosTutor] = React.useState([{pNombre: ''},
                                                        {pApellido: ''},
                                                        {pTel: ''},
                                                        {pCel: ''},
                                                        {pWhapp: ''}]);

  const [datosMedicos, setDatosMedicos] = React.useState([{cCeliaco: ''},
                                                        {cRespiratoria: ''},
                                                        {cERespiratoria: ''},
                                                        {cCorazon: ''},
                                                        {cECorazon: ''},
                                                        {cHeridas: ''},
                                                        {cEHeridas: ''}]);
  const [infoInscripcion, setInfoInscripcion] = React.useState("");


  const steps = getSteps();

  function handleChangeDatosColono(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDatosColono(datosColono => ({...datosColono, [name]: value.toUpperCase()}));
  }

  function handleChangeDatosTutor(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDatosTutor(datosTutor => ({...datosTutor, [name]: value.toUpperCase()}));
  }

  function handleChangeDatosMedicos(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDatosMedicos(datosMedicos => ({...datosMedicos, [name]: value.toUpperCase()}));
  }

  function handleChangeInfoInscripcion(tipo){
    setInfoInscripcion(infoInscripcion => tipo);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <StepperDatosColono datosColono={datosColono} handleChangeDatosColono={handleChangeDatosColono}/>;
      case 1:
        return <StepperDatosTutor datosTutor={datosTutor} handleChangeDatosTutor={handleChangeDatosTutor}/>;
      case 2:
        return <StepperDatosMedicos datosMedicos={datosMedicos} handleChangeDatosMedicos={handleChangeDatosMedicos}/>;
      default:
        return 'Unknown step';
    }
  }

  function error(message){
    ReactDOM.render(<SlideError error={message} />, document.getElementById('contInsc'));
  }

  function compruebaDatosColono(){
    if(datosColono['cNombre'].length > 30 || datosColono['cNombre'].length < 3){
      error('El nombre debe tener entre 3 y 30 caracteres');
      return 1;
    }
    if(datosColono['cApellido'].length > 30 || datosColono['cApellido'].length < 3){
      error('El apellido debe tener entre 3 y 30 caracteres');
      return 1;
    }
    if(datosColono['cFecha'] === ''){
      error('Seleccione fecha de nacimiento');
      return 1;
    } 
    if(datosColono['cSexo'] !== "H" && datosColono['cSexo'] !== "M"){
      error('Seleccione el sexo');
      return 1;
    }
    if(datosColono['cDni'].length < 8){
      error('DNI incorrecto');
      return 1;
    }
    if(datosColono['cDomicilio'] === ''){
      error('Debe introducir un domicilio');
      return 1;
    }
    if(datosColono['cSocio'] !== "S" && datosColono['cSocio'] !== "N"){
      error('Seleccione si el colono es Socio');
      return 1;
    }
    if(datosColono['cSocio'] === "S" && datosColono['cNumSocio'] === ''){
      error('Debe introducir el número de socio del colono');
      return 1;
    }
    return 0;
  }

  function compruebaDatosTutor(){
    if(datosTutor['pNombre'].length > 30 || datosTutor['pNombre'].length < 3){
      error('El nombre debe tener entre 3 y 30 caracteres');
      return 1;
    }
    if(datosTutor['pApellido'].length > 30 || datosTutor['pApellido'].length < 3){
      error('El apellido debe tener entre 3 y 30 caracteres');
      return 1;
    }
    if(datosTutor['pTel'] === ''){
      error('Introduzca un número de teléfono fijo');
      return 1;
    }
    if(datosTutor['pCel'] === ''){
      error('Introduzca su número de número de celular');
      return 1;
    }
    if(datosTutor['pWhapp'] !== "SW" && datosTutor['pWhapp'] !== "NW"){
      error('Seleccione si desea que lo agreguen al grupo de whatsapp');
      return 1;
    }
    return 0;
  }

  
  function compruebaDatosMedicos(){
    if(datosMedicos['cCeliaco'] === ''){
      error('Seleccione si padece de celiaquía');
      return 1;
    }
    if(datosMedicos['cRespiratoria'] === ''){
      error('Seleccione si padece de alguna enfermedad respiratoria');
      return 1;
    }
    if(datosMedicos['cERespiratoria'] === '' && datosMedicos['cRespiratoria'] === 'S'){
      error('Introduzca la enfermedad respiratoria');
      return 1;
    }
    if(datosMedicos['cCorazon'] === ''){
      error('Seleccione si padece de alguna enfermedad del corazón');
      return 1;
    }
    if(datosMedicos['cECorazon'] === '' && datosMedicos['cCorazon'] === 'S'){
      error('Introduzca la enfermedad del corazón');
      return 1;
    }
    if(datosMedicos['cHeridas'] === ''){
      error('Seleccione si es posible aplicarle una pomada o desinfectante de heridas en caso que se necesite.');
      return 1;
    }
    if(datosMedicos['cEHeridas'] === '' && datosMedicos['cHeridas'] === 'N'){
      error('Introduzca el motivo de porque no es posible aplicarle una pomada o desinfectante de heridas en caso que se necesite.');
      return 1;
    }
    return 0;
  }

  function handleNext() {
    if(activeStep === 0){
      if(compruebaDatosColono() === 1) return;
    }else if(activeStep === 1){
      if(compruebaDatosTutor() === 1) return;
    }else {
      if(compruebaDatosMedicos() === 1) return;
      let data = {
        cNombre: datosColono.cNombre,
        cApellido: datosColono.cApellido,
        cSexo: datosColono.cSexo,
        cFecha: datosColono.cFecha,
        cDni: datosColono.cDni,
        cDomicilio: datosColono.cDomicilio,
        cSocio: datosColono.cSocio,
        cNumSocio: datosColono.cNumSocio,
        pNombre: datosTutor.pNombre,
        pApellido: datosTutor.pApellido,
        pTel: datosTutor.pTel,
        pCel: datosTutor.pCel,
        pWhapp: datosTutor.pWhapp,
        cCeliaco: datosMedicos.cCeliaco,
        cRespiratoria: datosMedicos.cRespiratoria,
        cERespiratoria: datosMedicos.cERespiratoria,
        cCorazon: datosMedicos.cCorazon,
        cECorazon: datosMedicos.cECorazon,
        cHeridas: datosMedicos.cHeridas,
        cEHeridas: datosMedicos.cEHeridas,
        pagado: 0
      };
      props.ApiController.insertInscripto(data, {handleChangeInfoInscripcion});
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    return;
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  /* function handleReset() {
    setActiveStep(0);
  } */

  return (
    <div className={classes.root}>
      
      <Stepper activeStep={activeStep} orientation="vertical" className="Stepper">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div id="contInsc" />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Inscribir' : 'Siguiente Paso'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <SlideMensajeInscripcion tipo={infoInscripcion}/>
         {/*  <Button onClick={handleReset} className={classes.button}>
            Enviar otra inscripción
          </Button> */}
        </Paper>
      )}
    </div>
  );
}