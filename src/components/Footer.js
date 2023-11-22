import React from "react";
import styled from "styled-components";
import footerContent from "../content/footerContent";
import ARfooterContent from "../content/ARfooterContent";

const Footer = (props) => {
	const { about, helpfulLinks, support, contactUs, copyright } =
		props.selectedLanguage === "AR" ? ARfooterContent : footerContent;

	return (
		<FooterContainer>
			<FooterBody>
				<FooterLogoList
					data-aos="fade-up"
					data-aos-delay="50">
					<FooterLogoListItems>
						<img
							src="/imgs/footerlogo.svg"
							alt="logo"
						/>
					</FooterLogoListItems>
					<FooterLogoListItems>{about.text}</FooterLogoListItems>
					<FooterLogoListItems>
						<SocialIcons>
							<img
								src="/imgs/facebook.svg"
								alt="fb"
							/>
						</SocialIcons>
						<SocialIcons>
							<img
								src="/imgs/instgram.svg"
								alt="fb"
							/>
						</SocialIcons>
						<SocialIcons>
							<img
								src="/imgs/ln.svg"
								alt="fb"
							/>
						</SocialIcons>
					</FooterLogoListItems>
				</FooterLogoList>
				<FooterList
					data-aos="fade-up"
					data-aos-delay="150">
					<h3>{helpfulLinks.title}</h3>
					<FooterListItems>
						{helpfulLinks.links.privacyPolicy}
					</FooterListItems>
					<FooterListItems>
						{helpfulLinks.links.support}
					</FooterListItems>
					<FooterListItems>{helpfulLinks.links.faq}</FooterListItems>
					<FooterListItems>
						{helpfulLinks.links.termsAndConditions}
					</FooterListItems>
				</FooterList>
				<FooterList
					data-aos="fade-up"
					data-aos-delay="250">
					<h3>{support.title}</h3>
					<FooterListItems>
						{support.links.privacyPolicy}
					</FooterListItems>
					<FooterListItems> {support.links.support}</FooterListItems>
					<FooterListItems> {support.links.faq}</FooterListItems>
					<FooterListItems>
						{" "}
						{support.links.termsAndConditions}
					</FooterListItems>
				</FooterList>
				<FooterList
					data-aos="fade-up"
					data-aos-delay="350">
					<h3> {contactUs.title}</h3>
					<FooterListItems>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M13.355 13.3299H2.64502C2.08164 13.3293 1.54152 13.1052 1.14315 12.7068C0.744777 12.3084 0.520681 11.7683 0.52002 11.2049V4.79492C0.520681 4.23154 0.744777 3.69142 1.14315 3.29305C1.54152 2.89468 2.08164 2.67058 2.64502 2.66992H13.355C13.9184 2.67058 14.4585 2.89468 14.8569 3.29305C15.2553 3.69142 15.4794 4.23154 15.48 4.79492V11.2049C15.4794 11.7683 15.2553 12.3084 14.8569 12.7068C14.4585 13.1052 13.9184 13.3293 13.355 13.3299ZM2.64502 3.41992C2.28035 3.41992 1.93061 3.56479 1.67275 3.82265C1.41489 4.08051 1.27002 4.43025 1.27002 4.79492V11.2049C1.27002 11.5696 1.41489 11.9193 1.67275 12.1772C1.93061 12.4351 2.28035 12.5799 2.64502 12.5799H13.355C13.7197 12.5799 14.0694 12.4351 14.3273 12.1772C14.5852 11.9193 14.73 11.5696 14.73 11.2049V4.79492C14.73 4.43025 14.5852 4.08051 14.3273 3.82265C14.0694 3.56479 13.7197 3.41992 13.355 3.41992H2.64502Z"
								fill="white"
							/>
							<path
								d="M7.99979 9.52005C7.53718 9.52078 7.08694 9.3707 6.71729 9.09255L0.879789 4.67755C0.838545 4.64861 0.803557 4.61164 0.776916 4.56887C0.750274 4.5261 0.732526 4.4784 0.72473 4.42862C0.716934 4.37884 0.719251 4.328 0.731543 4.27913C0.743834 4.23026 0.765848 4.18438 0.796269 4.14421C0.82669 4.10404 0.864895 4.07041 0.908601 4.04534C0.952307 4.02026 1.00062 4.00425 1.05065 3.99826C1.10068 3.99227 1.15141 3.99643 1.1998 4.01048C1.24819 4.02454 1.29325 4.0482 1.33229 4.08005L7.16979 8.50005C7.40951 8.679 7.70064 8.77568 7.99979 8.77568C8.29893 8.77568 8.59007 8.679 8.82979 8.50005L14.6673 4.08005C14.7063 4.0482 14.7514 4.02454 14.7998 4.01048C14.8482 3.99643 14.8989 3.99227 14.9489 3.99826C14.999 4.00425 15.0473 4.02026 15.091 4.04534C15.1347 4.07041 15.1729 4.10404 15.2033 4.14421C15.2337 4.18438 15.2557 4.23026 15.268 4.27913C15.2803 4.328 15.2826 4.37884 15.2748 4.42862C15.2671 4.4784 15.2493 4.5261 15.2227 4.56887C15.196 4.61164 15.161 4.64861 15.1198 4.67755L9.28229 9.09255C8.91264 9.3707 8.4624 9.52078 7.99979 9.52005Z"
								fill="white"
							/>
							<path
								d="M1.04254 12.285C0.966487 12.2851 0.892194 12.2621 0.829523 12.219C0.766852 12.1759 0.718765 12.1148 0.691644 12.0437C0.664523 11.9727 0.65965 11.895 0.67767 11.8211C0.695691 11.7473 0.735754 11.6806 0.792543 11.63L5.39254 7.5275C5.4668 7.46119 5.56436 7.4271 5.66376 7.43273C5.76315 7.43836 5.85624 7.48324 5.92254 7.5575C5.98885 7.63176 6.02294 7.72931 6.01731 7.82871C6.01168 7.9281 5.9668 8.02119 5.89254 8.0875L1.29254 12.19C1.22423 12.2522 1.13489 12.2861 1.04254 12.285ZM14.9575 12.285C14.8652 12.2861 14.7759 12.2522 14.7075 12.19L10.1075 8.0875C10.0333 8.02119 9.9884 7.9281 9.98278 7.82871C9.97715 7.72931 10.0112 7.63176 10.0775 7.5575C10.1438 7.48324 10.2369 7.43836 10.3363 7.43273C10.4357 7.4271 10.5333 7.46119 10.6075 7.5275L15.205 11.63C15.2618 11.6806 15.3019 11.7473 15.3199 11.8211C15.3379 11.895 15.3331 11.9727 15.3059 12.0437C15.2788 12.1148 15.2307 12.1759 15.1681 12.219C15.1054 12.2621 15.0311 12.2851 14.955 12.285H14.9575Z"
								fill="white"
							/>
						</svg>
						{contactUs.email}
					</FooterListItems>
					<FooterListItems>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="17"
							viewBox="0 0 17 17"
							fill="none">
							<path
								d="M15.5335 1.29825C15.4731 1.26803 15.4101 1.25041 15.3447 1.24537C15.2792 1.24033 15.2162 1.25292 15.1558 1.28314L10.6837 3.51921L6.21152 1.28314C6.16115 1.25292 6.10576 1.23782 6.04532 1.23782C5.98489 1.23782 5.92445 1.25292 5.86402 1.28314L1.22568 3.60987C1.16525 3.64008 1.11488 3.68541 1.07459 3.74584C1.0343 3.80628 1.01416 3.87175 1.01416 3.94225V15.5457C1.01416 15.6162 1.02927 15.6816 1.05949 15.7421C1.0897 15.8025 1.13503 15.8478 1.19546 15.878C1.22568 15.8982 1.25842 15.9133 1.29367 15.9234C1.32892 15.9334 1.36669 15.9385 1.40698 15.9385C1.4372 15.9385 1.4649 15.936 1.49008 15.9309C1.51526 15.9259 1.54296 15.9133 1.57318 15.8932L6.04532 13.6571L10.5175 15.8932C10.5678 15.9234 10.6232 15.9385 10.6837 15.9385C10.7441 15.9385 10.7995 15.9234 10.8499 15.8932L15.5033 13.5815C15.5637 13.5412 15.6141 13.4909 15.6544 13.4305C15.6947 13.37 15.7148 13.3045 15.7148 13.234V1.63064C15.7148 1.56013 15.6972 1.49718 15.6619 1.44178C15.6267 1.38638 15.5839 1.33854 15.5335 1.29825ZM5.6525 12.9923L1.7847 14.9262V4.18399L5.6525 2.25009V12.9923ZM6.42304 2.25009L10.2908 4.18399V14.9262L6.42304 12.9923V2.25009ZM14.9443 12.9923L11.0765 14.9262V4.18399L14.9443 2.25009V12.9923Z"
								fill="white"
							/>
						</svg>
						{contactUs.address}
					</FooterListItems>
					<FooterListItems>
						<div>略</div>
						{contactUs.phone}
					</FooterListItems>
					<FooterListItems></FooterListItems>
					<FooterListItems></FooterListItems>
					<FooterListItems></FooterListItems>
				</FooterList>
			</FooterBody>
			<FooterCopyRight>
				<p>{copyright.text}</p>
			</FooterCopyRight>
		</FooterContainer>
	);
};

