import React, { useState } from "react";
import "../styles/pages/ContactPage.css";
import parking_img_1 from "../assets/images/street-view/parking-map.png";
import parking_img_2 from "../assets/images/street-view/back-office-1.jpg";
import parking_img_3 from "../assets/images/street-view/back-office-2.jpg";

export default function ContactPage() {
	const googleMapsApiKey = process.env.googleMapsKey;
	const mapAddress = "12560+W. Washington Blvd,+Los Angeles,+CA";
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="main-header">Contact Us</h1>
				<div className="contact-container">
					<h2>
						To schedule an appointment with Vista Mental Health, please call:
					</h2>
					<a className="phone-link" href="tel:+13238136218">
						(323) 813-6218
					</a>
					<div className="google-map">
						{isLoading && <div className="spinner">Loading map...</div>}
						<iframe
							title="Google Map"
							src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${mapAddress}`}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							onLoad={() => setIsLoading(false)}
						></iframe>
					</div>
					<div className="street-view-container">
						<img
							className="parking-image"
							alt="street view of office parking"
							src={parking_img_1}
						></img>
						<img
							className="parking-image"
							alt="street view of office parking"
							src={parking_img_2}
						></img>
						<img
							className="parking-image"
							alt="street view of office parking"
							src={parking_img_3}
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}
