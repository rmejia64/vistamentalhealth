const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const { fetchGoogleReviews } = require("./googleReviews"); // Import the function

/**
 * Fetch Google reviews with a retry mechanism using exponential backoff.
 * @param {number} retries Number of retry attempts.
 * @param {number} delay Initial delay between retries in milliseconds.
 */
async function fetchReviewsWithRetry(retries = 3, delay = 2000) {
	for (let i = 0; i < retries; i++) {
		try {
			logger.info("Fetching Google reviews...");
			await fetchGoogleReviews(); // Assuming this is your actual function
			logger.info("Google reviews updated successfully.");
			return;
		} catch (error) {
			if (i < retries - 1) {
				logger.error(
					`Error fetching Google reviews. Retries left: ${retries - i - 1}: ${
						error.message
					}`,
					{ error }
				);

				// Wait before retrying with updated delay
				const currentDelay = delay; // Capture the current value of delay
				await new Promise((resolve) => setTimeout(resolve, currentDelay));

				// Exponential backoff: Double the delay for the next retry
				delay *= 2;
			} else {
				throw new Error("Max retries reached. Failed to update reviews.");
			}
		}
	}
}

// Scheduled function (runs every Sunday at midnight UTC)
exports.updateReviews = onSchedule("0 0 * * 0", async (event) => {
	try {
		await fetchReviewsWithRetry();
	} catch (error) {
		logger.error("Final failure in scheduled Google reviews update:", {
			error,
		});
	}
});

exports.triggerUpdateReviews = onRequest(
	{ timeoutSeconds: 120 }, // Use this instead of runWith()
	async (req, res) => {
		try {
			await fetchReviewsWithRetry();
			res.status(200).json({
				success: true,
				message: "Google reviews updated successfully.",
			});
		} catch (error) {
			logger.error("Manual trigger failed:", { error });
			res.status(500).json({
				success: false,
				message: "Error updating reviews.",
				error: error.message,
			});
		}
	}
);
