import React from "react";
import "../styles/pages/ContactPage.css";
import parking_img_1 from "../assets/images/street-view/parking-map.png";
import parking_img_2 from "../assets/images/street-view/back-office-1.jpg";
import parking_img_3 from "../assets/images/street-view/back-office-2.jpg";

export default function ContactPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Contact Us</h1>
				<div className="contact-container">
					<h2>
						To schedule an appointment with Vista Mental Health Medical Group,
						please call:
					</h2>
					<a className="phone-link" href="tel:+13238136218">+1 (323) 813-6218</a>
					<div className="google-map"></div>
					<div className="street-view-container">
						<img className="parking-image" alt="street view of office parking" src={parking_img_1}></img>
						<img className="parking-image" alt="street view of office parking" src={parking_img_2}></img>
						<img className="parking-image" alt="street view of office parking" src={parking_img_3}></img>
					</div>
				</div>
			</div>
		</div>
	);
}
