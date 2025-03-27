import React from "react";
import { useEffect, useState } from "react";
import "../styles/pages/ResourcesPage.css";
import BlogCarousel from "../components/BlogCarousel";
import { db } from "../firebaseConfig"; // Ensure to import the storage config
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function ResourcesPage() {
	const [forms, setForms] = useState([]);

	useEffect(() => {
		const fetchForms = async () => {
			try {
				console.log("Fetching forms from Firestore...");
				const querySnapshot = await getDocs(collection(db, "forms"));
				console.log("Query snapshot received:", querySnapshot);

				const storage = getStorage();
				const formsArray = await Promise.all(
					querySnapshot.docs.map(async (doc) => {
						const data = doc.data();
						console.log("Document data:", data);

						let url = data.URL;
						if (url && url.startsWith("gs://")) {
							console.log("Processing gs:// URL:", url);
							const bucketPath = url.replace(
								"gs://vistamentalhealth-d506d.appspot.com/",
								""
							);
							const storageRef = ref(storage, bucketPath);
							url = await getDownloadURL(storageRef);
							console.log("Converted URL:", url);
						}

						if (data.title && url) {
							return { id: doc.id, title: data.title, url };
						} else {
							console.warn("Skipping invalid form entry:", data);
							return null;
						}
					})
				);

				const validForms = formsArray.filter((form) => form !== null);
				console.log("Valid forms:", validForms);
				setForms(validForms);
			} catch (error) {
				console.error("Error fetching forms:", error);
			}
		};

		fetchForms();
	}, []);

	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Links & Resources</h1>
				<div className="resources-container">
					<div className="resource-card">
						<h1 className="resource-header">Payments</h1>
						<p className="resource-description">
							Vista Mental Health does not accept insurance
							directly. We can provide you with a “superbill” that you can file
							with your insurance for reimbursement. You should check with your
							insurance carrier to determine what they will pay for an
							out-of-network provider. Payment is expected at the time of
							service.
						</p>
						<p className="resource-description">
							Appointments with the psychiatrists are more similar to a
							therapist's than a traditional medical doctor in that starting and
							ending appointment times are as scheduled. Occasionally an
							emergency with another patient may delay your meeting time, but
							this is a rare occurrence. First appointments with either of the
							psychiatrists are scheduled for 60 or 90 minutes. Follow up
							appointments are either 25 or 50 minutes. Appointments with the
							therapists are 55 minutes long for both the initial visit and
							follow up appointments.
						</p>
						<p className="resource-description">
							These appointments run on time, so please arrive a few minutes
							prior to your scheduled appointment time. Cash, check, and all
							major credit cards are acceptable methods of payment, although
							personal checks are not accepted for a first visit. Certain visit
							types (such as initial visits) require payment in advance. If you
							have already discussed this with us, please click here.
						</p>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Forms</h1>
						<ul className="resource-link-list">
							{forms.map((form) => (
								<li key={form.id} className="resource-link">
									<a target="_blank" rel="noreferrer" href={form.url}>
										{form.title}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Helpful Links</h1>
						<ul className="resource-link-list">
							<label className="resource-link-header">Healthy Eating:</label>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.drweil.com/diet-nutrition/anti-inflammatory-diet-pyramid/"
							>
								<li className="resource-link">
									Dr. Weil Anti-Inflammatory Food Pyramid
								</li>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://nutritionfacts.org"
							>
								<li className="resource-link">Nutrition Facts</li>
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/"
							>
								<li className="resource-link">
									The Healthy Eating Pyramid from the Harvard School of Public
									Health
								</li>
							</a>
						</ul>
						<ul className="resource-link-list">
							<label className="resource-link-header">Recipes:</label>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.drweil.com/diet-nutrition/recipes/"
							>
								<li className="resource-link">Dr. Weil - Recipes</li>
							</a>
							<a target="_blank" rel="noreferrer" href="https://ohsheglows.com">
								<li className="resource-link">OhSheGlows - Vegan Recipes</li>
							</a>
							<a target="_blank" rel="noreferrer" href="https://weelicious.com">
								<li className="resource-link">
									Weelicious - Recipes for the Whole Family
								</li>
							</a>
						</ul>
						<ul className="resource-link-list">
							<label className="resource-link-header">Women's Health:</label>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://womensmentalhealth.org"
							>
								<li className="resource-link">
									MGH Center for Women's Mental Health
								</li>
							</a>
						</ul>
						<ul className="resource-link-list">
							<label className="resource-link-header">Support:</label>
							<a target="_blank" rel="noreferrer" href="https://www.nami.org">
								<li className="resource-link">
									National Alliance for the Mentally Ill (NAMI.org)
								</li>
							</a>
						</ul>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Recent Blog Posts:</h1>
						<BlogCarousel />
					</div>
				</div>
			</div>
		</div>
	);
}
