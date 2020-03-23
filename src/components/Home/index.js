import React from 'react';
import ApiController from '../../controller/ApiController';

//COMPONENTS
import ContentInfo from './ContentInfo';
import ContentInscripcion from './Inscripcion';
import Footer from './Footer';
import ContentHeader from './Header';
import ContentPrices from './ContentPrices';
import ContentCards from './ContentCards';

//CSS
import '../../css/reset.css';
import '../../css/App.css';
import '../../css/fonts.css';
import '../../css/animaciones.css';

export default function Home(props) {
  return (
    <div className="App">
      	<ContentHeader title={props.data.title} description={props.data.description} />
		<ContentCards cardLeft={props.data.cardLeft} cardRight={props.data.cardRight} />
		<ContentInfo data={props.data.generalInfo} />
		<ContentPrices />
		<ContentInscripcion ApiController={ApiController}/>
		<Footer />
    </div>
  );
}