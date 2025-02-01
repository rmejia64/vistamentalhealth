import React from "react";
import "../styles/pages/PrivacyPage.css";

export default function PrivacyPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Privacy Policy</h1>
				<div className="privacy-container">
					<p>
						This Privacy Policy applies to the sites and platforms where it
						appears. This Privacy Policy describes how Vista Mental Health
						(“we,” “our,” or “us”) treats customer information on the websites
						and platforms where it is located (in this policy we call these our
						Platforms). Your use of this Platform indicates that you agree to
						our collection, use, and disclosure of your information as described
						in this Privacy Policy.
					</p>
					<hr />
					<p>
						<span className="underline">
							You have a lot of rights relating to your personal information:
						</span>
					</p>
					<ul className="privacy-list">
						<li>
							The right to be informed about how your personal information is
							being used
						</li>
						<li>
							The right to access the personal information we hold about you
						</li>
						<li>
							The right to request correction of inaccurate personal information
						</li>
						<li>
							The right to request deletion of your data under certain
							circumstances
						</li>
					</ul>
					<hr />
					<p>
						<span className="underline">We collect information from you:</span>
					</p>
					<ul className="privacy-list">
						<li>Contact information such as your name and phone number</li>
						<li>
							Information submitted online, including social media interactions
						</li>
						<li>
							Device and location information, browser type, and site activity
						</li>
					</ul>
					<p>
						For more details, please contact us by phone at{" "}
						<a href="tel:+13238136218" className="privacy-link">
							+1 (323) 813-6218
						</a>{" "}
						or visit our office at{" "}
						<a
							href="https://maps.app.goo.gl/whjLZff4cwWMWgvm8"
							target="_blank"
							rel="noreferrer"
							className="privacy-link"
						>
							12560 W Washington Blvd, Los Angeles, CA 90066
						</a>
						.
					</p>
				</div>
				<a alt="Go Back to Home" href="/">
					<button className="home-button">Home</button>
				</a>
			</div>
		</div>
	);
}
