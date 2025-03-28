const axios = require("axios");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
require("dotenv").config(); // Load environment variables

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || (functions.config().google && functions.config().google.api_key);
const PLACE_ID = process.env.REACT_APP_PLACE_ID || (functions.config().google && functions.config().google.place_id);

const FIRESTORE_COLLECTION = "reviews";

async function fetchGoogleReviews() {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
        const response = await axios.get(url);

        if (!response.data || !response.data.result || !response.data.result.reviews) {
            console.error("No reviews found");
            return;
        }
        console.log("Google API Response:", JSON.stringify(response.data, null, 2));


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