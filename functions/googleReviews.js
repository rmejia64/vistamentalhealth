const axios = require("axios");
const { db } = require("./firebaseConfig"); // Import Firestore instance
require("dotenv").config(); // Load environment variables

const GOOGLE_API_KEY = process.env.PLACES_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

if (!GOOGLE_API_KEY || !PLACE_ID) {
    console.error("Missing required environment variables: GOOGLE_API_KEY or PLACE_ID. Please check your .env file.");
    process.exit(1);
}

const FIRESTORE_COLLECTION = "reviews";

async function fetchGoogleReviews() {
    try {
        const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=id,displayName,rating,reviews&key=${GOOGLE_API_KEY}`;
        const response = await axios.get(url);

        console.log("Full Google API Response:", JSON.stringify(response.data, null, 2));

        if (!response.data || !response.data.reviews) {
            console.error("No reviews found in the response");
            return;
        }

        // Filter for 4-star and 5-star reviews
        const filteredReviews = response.data.reviews
            .filter(review => review.rating >= 4)
            .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime)) // Sort newest first
            .slice(0, 10); // Limit to 10 reviews

        // Construct Firestore document
        const businessData = {
            id: response.data.id,
            name: response.data.displayName.text,
            rating: response.data.rating,
            updatedAt: new Date().toISOString(),
            reviews: filteredReviews.map(review => ({
                author: review.authorAttribution.displayName,
                profilePic: review.authorAttribution.photoUri,
                rating: review.rating,
                text: review.text.text,
                timestamp: review.publishTime
            }))
        };

        // Store in Firestore using the business ID as the document ID
        await db.collection(FIRESTORE_COLLECTION).doc(PLACE_ID).set(businessData);

        console.log("Updated Firestore with new reviews successfully.");
    } catch (error) {
        console.error("Error fetching reviews from Google Places API:", error.message);
        console.error(error.stack);
    }
}

module.exports = { fetchGoogleReviews };
