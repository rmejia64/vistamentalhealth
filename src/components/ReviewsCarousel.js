import React, { useEffect, useState } from "react";
import { db, doc, getDoc } from "../firebaseConfig";
import '../styles/components/ReviewsCarousel.css';

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const docRef = doc(db, "reviews", "latest");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setReviews(docSnap.data().reviews || []); // Ensure reviews is always an array
        } else {
          console.log("No reviews found.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-card mb-4 p-3 bg-white rounded shadow">
              <p className="font-semibold">{review.author_name}</p>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p> // If there are no reviews, display this message
        )
      )}
    </div>
  );
}
