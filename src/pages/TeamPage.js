import React from "react";
import "../styles/pages/TeamPage.css";

export default function TeamPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Meet the Team</h1>
				<div className="team-container">
					<div className="team-filter">
						<h2 className="team-category">Psychiatrists</h2>
						<h2 className="team-category">Therapists</h2>
						<h2 className="team-category">Administrative Assistants</h2>
					</div>
				</div>
			</div>
		</div>
	);
}
