import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	const handleToggleMobileMenu = () => {
		setMobileMenuVisible(!mobileMenuVisible);
	};

	const handleMobileMenuClose = () => {
		setMobileMenuVisible(false);
	};
	return (
		<NavBarContainer>
			<Logo className="logo"></Logo>

			{/* Desktop Navigation */}
			<NavList
				className={`menu ${mobileMenuVisible ? "show" : ""}`}
				selectedLanguage={props.selectedLanguage}>
				<NavItem
					exact
					to="/"
					activeClassName="active">
					{props.selectedLanguage === "AR" ? "الرئيسية" : "Home"}
				</NavItem>
				<NavItem
					to="/about"
					activeClassName="active">
					{props.selectedLanguage === "AR" ? "نبذة عنا" : "About Us"}
				</NavItem>
				<NavItem
					to="/services"
					activeClassName="active">
					{props.selectedLanguage === "AR" ? "الخدمات" : "Services"}
				</NavItem>
				<NavItem
					to="/contact"
					activeClassName="active">
					{props.selectedLanguage === "AR"
						? "تواصل معنا"
						: "Contact Us"}
				</NavItem>
			</NavList>

			{/* Mobile Menu Toggle */}
			<ToggleButton
				className="toggle-button"
				onClick={handleToggleMobileMenu}>
				<MenuIcon sx={{ fontSize: "35px" }} />
			</ToggleButton>

			{/* Language Buttons */}
			<LanguageButtons>
				<LanguageButton
					selected={props.selectedLanguage === "EN"}
					onClick={() => props.changeLanguage("EN")}>
					EN
				</LanguageButton>
				<LanguageButton
					selected={props.selectedLanguage === "AR"}
					onClick={() => props.changeLanguage("AR")}>
					AR
				</LanguageButton>
			</LanguageButtons>

			{/* Hidden Content for Mobile */}
			{mobileMenuVisible && (
				<HiddenContent>
					<MobileMenu>
						<MenuItem
							onClick={handleMobileMenuClose}
							to="/"
							exact>
							{props.selectedLanguage === "AR"
								? "الرئيسية"
								: "Home"}
						</MenuItem>
						<MenuItem
							onClick={handleMobileMenuClose}
							to="/about">
							{props.selectedLanguage === "AR"
								? "نبذة عنا"
								: "About Us"}
						</MenuItem>
						<MenuItem
							onClick={handleMobileMenuClose}
							to="/services">
							{props.selectedLanguage === "AR"
								? "الخدمات"
								: "Services"}
						</MenuItem>
						<MenuItem
							onClick={handleMobileMenuClose}
							to="/contact">
							{props.selectedLanguage === "AR"
								? "تواصل معنا"
								: "Contact Us"}
						</MenuItem>
					</MobileMenu>
					{/* Language Buttons for Mobile */}
					<LanguageButtonsMobile>
						<LanguageButton
							selected={props.selectedLanguage === "EN"}
							onClick={() => props.changeLanguage("EN")}>
							EN
						</LanguageButton>
						<LanguageButton
							selected={props.selectedLanguage === "AR"}
							onClick={() => props.changeLanguage("AR")}>
							AR
						</LanguageButton>
					</LanguageButtonsMobile>
				</HiddenContent>
			)}
		</NavBarContainer>
	);
};

export default NavBar;

const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 10px 20px;
	height: 60px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: fixed;
	width: 100%;
	z-index: 999999;

	@media (max-width: 768px) {
		padding: 10px 30px;
		.logo {
			display: block;
		}
		.menu {
			display: none;
		}
		.toggle-button {
			display: block;
		}
	}
`;

const Logo = styled.div`
	background-image: url("/imgs/logo.svg");
	background-size: contain;
	background-repeat: no-repeat;
	height: 100%;
	width: 33%;

	@media (max-width: 768px) {
		width: 45%;
		background-position: center;
	}
`;

const NavList = styled.ul`
	direction: ${(props) => (props.selectedLanguage === "AR" ? "rtl" : "ltr")};
	list-style: none;
	display: flex;
	width: 33%;
	gap: 20px;
	justify-content: center;
	color: #000;
	font-family: Manrope;
	font-size: 17px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;

	@media (max-width: 1200px) {
		font-size: 12px;
	}
`;

const NavItem = styled(NavLink)`
	cursor: pointer;
	color: ${(props) => (props.selected ? "#3D75C3" : "inherit")};
	text-decoration: none;
	&:hover {
		color: #3d75c3;
	}

	&.active {
		color: #3d75c3;
		/* You can add additional styling for the active link here */
	}
`;

const ToggleButton = styled.div`
	display: none;
	cursor: pointer;
	padding: 0 70px;
`;

const LanguageButtonsMobile = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 33%;
`;

const LanguageButtons = styled.div`
	display: flex;
	justify-content: end;
	padding: 0 50px;
	align-items: center;
	width: 33%;

	@media (max-width: 768px) {
		display: none;
	}
`;

const LanguageButton = styled.button`
	margin-left: 10px;
	padding: 7px 25px;
	border-radius: 5px;
	background: none;
	border: none;
	background-color: ${(props) => (props.selected ? "#3D75C3" : "inherit")};
	color: ${(props) => (props.selected ? "#fff" : "inherit")};
	cursor: pointer;
	&:hover {
		color: #000;
	}
`;

const HiddenContent = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 60px; /* Adjust the top position to match your header height */
		right: 0;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 100%;
		z-index: 99999999;
	}
`;

// Define MobileMenu and MenuItem components here

const MobileMenu = styled.ul`
	list-style: none;
	text-align: center;
	width: 100%;
	justify-content: center;
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 25px 0;
`;

// Define the MenuItem component
const MenuItem = styled(NavLink)`
	cursor: pointer;
	text-align: center;
	color: #000;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: #3d75c3;
	}
`;
