import React from 'react';
import "./ActorCard.css"

const ActorCard = ({profile, name, character}) => {
	return (
		<div className="ActorCard">
			<img src={`https://media.themoviedb.org/t/p/w138_and_h175_face${profile}`} alt=""/>
			<h3>{name}</h3>
			<h6>{character}</h6>
		</div>
	);
};

export default ActorCard;