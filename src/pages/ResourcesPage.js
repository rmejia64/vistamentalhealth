import React from "react";
import "../styles/pages/ResourcesPage.css";
import BlogCarousel from "../components/BlogCarousel";

export default function ResourcesPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Links & Resources</h1>
				<div className="resources-container">
					<div className="resource-card">
						<h1 className="resource-header">Payments</h1>
						<p className="resource-description">
							Vista Mental Health Medical Group does not accept insurance
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
							<label className="resource-link-header">
								Psychiatry New Patient Forms:
							</label>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">Psychiatry Intake Form</li>
							</a>
						</ul>
						<ul className="resource-link-list">
							<label className="resource-link-header">
								Therapy New Client Forms:
							</label>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">Individual Couseling Form</li>
							</a>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">Couples Couseling Form</li>
							</a>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">Family Therapy Couseling Form</li>
							</a>
						</ul>
						<ul className="resource-link-list">
							<label className="resource-link-header">
								Biofeedback New Patient Forms:
							</label>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">New VMH Patient Intake Form</li>
							</a>
							<a target="_blank" rel="noreferrer" href="/">
								<li className="resource-link">
									Current VMH Patient Intake Form
								</li>
							</a>
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
