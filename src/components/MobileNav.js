import React from "react";
import { useState, useEffect } from "react";
import "../styles/components/MobileNav.css";
import { Link } from "react-router-dom";

export default function MobileNav({ isOpen, toggleNav }) {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (!isOpen) {
			setIsAnimating(true);
			const timer = setTimeout(() => setIsAnimating(false), 500); // Match animation duration
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	const handleClick = () => {
		toggleNav(false);
	};
	return (
		<div
			className={`mobile-nav-container ${
				isOpen ? "slide-down" : isAnimating ? "slide-up" : ""
			}`}
		>
			<ul className="mobile-link-container">
				<div className="mobile-link-container">
					<li className="list-item">
						<Link className="mobile-nav-link" to="/Team" onClick={handleClick}>
							Meet the Team
						</Link>
					</li>
					<li className="list-item">
						<Link
							className="mobile-nav-link"
							to="/Services"
							onClick={handleClick}
						>
							Services
						</Link>
					</li>
					<li className="list-item">
						<Link
							className="mobile-nav-link"
							to="/Resources"
							onClick={handleClick}
						>
							Links & Resources
						</Link>
					</li>
					<li className="list-item">
						<Link
							className="mobile-nav-link"
							to="/Contact"
							onClick={handleClick}
						>
							Contact Us
						</Link>
					</li>
					<li className="list-item">
						<Link className="mobile-nav-link" to="/Blog" onClick={handleClick}>
							Blog
						</Link>
					</li>
				</div>
			</ul>
		</div>
	);
}
