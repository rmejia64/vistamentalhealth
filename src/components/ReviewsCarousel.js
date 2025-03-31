import React, { useEffect, useState } from "react";
import { db, doc, getDoc } from "../firebaseConfig";
import '../styles/components/ReviewsCarousel.css';

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to track errors
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // State to track the index of the current review

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const placeId = "ChIJWdgmwYa6woARaLa58Dxp0Dk"; // Replace this with your actual place ID
        const docRef = doc(db, "reviews", placeId); // Get the document by place ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setReviews(docSnap.data().reviews || []); // Ensure reviews is always an array
        } else {
          setError("No reviews found.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("There was an error fetching the reviews. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Fetch reviews only once when the component mounts

  useEffect(() => {
    if (reviews.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Cycle through reviews
      }, 5000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [reviews.length]); // Re-run when the number of reviews changes

  return (
    <div className="reviews-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        reviews.length > 0 && (
          <div className="review-card mb-4 p-3 bg-white rounded shadow">
            <p className="font-semibold">{reviews[currentReviewIndex].author}</p>
            <p className="text-yellow-500">{"⭐".repeat(reviews[currentReviewIndex].rating)}</p>
            <p className="text-gray-700">{reviews[currentReviewIndex].text}</p>
          </div>
        )
      )}
    </div>
  );
}