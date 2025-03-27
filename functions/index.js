const { onSchedule } = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");
const { fetchGoogleReviews } = require("./googleReviews"); // Import the function

admin.initializeApp();

exports.updateReviews = onSchedule("every 7 days", async (event) => {
  console.log("Fetching Google reviews...");
  await fetchGoogleReviews();
  console.log("Google reviews updated successfully.");
});

// (async () => {
//   console.log("Running updateReviews manually...");
//   await fetchGoogleReviews();
//   console.log("Done!");
// })();

