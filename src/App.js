import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";

// Hooks
import useDynamicTitles from "./hooks/useDynamicTitles";
import ScrollToTop from "./hooks/scrollToTop";

function App() {
	const [isOpen, toggleNav] = useState(false);

	useEffect(() => {
		// Disable scroll when the menu is open
		document.body.style.overflow = isOpen ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto"; // Clean up on unmount
		};
	}, [isOpen]);
	useDynamicTitles();

	return (
		<>
			<ScrollToTop />
			<Nav isOpen={isOpen} toggleNav={toggleNav} />
			{isOpen ? <MobileNav toggleNav={toggleNav} /> : <></>}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Team" element={<TeamPage />} />
				<Route path="/Services" element={<ServicesPage />} />
				<Route path="/Resources" element={<ResourcesPage />} />
				<Route path="/Contact" element={<ContactPage />} />
				<Route path="/Blog" element={<BlogPage />} />
				<Route path="/Privacy" element={<PrivacyPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
