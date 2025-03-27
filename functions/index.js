const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.updateReviews = onSchedule("every 7 days", {
  timeZone: "America/Los_Angeles", // Adjust to your timezone
}, async (context) => {
  console.log("Fetching Google reviews...");

  // Your logic for fetching and updating Firestore goes here
  console.log("Google reviews updated successfully.");
  return null;
});