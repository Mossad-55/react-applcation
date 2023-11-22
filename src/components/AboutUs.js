import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import aboutUsContent from "../content/aboutUsContent";
import ArAboutUsContent from "../content/ArAboutUsContent";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const { header, videoSection, leaders, ourStory, values, valueIcons } =
		props.selectedLanguage === "AR" ? ArAboutUsContent : aboutUsContent;

	const toggleVideo = () => {
		const video = document.getElementById("aboutVideo");
		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	};

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

	return (
		<AboutContainer selectedLanguage={props.selectedLanguage}>
			<Header>
				<HeaderLayout>
					<h2 data-aos="fade-up">{header.main}</h2>
					<h2
						data-aos="fade-up"
						data-aos-delay="250">
						{header.sub}
					</h2>
				</HeaderLayout>
			</Header>
			<AboutVideoSection>
				<VideoSectionHeader>
					<HeaderText
						data-aos="fade-up"
						data-aos-delay="100">
						{videoSection.headerText}
					</HeaderText>
					<SmallText
						style={{ width: "100%" }}
						data-aos="fade-up"
						data-aos-delay="200">
						{videoSection.smallText}
					</SmallText>
				</VideoSectionHeader>
				<VideoSection
					data-aos="fade-up"
					data-aos-delay="200">
					<VideoContainer>
						<video
							id="aboutVideo"
							controls={isPlaying ? "controls" : ""}
							poster="/imgs/videoPhoto.svg">
							<source
								src=""
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						{/* {!isPlaying && (
							<PlayButton onClick={toggleVideo}>
								<PlayCircleOutlineIcon
									fontSize="large"
									style={{ color: "#000" }}
								/>
							</PlayButton>
						)} */}
					</VideoContainer>
					<VideoDescription>
						<VideoDescriptionList>
							<VideoDescriptionListItems
								selectedLanguage={props.selectedLanguage}
								data-aos="fade-up"
								data-aos-delay="250">
								<SmallText
									className="welcome"
									selectedLanguage={props.selectedLanguage}>
									{leaders.header}
								</SmallText>
								<VideoHeaderText
									selectedLanguage={props.selectedLanguage}>
									{leaders.headerText}
								</VideoHeaderText>
								<SmallText
									className="vid"
									selectedLanguage={props.selectedLanguage}>
									{leaders.description1}
								</SmallText>
								<SmallText
									className="vid"
									selectedLanguage={props.selectedLanguage}>
									{leaders.description2}
								</SmallText>
							</VideoDescriptionListItems>
							<VideoDescriptionListItems></VideoDescriptionListItems>
							<VideoDescriptionListItems></VideoDescriptionListItems>
						</VideoDescriptionList>
						<VideoDescriptionList
							data-aos="fade-up"
							data-aos-delay="250">
							<VideoDescriptionListItems
								selectedLanguage={props.selectedLanguage}>
								<SmallText
									className="welcome"
									selectedLanguage={props.selectedLanguage}>
									{ourStory.header}
								</SmallText>
								<VideoHeaderText
									selectedLanguage={props.selectedLanguage}>
									{ourStory.headerText}
								</VideoHeaderText>
								<SmallText className="vid">
									{ourStory.description}
								</SmallText>
								<ul className="desc">
									<li>{ourStory.lists.list1}</li>
									<li>{ourStory.lists.list2}</li>
									<li>{ourStory.lists.list3}</li>
								</ul>
							</VideoDescriptionListItems>
						</VideoDescriptionList>
					</VideoDescription>
				</VideoSection>
			</AboutVideoSection>
			<AboutValues>
				<VideoSectionHeader
					data-aos="fade-up"
					data-aos-delay="100">
					<HeaderText>{values.header}</HeaderText>
					<SmallText style={{ width: "100%" }}>
						{values.description}
					</SmallText>
				</VideoSectionHeader>
				<AboutValue>
					<AboutValueList>
						<AboutValueListItems
							data-aos="fade-up"
							data-aos-delay="150">
							<ValueIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="125"
									height="125"
									viewBox="0 0 125 125"
									fill="none">
									<circle
										cx="62.4994"
										cy="62.4994"
										r="62.4994"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M83.0534 46.9163C82.7986 46.3368 82.3803 45.8443 81.8498 45.4991C81.3192 45.1538 80.6994 44.9709 80.0664 44.9727H44.9178C44.285 44.9778 43.667 45.165 43.1378 45.5121C42.6086 45.8592 42.1906 46.3513 41.9338 46.9297C41.677 47.5081 41.5922 48.1482 41.6897 48.7735C41.7871 49.3988 42.0626 49.9828 42.4832 50.4557L55.9452 65.2476V81.2056C55.9442 81.7994 56.1057 82.3821 56.4123 82.8906C56.7188 83.3991 57.1587 83.814 57.6842 84.0903C58.1574 84.3404 58.6835 84.4737 59.2187 84.4791C59.8669 84.4793 60.5007 84.287 61.0395 83.9267L67.5864 79.5484C68.0348 79.2505 68.4022 78.8459 68.6557 78.371C68.9092 77.8961 69.0409 77.3657 69.039 76.8274V65.2476L82.501 50.4557C82.9294 49.9846 83.2101 49.398 83.3083 48.7689C83.4065 48.1397 83.3179 47.4955 83.0534 46.9163Z"
										fill="#3D75C3"
									/>
								</svg>
								<AboutHeaderText>
									{valueIcons.value1.icon}
								</AboutHeaderText>
								<SmallText>
									{valueIcons.value1.description}
								</SmallText>
							</ValueIcon>
						</AboutValueListItems>
						<AboutValueListItems
							data-aos="fade-up"
							data-aos-delay="200">
							<ValueIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="126"
									height="125"
									viewBox="0 0 126 125"
									fill="none">
									<circle
										cx="63.3373"
										cy="62.4994"
										r="62.4994"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M83.3628 53.3163C83.0837 53.5862 82.7106 53.7371 82.3223 53.7371C81.934 53.7371 81.5609 53.5862 81.2817 53.3163L77.941 49.9574L72.7018 55.1966L78.9816 61.4581C79.2558 61.735 79.4096 62.109 79.4096 62.4987C79.4096 62.8884 79.2558 63.2623 78.9816 63.5392C78.7024 63.8091 78.3293 63.96 77.941 63.96C77.5527 63.96 77.1796 63.8091 76.9005 63.5392L75.7504 62.3709L60.416 77.7053C59.8682 78.2516 59.1269 78.5599 58.3532 78.5633H49.3351L45.392 82.5246C45.1128 82.7945 44.7397 82.9454 44.3514 82.9454C43.9631 82.9454 43.59 82.7945 43.3109 82.5246C43.0367 82.2477 42.8828 81.8738 42.8828 81.4841C42.8828 81.0944 43.0367 80.7204 43.3109 80.4435L47.2723 76.5004V67.4823C47.2756 66.7086 47.5839 65.9674 48.1303 65.4195L50.1749 63.3749C50.3114 63.2411 50.4949 63.1662 50.686 63.1662C50.8771 63.1662 51.0606 63.2411 51.1971 63.3749L56.4546 68.6507C56.7338 68.9206 57.1069 69.0715 57.4952 69.0715C57.8835 69.0715 58.2566 68.9206 58.5357 68.6507C58.81 68.3738 58.9638 67.9998 58.9638 67.6101C58.9638 67.2204 58.81 66.8465 58.5357 66.5696L53.26 61.3121C53.1262 61.1756 53.0512 60.9921 53.0512 60.8009C53.0512 60.6098 53.1262 60.4263 53.26 60.2898L56.7467 56.8031C56.8832 56.6693 57.0667 56.5943 57.2579 56.5943C57.449 56.5943 57.6325 56.6693 57.769 56.8031L63.0265 62.0788C63.3057 62.3487 63.6788 62.4996 64.0671 62.4996C64.4554 62.4996 64.8285 62.3487 65.1076 62.0788C65.3818 61.8019 65.5357 61.428 65.5357 61.0383C65.5357 60.6486 65.3818 60.2746 65.1076 59.9977L59.8319 54.7402C59.6981 54.6037 59.6231 54.4202 59.6231 54.2291C59.6231 54.0379 59.6981 53.8544 59.8319 53.7179L63.4646 50.0851L62.3511 48.9716C62.0753 48.6997 61.914 48.3326 61.9004 47.9456C61.8868 47.5585 62.022 47.181 62.2781 46.8905C62.4131 46.7495 62.5747 46.6367 62.7535 46.5585C62.9324 46.4803 63.125 46.4383 63.3201 46.4349C63.5153 46.4315 63.7092 46.4668 63.8907 46.5387C64.0721 46.6107 64.2376 46.7178 64.3774 46.854L70.6389 53.1338L75.8782 47.8945L72.574 44.5903C72.2982 44.3185 72.1369 43.9513 72.1233 43.5643C72.1097 43.1773 72.2449 42.7997 72.501 42.5092C72.636 42.3683 72.7976 42.2554 72.9764 42.1773C73.1553 42.0991 73.3479 42.0571 73.543 42.0537C73.7382 42.0503 73.9321 42.0856 74.1136 42.1575C74.295 42.2294 74.4605 42.3365 74.6003 42.4727L83.3628 51.2352C83.6371 51.5121 83.7909 51.8861 83.7909 52.2758C83.7909 52.6655 83.6371 53.0394 83.3628 53.3163Z"
										fill="#3D75C3"
									/>
								</svg>
								<AboutHeaderText>
									{valueIcons.value2.icon}
								</AboutHeaderText>
								<SmallText>
									{valueIcons.value2.description}
								</SmallText>
							</ValueIcon>
						</AboutValueListItems>
						<AboutValueListItems
							data-aos="fade-up"
							data-aos-delay="250">
							<ValueIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="126"
									height="126"
									viewBox="0 0 126 126"
									fill="none">
									<circle
										cx="63.3597"
										cy="62.7762"
										r="62.4994"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M79.2932 48.5857H71.9855V47.1241C71.9807 45.9628 71.5172 44.8503 70.696 44.0291C69.8748 43.2078 68.7623 42.7443 67.6009 42.7395H58.8317C57.6703 42.7443 56.5578 43.2078 55.7366 44.0291C54.9154 44.8503 54.4519 45.9628 54.4471 47.1241V48.5857H47.1394C46.3641 48.5857 45.6206 48.8937 45.0725 49.4418C44.5243 49.99 44.2163 50.7335 44.2163 51.5088V74.8934C44.2163 75.6686 44.5243 76.4121 45.0725 76.9603C45.6206 77.5085 46.3641 77.8165 47.1394 77.8165H79.2932C80.0685 77.8165 80.812 77.5085 81.3602 76.9603C81.9083 76.4121 82.2163 75.6686 82.2163 74.8934V51.5088C82.2163 50.7335 81.9083 49.99 81.3602 49.4418C80.812 48.8937 80.0685 48.5857 79.2932 48.5857ZM57.3702 47.1241C57.3702 46.7365 57.5241 46.3648 57.7982 46.0907C58.0723 45.8166 58.4441 45.6626 58.8317 45.6626H67.6009C67.9885 45.6626 68.3603 45.8166 68.6344 46.0907C68.9085 46.3648 69.0625 46.7365 69.0625 47.1241V48.5857H57.3702V47.1241ZM68.3317 64.6626H64.6778V68.3165C64.6778 68.7041 64.5239 69.0758 64.2498 69.3499C63.9757 69.624 63.6039 69.778 63.2163 69.778C62.8287 69.778 62.4569 69.624 62.1828 69.3499C61.9088 69.0758 61.7548 68.7041 61.7548 68.3165V64.6626H58.1009C57.7133 64.6626 57.3416 64.5086 57.0675 64.2345C56.7934 63.9604 56.6394 63.5887 56.6394 63.2011C56.6394 62.8134 56.7934 62.4417 57.0675 62.1676C57.3416 61.8935 57.7133 61.7395 58.1009 61.7395H61.7548V58.0857C61.7548 57.6981 61.9088 57.3263 62.1828 57.0522C62.4569 56.7781 62.8287 56.6241 63.2163 56.6241C63.6039 56.6241 63.9757 56.7781 64.2498 57.0522C64.5239 57.3263 64.6778 57.6981 64.6778 58.0857V61.7395H68.3317C68.7193 61.7395 69.0911 61.8935 69.3652 62.1676C69.6392 62.4417 69.7932 62.8134 69.7932 63.2011C69.7932 63.5887 69.6392 63.9604 69.3652 64.2345C69.0911 64.5086 68.7193 64.6626 68.3317 64.6626Z"
										fill="#3D75C3"
									/>
								</svg>
								<AboutHeaderText>
									{valueIcons.value3.icon}
								</AboutHeaderText>
								<SmallText>
									{valueIcons.value3.description}
								</SmallText>
							</ValueIcon>
						</AboutValueListItems>
						<AboutValueListItems
							data-aos="fade-up"
							data-aos-delay="300">
							{" "}
							<ValueIcon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="126"
									height="125"
									viewBox="0 0 126 125"
									fill="none">
									<circle
										cx="63.3373"
										cy="62.4994"
										r="62.4994"
										fill="#3D75C3"
										fill-opacity="0.23"
									/>
									<path
										d="M44.9589 55.6005L61.2709 50.852H61.2908L79.9273 45.408C80.4019 45.2671 80.9031 45.2405 81.39 45.3302C81.8769 45.42 82.3356 45.6237 82.7288 45.9246C83.1271 46.2174 83.4501 46.6007 83.6712 47.0429C83.8923 47.485 84.0051 47.9734 84.0003 48.4678V76.0054C84.0004 76.845 83.6682 77.6506 83.0763 78.2462C82.4844 78.8418 81.6809 79.1791 80.8413 79.1843C80.5327 79.1851 80.2254 79.145 79.9273 79.0651L63.3372 74.2172V76.5418C63.3372 77.3849 63.0023 78.1935 62.4061 78.7897C61.8099 79.3858 61.0014 79.7208 60.1583 79.7208H53.8004C52.9573 79.7208 52.1487 79.3858 51.5525 78.7897C50.9564 78.1935 50.6214 77.3849 50.6214 76.5418V70.5217L44.9589 68.8726C44.2997 68.6761 43.7214 68.2723 43.3098 67.7211C42.8983 67.1699 42.6753 66.5008 42.6741 65.8129V58.6602C42.6753 57.9724 42.8983 57.3032 43.3098 56.752C43.7214 56.2009 44.2997 55.797 44.9589 55.6005ZM53.8004 76.5418H60.1583V73.3033L53.8004 71.4356V76.5418ZM45.853 65.8129L52.6877 67.7997L60.1583 69.9852V54.4879L45.853 58.6602V65.8129Z"
										fill="#3D75C3"
									/>
								</svg>
								<AboutHeaderText>
									{valueIcons.value4.icon}
								</AboutHeaderText>
								<SmallText>
									{valueIcons.value4.description}
								</SmallText>
							</ValueIcon>
						</AboutValueListItems>
					</AboutValueList>
				</AboutValue>
			</AboutValues>
		</AboutContainer>
	);
};

