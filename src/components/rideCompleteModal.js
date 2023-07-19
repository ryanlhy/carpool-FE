import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";

function RideCompleteModal({
  show,
  handleClose,
  onStarClick,
  rating,
  review,
  handleReviewChange,
  handleSubmitReview,
}) {
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
        {/* <Form.Control
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => onStarClick(e.target.value)}
        /> */}
        <h4>Review</h4>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={handleReviewChange}
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
