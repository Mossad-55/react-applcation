import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import contactContent from "../content/contactContent";
import ARcontactContent from "../content/ARcontactContent";

const Contact = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

			// Settings that can be overridden per element via `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
		});

		if (props.selectedLanguage === "AR") {
			AOS.refresh();
		}
	}, [props.selectedLanguage]);

	const { header, contactInfo, contactForm } =
		props.selectedLanguage === "AR" ? ARcontactContent : contactContent;

	return (
		<ContactContainer>
			<Header>
				<HeaderLayout>
					<h2 data-aos="fade-up">{header.text}</h2>
				</HeaderLayout>
			</Header>
			<ContactInfos>
				<ContactHeader data-aos="fade-up">
					<SmallText className="welcome">
						{contactInfo.smallText}
					</SmallText>
					<HeaderText>{contactInfo.headerText}</HeaderText>
				</ContactHeader>
				<ContactInfo>
					<ContactList>
						<ContactListItems data-aos="fade-up">
							<ContactIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="86"
									height="85"
									viewBox="0 0 86 85"
									fill="none">
									<circle
										cx="43"
										cy="42.5"
										r="42.5"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M32 59H55.5714"
										stroke="#3D75C3"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M42.9994 43.2855C45.6031 43.2855 47.7137 41.1748 47.7137 38.5712C47.7137 35.9676 45.6031 33.8569 42.9994 33.8569C40.3958 33.8569 38.2852 35.9676 38.2852 38.5712C38.2852 41.1748 40.3958 43.2855 42.9994 43.2855Z"
										stroke="#3D75C3"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M55.5706 38.6923C55.5706 50.1154 42.9992 59 42.9992 59C42.9992 59 30.4277 50.1154 30.4277 38.6923C30.4277 35.3261 31.7522 32.0978 34.1098 29.7175C36.4674 27.3372 39.665 26 42.9992 26C46.3333 26 49.5309 27.3372 51.8885 29.7175C54.2461 32.0978 55.5706 35.3261 55.5706 38.6923V38.6923Z"
										stroke="#3D75C3"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<ContactHeaderText>
									{contactInfo.items.item1.title}
								</ContactHeaderText>
								<SmallText>
									{contactInfo.items.item1.description}
								</SmallText>
							</ContactIcon>
						</ContactListItems>
						<ContactListItems data-aos="fade-up">
							<ContactIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="86"
									height="85"
									viewBox="0 0 86 85"
									fill="none">
									<circle
										cx="43.1631"
										cy="42.5"
										r="42.5"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M48.1163 27.3772C50.5544 28.0316 52.7775 29.3157 54.5625 31.1007C56.3475 32.8857 57.6317 35.1088 58.286 37.5469M46.625 32.9292C48.0914 33.3186 49.4288 34.0888 50.5016 35.1616C51.5744 36.2344 52.3446 37.5718 52.734 39.0382M36.0961 42.6137C37.5752 45.6682 40.0451 48.1318 43.1034 49.6031C43.329 49.7099 43.5785 49.7561 43.8274 49.7372C44.0763 49.7183 44.316 49.635 44.5228 49.4953L49.0147 46.4947C49.2132 46.3601 49.4425 46.278 49.6813 46.256C49.9201 46.234 50.1606 46.2728 50.3803 46.3689L58.7891 49.9804C59.0765 50.1 59.3166 50.3108 59.4724 50.5803C59.6282 50.8497 59.6912 51.163 59.6515 51.4717C59.385 53.5519 58.3697 55.4637 56.7955 56.8494C55.2213 58.235 53.1961 58.9996 51.099 59.0001C44.6182 59.0001 38.4028 56.4256 33.8202 51.843C29.2376 47.2604 26.6631 41.045 26.6631 34.5642C26.6636 32.4671 27.4282 30.4419 28.8138 28.8677C30.1995 27.2936 32.1113 26.2782 34.1915 26.0117C34.5002 25.972 34.8135 26.035 35.0829 26.1908C35.3524 26.3466 35.5632 26.5867 35.6828 26.8741L39.2943 35.3009C39.3882 35.5172 39.4275 35.7532 39.4087 35.9882C39.3899 36.2232 39.3136 36.4499 39.1865 36.6485L36.1859 41.2122C36.0523 41.4187 35.9739 41.6559 35.9582 41.9013C35.9424 42.1466 35.9899 42.3919 36.0961 42.6137Z"
										stroke="#3D75C3"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<ContactHeaderText>
									{contactInfo.items.item2.title}
								</ContactHeaderText>
								<SmallText>
									{contactInfo.items.item2.description}
								</SmallText>
							</ContactIcon>
						</ContactListItems>
						<ContactListItems data-aos="fade-up">
							{" "}
							<ContactIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="86"
									height="85"
									viewBox="0 0 86 85"
									fill="none">
									<circle
										cx="42.8252"
										cy="42.5"
										r="42.5"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M49.7002 42.4962C49.7002 46.2932 46.6222 49.3712 42.8252 49.3712C39.0282 49.3712 35.9502 46.2932 35.9502 42.4962C35.9502 38.6993 39.0282 35.6212 42.8252 35.6212C46.6222 35.6212 49.7002 38.6993 49.7002 42.4962ZM49.7002 42.4962C49.7002 46.2947 51.0752 49.3712 54.5127 49.3712C57.9502 49.3712 59.3252 46.2947 59.3252 42.4962C59.3243 38.82 58.0958 35.2494 55.8345 32.3509C53.5733 29.4524 50.4088 27.3921 46.8433 26.4969C43.2778 25.6016 39.5154 25.9228 36.1531 27.4093C32.7909 28.8958 30.0214 31.4626 28.284 34.7024C26.5467 37.9422 25.9411 41.6694 26.5632 45.2926C27.1854 48.9157 28.9997 52.2274 31.7183 54.702C34.4369 57.1766 37.904 58.6725 41.5696 58.9523C45.2351 59.232 48.8891 58.2796 51.9518 56.2462M49.7002 42.4962V35.6212"
										stroke="#3D75C3"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<ContactHeaderText>
									{contactInfo.items.item3.title}
								</ContactHeaderText>
								<SmallText>
									{contactInfo.items.item3.description}
								</SmallText>
							</ContactIcon>
						</ContactListItems>
					</ContactList>
				</ContactInfo>
			</ContactInfos>
			<ContactForm>
				<InputsContainer>
					<InputContainer>
						<Label htmlFor="name">
							{contactForm.inputs.input1.label}
						</Label>
						<TextInput
							name="name"
							type="text"
							id="name"
							placeholder={contactForm.inputs.input1.placeholder}
						/>
					</InputContainer>
					<InputContainer>
						<Label htmlFor="email">
							{contactForm.inputs.input2.label}
						</Label>
						<TextInput
							name="email"
							type="text"
							id="email"
							placeholder={contactForm.inputs.input2.placeholder}
						/>
					</InputContainer>
					<InputContainer>
						<Label htmlFor="phone">
							{contactForm.inputs.input3.label}
						</Label>
						<TextInput
							name="phone"
							type="text"
							id="name"
							placeholder={contactForm.inputs.input3.placeholder}
						/>
					</InputContainer>
					<InputContainer>
						<Label htmlFor="subject">
							{contactForm.inputs.input4.label}
						</Label>
						<TextInput
							name="subject"
							type="text"
							id="name"
							placeholder={contactForm.inputs.input4.placeholder}
						/>
					</InputContainer>
				</InputsContainer>
				<TextAreaContainer>
					<Label htmlFor="help">{contactForm.textArea.label}</Label>
					<TextArea
						id="help"
						placeholder={
							contactForm.textArea.placeholder
						}></TextArea>
				</TextAreaContainer>
				<Button>{contactForm.button}</Button>
			</ContactForm>
		</ContactContainer>
	);
};