const AboutContainer = styled.section`
	padding-top: 80px;
	direction: ${(props) => (props.selectedLanguage === "AR" ? "rtl" : "ltr")};

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

const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 531px;
	background-color: #fff;
	background-image: url("/imgs/doctors.svg");
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
		background-image: url("/imgs/doctor1.svg");
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
		color: #000;
		text-align: center;
		font-family: Manrope;
		font-size: 45px;
		font-style: normal;
		font-weight: 700;
		line-height: 142%; /* 63.9px */
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

const VideoDescription = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	gap: 10%;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;

const VideoDescriptionList = styled.ul`
	width: 45%;
	list-style: none;

	@media (max-width: 768px) {
		padding-top: 40px;
		width: 90%;
	}
`;

const VideoDescriptionListItems = styled.li`
	display: flex;
	flex-direction: column;
	gap: 20px;

	.vid {
		text-align: ${(props) =>
			props.selectedLanguage === "AR" ? "right" : "left"};

		@media (max-width: 768px) {
			text-align: ${(props) =>
				props.selectedLanguage === "AR" ? "right" : "left"};
			width: 95%;
		}
	}

	.desc {
		color: #545454;
		font-family: Manrope;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		padding: 0 18px;
		line-height: 181%; /* 28.96px */
		list-style: circle;
	}
