const axios = require("axios");
const admin = require("firebase-admin");
require("dotenv").config();

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const PLACE_ID = process.env.REACT_APP_PLACE_ID;
const FIRESTORE_COLLECTION = "reviews";

async function fetchGoogleReviews() {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
        const response = await axios.get(url);

        if (!response.data || !response.data.result || !response.data.result.reviews) {
            console.error("No reviews found");
            return;
        }

        const filteredReviews = response.data.result.reviews
            .filter(review => review.rating >= 4)
            .sort((a, b) => b.time - a.time)  // Sort by most recent
            .slice(0, 10); // Keep only the latest 10

        const db = admin.firestore();
        await db.collection(FIRESTORE_COLLECTION).doc("latest").set({ reviews: filteredReviews });

        console.log("Updated reviews successfully");
    } catch (error) {
        console.error("Error fetching reviews:", error);
    }
}

module.exports = { fetchGoogleReviews };
