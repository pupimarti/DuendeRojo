import React, {useEffect} from 'react';


//COMPONENTS
import TablePrices from './TablePrices';


//dependences
import { Element } from 'react-scroll';


//CSS
import './css.css';

export default function ContentPrices(props) {
	const [className, setClassName] = React.useState('invisible');

	useEffect(() => {
		if(className === 'invisible')
			window.addEventListener('scroll', handleSetClassName);
	});

	function handleSetClassName(){
		const top = document.documentElement.scrollTop;
		if(top > 1500){
			const prices = document.getElementById("prices");
			if(prices !== null && top > prices.scrollTop + 0)
					setClassName('col-900 appear-above-fast');
		}
	}
	  
  return (
	<Element name="prices" className="content-prices">
		<div id="prices" className={className}>
			<div className="heading">Precios y formas de pago</div>
			
			<div className="info">Los pagos se efectúan únicamente en efectivo y al director.</div>
			<TablePrices />
		</div>
	</Element>
  );
}