`;

const VideoHeaderText = styled.div`
	height: 66.83px;
	flex-shrink: 0;
	color: #1c1c1c;
	font-family: Manrope;
	text-align: ${(props) =>
		props.selectedLanguage === "AR" ? "right" : "left"};
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	line-height: 130%; /* 39px */
`;

const AboutVideoSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	margin: 60px auto;
	max-width: 1200px;
`;

const VideoSectionHeader = styled.div`
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

const VideoSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	position: relative;
	video {
		width: 80%;
		height: 400px;
	}

	@media (max-width: 768px) {
		padding-top: 50px;
		video {
			width: 100%;
			height: 100%;
		}
	}
`;

const VideoContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PlayButton = styled.button`
	background-color: #fff;
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: background-color 0.3s ease;
	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
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
	text-align: ${(props) =>
		props.selectedLanguage === "AR" ? "right" : "center"};
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

const AboutValues = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	margin: 100px auto;
	max-width: 1200px;
`;

const AboutValue = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
`;
const AboutValueList = styled.ul`
	display: flex;
	width: 100%;
	gap: 4%;
	list-style: none;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;
const AboutValueListItems = styled.li`
	width: 96%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4%;
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
`;

const ValueIcon = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

const AboutHeaderText = styled.div`
	color: #1c1c1c;
	font-family: Manrope;
	text-align: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 114.5%; /* 22.9px */
`;

export default AboutUs;
