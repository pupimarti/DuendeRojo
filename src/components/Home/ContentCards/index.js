import React, { useEffect } from 'react';

//COMPONENTS
import Card from './Card';

//CSS
import './css.css';

export default function ContenedorCards(props) {

	const [top, setTop] = React.useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleSetTop);
	});

	function handleSetTop(){
		if(document.documentElement.scrollTop < 1600)
			setTop(document.documentElement.scrollTop / 10 + 'px');
	}

	 let topAnimation = {
		top: top,
	  };

  return (
	<section className="contenedor-cards">
		<div style={topAnimation} className="col-1000">
			<div className="column -left">
				{props.cardLeft && props.cardLeft.map((card, key) =>
					<Card 
					key={key}
					image={card.img}
					name={card.title}
					description={card.description} />
				)}
			</div>
			<div className="column">
			{props.cardRight && props.cardRight.map((card, key) =>
					<Card 
					key={key}
					image={card.img}
					name={card.title}
					description={card.description} />
				)}
			</div>
		</div>
	</section>
  );
}