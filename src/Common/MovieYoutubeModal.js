import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MovieYoutubeModal.css"
import { Button, Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';

function MovieYoutubeModal(id) {
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1, // 자동 재생
		},
	};
	
	return (
		<>
			<Button variant="outline-danger" onClick={handleShow} className="movie-youtube-modal">
				Watch Trailer
			</Button>
			
			<Modal
				show={show}
				onHide={handleClose}
				centered
				size="lg"
			>
				<Modal.Header closeButton>
					<Modal.Title>Movie Trailer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<YouTube videoId={`${id}`} opts={opts} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default MovieYoutubeModal;