// App.js
import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles"; // Import the GlobalStyles component
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
	const [selectedLanguage, setSelectedLanguage] = useState("EN");
	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
	};
	return (
		<Router>
			<div className="App">
				<GlobalStyles /> {/* Include the GlobalStyles component */}
				<NavBar
					changeLanguage={handleLanguageChange}
					selectedLanguage={selectedLanguage}
				/>
				{/* Define your routes */}
				<Routes>
					<Route
						exact
						path="/"
						element={<Home selectedLanguage={selectedLanguage} />}
					/>
					<Route
						path="/about"
						element={
							<AboutUs selectedLanguage={selectedLanguage} />
						}
					/>
					<Route
						path="/services"
						element={
							<Services selectedLanguage={selectedLanguage} />
						}
					/>
					<Route
						path="/contact"
						element={
							<Contact selectedLanguage={selectedLanguage} />
						}
					/>
				</Routes>
				<Footer selectedLanguage={selectedLanguage} />
			</div>
		</Router>
	);
}

export default App;
