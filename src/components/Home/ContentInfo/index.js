import React from 'react';

//COMPONENTS
import GeneralInfo from './GeneralInfo';

//CSS
import './css.css';

export default function ContentGeneralInfo(props) {
  return (
	<section className="content-generalInfo">
		<GeneralInfo data={props.data}/>
	</section>
  );
}