import React from 'react';
import './card.css';

function Card(props) {

  return (
    <div className="card">
        <img className="image" src={"./"+props.image+".jpg"} alt="Imagen de colonia"/>
        <div className="details">
            <div className="name">{props.name}</div>
            <p className="description">{props.description}</p>
        </div>
    </div>
  );
}

export default Card;
