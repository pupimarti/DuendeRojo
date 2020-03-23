import React from 'react';

//dependences
import { scroller } from 'react-scroll';

//CSS
import './header.css';

export default function Header(props) {

	const scrollType = {
		duration: 2000,
		delay: 100,
		smooth: true, // linear “easeInQuint” “easeOutCubic”
		offset: 50,
	 };
	// Desplamiento hasta el borde inferior de la página
	function onClickInscripcion(){
		scroller.scrollTo("inscripcion", scrollType);
	}

  return (
    <div className="App">
      <header className="header">
		<div className="col-900">
			<div className="top appear-above">
				<div className="logo">
					<a href="/">
						<img src="./logo.png" alt="Logo" className="logo-img" />
					</a>
				</div>
				<div onClick={onClickInscripcion} className="action">Inscripción</div>
			</div>
			<div className="content">
				<span className="heading underlined">{props.title}</span>
				<p className="description appear-left">
				{props.description}
				</p>
			</div>
		</div>
	</header>
    </div>
  );
}