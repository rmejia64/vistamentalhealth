import React from "react";
import logo from "../logo.svg";
import menu_button from "../assets/images/icons/bars-solid.svg";
import close_button from "../assets/images/icons/close-circle.svg";
import "../styles/components/Nav.css";
import { Link } from "react-router-dom";

export default function Nav({ isOpen, toggleNav }) {
	return (
		<div className="nav-container" style={isOpen ? { boxShadow: "none" } : {}}>
			<Link to="/">
				<img className="logo" alt="Vista Mental Health Logo" src={logo} />
			</Link>
			<div className="title">
				<Link className="title-link" to="/">
					<h1 className="company-name">Vista Mental Health</h1>
					<h2 className="company-subname">Psychiatric & Counseling Services</h2>
				</Link>
			</div>
			<div className="link-container">
				<Link className="nav-link" to="/Team">
					Meet the Team
				</Link>
				<Link className="nav-link" to="/Services">
					Services
				</Link>
				<Link className="nav-link" to="/Resources">
					Links & Resources
				</Link>
				<Link className="nav-link" to="/Contact">
					Contact Us
				</Link>
			</div>
			<img
				className="menu-button"
				alt="a menu button"
				src={isOpen ? close_button : menu_button}
				onClick={() => toggleNav(!isOpen)}
			/>
		</div>
	);
}
