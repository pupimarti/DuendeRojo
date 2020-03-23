import React, {useEffect} from 'react';

//dependences
import { Element } from 'react-scroll';

//COMPONENTS
import Inscripcion from './StepperInscripcion';

//CSS
import './css.css';

export default function ContentInscripcion(props) {
	const [className, setClassName] = React.useState('invisible');

	useEffect(() => {
		if(className === 'invisible')
			window.addEventListener('scroll', handleSetClassName);
	});

	function handleSetClassName(){
		const top = document.documentElement.scrollTop;
		if(top > 2300){
			if(top > document.getElementById("inscription").scrollTop + 1000)
					setClassName('col-900 appear-above-fast');
		}
	}

  return (
		<Element name="inscripcion">
			<section className="content-inscripcion">
				<div id="inscription" className={className}>
					<div className="heading">Inscripción en solo 3 pasos</div>
					<div className="desc">Inscriba a su hijo desde la comodidad de su casa. Ya no hay obligación de ir a sacar fotocopias.</div>
					<Inscripcion ApiController={props.ApiController}/>
				</div>
			</section>
		</Element>
  );
}