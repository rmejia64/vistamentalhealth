import React from "react";
import "../styles/components/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer-container">
			<p className="locations">
				We proudly serve a wide range of areas, including Marina del Rey, Playa
				Vista, Playa del Rey, Manhattan Beach, Torrance, Redondo Beach, Hermosa
				Beach, South Bay, Westside, Culver City, Mar Vista, Westchester, El
				Segundo, Venice, Santa Monica, West LA, and Los Angeles
			</p>
			<div className="footer-row">
				<div className="footer-info">
					<h1 className="footer-title">Vista Mental Health</h1>
					<h2 className="footer-subtitle">Psychiatric & Counseling Services</h2>

					<p className="address">
						<Link
							className="footer-links"
							rel="noreferrer"
							target="_blank"
							to="https://maps.app.goo.gl/whjLZff4cwWMWgvm8"
						>
							Address: 12560 W. Washington Blvd, Los Angeles, CA 90066
						</Link>
					</p>
				</div>
				<a alt="Call Vista Mental Health" href="tel:+13238136218">
					<button className="call-button">Call Us</button>
				</a>
				<ul className="link-list">
					<li>
						<Link to="/Contact" className="footer-links">
							Contact Us
						</Link>
					</li>

					<li>
						<Link
							to="/Resources"
							className="footer-links"
						>
							Links and Resources
						</Link>
					</li>

					<li>
						<Link
							to="/Resources"
							className="footer-links"
						>
							Payments
						</Link>
					</li>

					<li>
						<Link
							to="/Resources"
							className="footer-links"
						>
							Forms
						</Link>
					</li>

					<li>
						<Link to="/Blog" className="footer-links">
							Blog
						</Link>
					</li>

					<li>
						<Link to="/Privacy" className="footer-links">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
			<p className="privacy-text">
				By using this site you are agreeing to our{" "}
				<Link to="/Privacy" className="footer-links">
					Privacy Policy
				</Link>
				.
			</p>
			<p className="copyright">&copy; 2025 Vista Mental Health </p>
		</div>
	);
}
