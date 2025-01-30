import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ServicesPage from "./pages/ServicesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPage from "./pages/PrivacyPage";
import useDynamicTitles from "./hooks/useDynamicTitles";

function App() {
	useDynamicTitles();

	return (
		<>
			<Nav />
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
