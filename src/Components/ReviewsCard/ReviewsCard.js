import React, { useState } from 'react';
import "./ReviewsCard.css"

const ReviewsCard = ({ userName, create, review }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	
	const truncatedReview = review.length > 900 ? review.slice(0, 900) + "..." : review;
	
	const showText = () => {
		setIsExpanded(!isExpanded);
	};
	
	return (
		<div className="reviews-card">
			<div className="reviews-card-item">
				<p>{userName}</p>
				<p>{create}</p>
			</div>
			<div className="reviews-card-content">
				<p>{isExpanded ? review : truncatedReview}</p>
				{review.length > 900 && !isExpanded && (
					<button onClick={showText} className="more-button">더보기</button>
				)}
				{isExpanded && (
					<button onClick={showText} className="more-button">접기</button>
				)}
			</div>
		</div>
	);
};

export default ReviewsCard;