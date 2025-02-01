import React from "react";
import "../styles/pages/ResourcesPage.css";

export default function ResourcesPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Links & Resources</h1>
				<div className="resources-container">
					<div className="resource-card">
						<h1 className="resource-header">Helpful Links</h1>
						<p className="resource-description"></p>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Payments</h1>
						<p className="resource-description"></p>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Recent Blog Posts</h1>
						<p className="resource-description"></p>
					</div>
					<div className="resource-card">
						<h1 className="resource-header">Forms</h1>
						<p className="resource-description"></p>
					</div>
				</div>
			</div>
		</div>
	);
}
