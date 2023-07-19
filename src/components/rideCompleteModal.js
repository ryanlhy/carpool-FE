import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

function RideCompleteModal({
  show,
  handleClose,
  onStarClick,
  rating,
  review,
  handleReviewChange,
  handleSubmitReview,
}) {
  const [driverMatch, setDriverMatch] = useState(false); // New state for driver match

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmitReview(rating, review, driverMatch); // Pass driverMatch to handleSubmitReview
    setDriverMatch(false); // Reset driverMatch after submitting the review
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rate your ride</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Rating</h4>
        <ReactStars
          count={5}
          onChange={onStarClick}
          size={24}
          activeColor="#ffd700"
        />
        <h4>Review</h4>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={handleReviewChange}
            sx={{ padding: 0 }}
          />
          <Form.Check
            type="checkbox"
            label="The driver was the same as the one stated in the profile"
            checked={driverMatch}
            onChange={() => setDriverMatch(!driverMatch)}
            className="mt-3"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitReview}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RideCompleteModal;

// function RideCompleteModal({
//     show,
//     handleClose,
//     ratingChanged,
//     rating,
//     handleReviewChange,
//   }) {
//     return (
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Rate your ride</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Rating</h4>
//           <ReactStars
//             count={5}
//             onChange={ratingChanged}
//             size={24}
//             activeColor="#ffd700"
//           />
//           <h4>Review</h4>
//           <Form.Group>
//             <Form.Control as="textarea" rows={3} onChange={handleReviewChange} />
//           </Form.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
