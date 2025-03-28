const { onSchedule } = require("firebase-functions/v2/scheduler");
const { https } = require("firebase-functions/v2");
const admin = require("firebase-admin");
const { fetchGoogleReviews } = require("./googleReviews"); // Import the function

admin.initializeApp();

// Scheduled function (runs every 7 days)
exports.updateReviews = onSchedule("0 0 * * 0", async (event) => {
  // Runs every Sunday at midnight (UTC)
  try {
    console.log("Fetching Google reviews...");
    await fetchGoogleReviews();
    console.log("Google reviews updated successfully.");
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
  }
});

// Manual triggerable function (you can call this one right away)
exports.triggerUpdateReviews = https.onRequest(async (req, res) => {
  try {
    console.log("Manually triggering Google reviews update...");
    await fetchGoogleReviews();
    res.status(200).send("Google reviews updated successfully.");
  } catch (error) {
    console.error("Error updating reviews:", error);
    res.status(500).send("Error updating reviews.");
  }
});
