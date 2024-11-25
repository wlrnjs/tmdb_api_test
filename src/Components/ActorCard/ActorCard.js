import React from 'react';
import "./ActorCard.css"

const ActorCard = ({ profile, name, character }) => {
	const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwj_dxUShx6ssBgwkMgKmcxNLZGL31w8Dqg&s";
	return (
		<div className="ActorCard">
			<img
				src={profile ? `https://media.themoviedb.org/t/p/w138_and_h175_face${profile}` : defaultImage}
				alt={name || "Unknown Actor"}
			/>
			<h3>{name}</h3>
			<h6>{character}</h6>
		</div>
	);
};

export default ActorCard;