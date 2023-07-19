import React, { useState } from "react";
import DriverProfile from "./components/driverProfile";
import RideCompleteModal from "./components/rideCompleteModal";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

// This is just sample driver data for display.
const driverData = {
  name: "Anjali",
  overallRating: 4.2,
  totalRides: 123,
};

function App() {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onStarClick = (nextValue) => {
    console.log("nextValue", nextValue);
    setRating(nextValue);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    fetch(`${process.env.REACT_APP_URL}/reviews`, {
      // fetch(`https://pullover-termite.cyclic.app/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewerId: 1,
        revieweeId: 2,
        rideId: 1,
        rating,
        review,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSubmissionStatus({
          success: true,
          message: "Review submitted successfully",
          review: { rating, review },
        });
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmissionStatus({
          success: false,
          message: "Review submission failed",
        });
      });
  };

  return (
    <Container
      className="mt-5 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {submissionStatus ? null : (
        <Row className="justify-content-md-center">
          <Col xs>
            <DriverProfile
              name={driverData.name}
              overallRating={driverData.overallRating}
              totalRides={driverData.totalRides}
            />
            <Button variant="primary" onClick={handleShow}>
              Mark Ride as Complete
            </Button>

            <RideCompleteModal
              show={show}
              handleClose={handleClose}
              onStarClick={onStarClick}
              rating={rating}
              review={review}
              handleReviewChange={handleReviewChange}
              handleSubmitReview={handleSubmitReview}
            />
          </Col>
        </Row>
      )}
      {submissionStatus && (
        <Alert variant={submissionStatus.success ? "success" : "danger"}>
          {submissionStatus.message}
          {submissionStatus.success && (
            <div>
              Rating: {submissionStatus.review.rating}, Review:{" "}
              {submissionStatus.review.review}
            </div>
          )}
        </Alert>
      )}
    </Container>
  );
}

export default App;