const FooterContainer = styled.section`
	display: flex;
	flex-direction: column;
	background: #000a2d;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	background: #000a2d;
	color: #fff;
	gap: 30px;
`;

const FooterBody = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	background: #000a2d;
	color: #fff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.09);
	padding: 20px 20px 40px 20px;

	@media (max-width: 768px) {
		align-items: flex-start;
		flex-direction: column;
		gap: 50px;
	}

	@media (max-width: 1200px) {
		flex-wrap: wrap;
		gap: 5%;
	}
`;
const FooterCopyRight = styled.div`
	display: flex;
	height: 15px;
	flex-direction: column;
	justify-content: center;
	flex-shrink: 0;
	color: #fff;
	text-align: right;
	font-family: Archivo;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22.4px; /* 160% */
`;

const FooterLogoList = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	list-style: none;
	gap: 10px;
	width: 15%;

	@media (max-width: 768px) {
		width: 70%;
		gap: 20px;
	}

	@media (max-width: 1200px) {
		width: 40%;
		margin: 50px 0;
	}
`;

const FooterLogoListItems = styled.li`
	display: flex;
	gap: 7px;
`;

const SocialIcons = styled.div`
	padding: 10px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;

const FooterList = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	list-style: none;
	gap: 10px;

	h3 {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 40px;
		gap: 20px;
		&::after {
			position: absolute;
			bottom: 0;
			content: "";
			border-top: 2px solid #3d75c3;
			width: 80px;
			height: 2px;
		}
	}

	@media (max-width: 1200px) {
		width: 40%;
		margin: 20px 0;
	}
`;

const FooterListItems = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export default Footer;