const ContactContainer = styled.section`
	padding-top: 80px;

	.welcome {
		border: 1px solid rgba(0, 0, 0, 0.1);
		font-weight: bold;
		color: #3d75c3;
		width: 30%;
		padding: 14px 5px;
		text-align: center;
		@media (max-width: 768px) {
			width: 45%;
		}
	}

	.hidden {
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const SmallText = styled.div`
	color: #545454;
	text-align: center;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 142%; /* 22.72px */
`;

const HeaderText = styled.div`
	color: #1c1c1c;
	text-align: center;
	font-family: Manrope;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 114.5%; /* 45.8px */

	span {
		color: #3d75c3;
	}

	@media (max-width: 1200px) {
		font-size: 30px;
	}

	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 315px;
	background-color: #fff;
	background-image: url("/imgs/contact3.svg");
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
		background-image: url("/imgs/contact3.svg");
		box-sizing: border-box;
	}
`;

const HeaderLayout = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: rgba(217, 217, 217, 0.5);

	h2 {
		width: 50%;
		color: #1c1c1c;
		font-family: Manrope;
		text-align: center;
		font-size: 45px;
		font-style: normal;
		font-weight: 700;
		line-height: 114.5%; /* 51.525px */
	}

	@media (max-width: 768px) {
		h2 {
			color: #000;
			text-align: center;
			font-family: Manrope;
			font-size: 15px;
			font-style: normal;
			font-weight: 700;
			line-height: 142%; /* 21.3px */
		}
	}
`;

const ContactInfos = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	margin: 100px auto;
	max-width: 1200px;
`;

const ContactInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
`;
const ContactList = styled.ul`
	display: flex;
	width: 100%;
	gap: 4%;
	list-style: none;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;
const ContactListItems = styled.li`
	width: 96%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4%;
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
`;

const ContactIcon = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

const ContactHeaderText = styled.div`
	color: #1c1c1c;
	font-family: Manrope;
	text-align: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 114.5%; /* 22.9px */
`;

const ContactHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 55%;
	gap: 10px;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const ContactForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	margin: 60px auto;
	height: 500px;
	background: rgba(61, 117, 195, 0.2);
	flex-wrap: wrap;
	padding: 20px 0 150px 0;
	position: relative;

	@media (max-width: 768px) {
		width: 100%;
		height: 650px;
		align-items: flex-start;
		box-sizing: border-box;
	}
`;

const InputsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	width: 95%;
	padding: 10px 50px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const InputContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	width: 45%;
	gap: 10%;
	padding: 10px 0;
	gap: 10px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const TextAreaContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
	height: 70%;
	padding: 0px 50px;

	@media (max-width: 768px) {
		width: 100%;
		height: 30%;
	}
`;

const TextArea = styled.textarea`
	width: 96%;
	height: 90%;
	padding: 10px;
	border: 0;
	resize: none;

	@media (max-width: 768px) {
		width: 91%;
	}
`;

const TextInput = styled.input`
	width: 90%;
	padding: 10px 10px;
	border: 0;
`;

const Label = styled.label`
	color: #292930;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 160%; /* 25.6px */
	text-transform: capitalize;
`;

const Button = styled.button`
	padding: 17px 44px;
	position: absolute;
	bottom: 20px;
	border-radius: 5px;
	background: #3d75c3;
	color: #fff;
	border: 0;
	@media (max-width: 768px) {
		left: 50px;
	}
`;

export default Contact;
