import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import contentObject from "../content/contentObject";
import translatedContent from "../content/translatedContent ";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = (props) => {
	const [isMobile, setIsMobile] = useState(false);

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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				// You can adjust the threshold
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		// Initial check
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		return () => {
			// Clean up the event listener
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const {
		header,
		services,
		features,
		counters,
		offerings,
		reviews,
		contact,
	} = contentObject;

	const {
		ARheader,
		ARservices,
		ARfeatures,
		ARcounters,
		ARofferings,
		ARreviews,
		ARcontact,
	} = translatedContent;

	return (
		<HomeContainer selectedLanguage={props.selectedLanguage}>
			<Header>
				{/* Left Section */}
				<LeftSection
					selectedLanguage={props.selectedLanguage}
					data-aos="fade-right">
					<SmallText
						className="welcome"
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARheader.welcome
							: header.welcome}
					</SmallText>
					<HeaderText>
						{props.selectedLanguage === "AR"
							? ARheader.headerText
							: header.headerText}
						<span>
							{props.selectedLanguage === "AR"
								? "وجميلة...."
								: "Smiles..."}
						</span>
					</HeaderText>
					<SmallText selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARheader.description
							: header.description}
					</SmallText>
					<Button>
						{props.selectedLanguage === "AR"
							? ARheader.button
							: header.button}
					</Button>
				</LeftSection>

				{/* Right Section */}
				<RightSection data-aos="fade-left">
					<HeaderImage
						src={
							"/imgs/header.svg"
						}
						alt="Header Image"
					/>
				</RightSection>
			</Header>
			<Services>
				<Service data-aos="fade-up">
					<ServiceIcon>
						{/* Add your icon for the first service */}
						<img
							src="/imgs/services1.svg"
							alt="Service 1"
						/>
					</ServiceIcon>
					<ServiceHeader>
						{props.selectedLanguage === "AR"
							? ARservices.service1.header
							: services.service1.header}
					</ServiceHeader>
					<ServiceDescription
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARservices.service1.description
							: services.service1.description}
					</ServiceDescription>
				</Service>
				<Service
					data-aos="fade-up"
					data-aos-delay="100">
					<ServiceIcon>
						{/* Add your icon for the second service */}
						<img
							src="/imgs/services2.svg"
							alt="Service 2"
						/>
					</ServiceIcon>
					<ServiceHeader>
						{props.selectedLanguage === "AR"
							? ARservices.service2.header
							: services.service2.header}
					</ServiceHeader>
					<ServiceDescription
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARservices.service2.description
							: services.service2.description}
					</ServiceDescription>
				</Service>
				<Service
					data-aos="fade-up"
					data-aos-delay="200">
					<ServiceIcon>
						{/* Add your icon for the third service */}
						<img
							src="/imgs/services3.svg"
							alt="Service 3"
						/>
					</ServiceIcon>
					<ServiceHeader>
						{props.selectedLanguage === "AR"
							? ARservices.service3.header
							: services.service3.header}
					</ServiceHeader>
					<ServiceDescription
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARservices.service3.description
							: services.service3.description}
					</ServiceDescription>
				</Service>
			</Services>
			<Features>
				<Feature>
					<FeatureLeft
						className="hidden"
						data-aos="fade-up">
						<FeatureImage
							src="/imgs/feature1.svg"
							alt="Feature 1"
						/>
					</FeatureLeft>
					<FeatureRight data-aos="fade-up">
						<SmallText
							className="welcome responsiveText"
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature1.welcome
								: features.feature1.welcome}
						</SmallText>
						<HeaderText>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature1.headerText
								: features.feature1.headerText}
						</HeaderText>
						<SmallText selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature1.description
								: features.feature1.description}
						</SmallText>

						<SmallText>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature1.smallText
								: features.feature1.smallText}
						</SmallText>
						<FeatureList>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature1.featureList
											.featureList1.text
									: features.feature1.featureList.featureList1
											.text}
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature1.featureList
											.featureList2.text
									: features.feature1.featureList.featureList2
											.text}
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature1.featureList
											.featureList3.text
									: features.feature1.featureList.featureList3
											.text}
							</CheckItem>
							<CheckItem>
								<CheckCircleIcon
									sx={{ fontSize: "16px", color: "#3d75c3" }}
								/>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature1.featureList
											.featureList4.text
									: features.feature1.featureList.featureList4
											.text}
							</CheckItem>
						</FeatureList>
						<FeatureButton>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature1.button
								: features.feature1.button}
						</FeatureButton>
					</FeatureRight>
				</Feature>
				<Feature>
					<FeatureRightPercentage data-aos="fade-up">
						<SmallText className="welcome">
							{props.selectedLanguage === "AR"
								? ARfeatures.feature2.welcome
								: features.feature2.welcome}
						</SmallText>
						<HeaderText>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature2.headerText
								: features.feature2.headerText}
						</HeaderText>
						<SmallText selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARfeatures.feature2.description
								: features.feature2.description}
						</SmallText>

						<PercentageBarContainer>
							<PercentageTitle>
								<Title>
									{props.selectedLanguage === "AR"
										? ARfeatures.feature2.percentages
												.percentage1.title
										: features.feature2.percentages
												.percentage1.title}
								</Title>
								<Percentage>
									{props.selectedLanguage === "AR"
										? ARfeatures.feature2.percentages
												.percentage1.percentage
										: features.feature2.percentages
												.percentage1.percentage}
									%
								</Percentage>
							</PercentageTitle>
							<PercentageBar>
								<FilledPercentage
									percentage={
										props.selectedLanguage === "AR"
											? ARfeatures.feature2.percentages
													.percentage1.percentage
											: features.feature2.percentages
													.percentage1.percentage
									}></FilledPercentage>
							</PercentageBar>
						</PercentageBarContainer>
						<PercentageBarContainer>
							<PercentageTitle>
								<Title>
									{props.selectedLanguage === "AR"
										? ARfeatures.feature2.percentages
												.percentage2.title
										: features.feature2.percentages
												.percentage2.title}
								</Title>
								<Percentage>
									{props.selectedLanguage === "AR"
										? ARfeatures.feature2.percentages
												.percentage2.percentage
										: features.feature2.percentages
												.percentage2.percentage}
									%
								</Percentage>
							</PercentageTitle>
							<PercentageBar>
								<FilledPercentage
									percentage={
										props.selectedLanguage === "AR"
											? ARfeatures.feature2.percentages
													.percentage2.percentage
											: features.feature2.percentages
													.percentage2.percentage
									}></FilledPercentage>
							</PercentageBar>
						</PercentageBarContainer>
					</FeatureRightPercentage>
					<FeatureServices
						data-aos="fade-up"
						data-aos-delay="100">
						<FeatureImageService
							src="/imgs/feature2.svg"
							alt="Feature 1"
						/>
						<FeatureService
							data-aos={
								isMobile
									? "fade-up"
									: props.selectedLanguage === "AR"
									? "fade-right"
									: "fade-left"
							}
							data-aos-delay="150"
							selectedLanguage={props.selectedLanguage}>
							<HeaderText className="feature-header">
								{props.selectedLanguage === "AR"
									? ARfeatures.feature2.services.header
									: features.feature2.services.header}
							</HeaderText>
							<SmallText
								className="feature-text"
								selectedLanguage={props.selectedLanguage}>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature2.services.description
									: features.feature2.services.description}
							</SmallText>
							<FeatureServiceList>
								<FeatureServiceListItem>
									<h5>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule1.day
											: features.feature2.services
													.schedule.schedule1.day}
									</h5>
									<p>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule1.hours
											: features.feature2.services
													.schedule.schedule1.hours}
									</p>
								</FeatureServiceListItem>
								<FeatureServiceListItem>
									<h5>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule2.day
											: features.feature2.services
													.schedule.schedule2.day}
									</h5>
									<p>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule2.hours
											: features.feature2.services
													.schedule.schedule2.hours}
									</p>
								</FeatureServiceListItem>
								<FeatureServiceListItem>
									<h5>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule3.day
											: features.feature2.services
													.schedule.schedule3.day}
									</h5>
									<p>
										{props.selectedLanguage === "AR"
											? ARfeatures.feature2.services
													.schedule.schedule3.hours
											: features.feature2.services
													.schedule.schedule3.hours}
									</p>
								</FeatureServiceListItem>
							</FeatureServiceList>
							<FeatureServiceButton>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature2.services.button
									: features.feature2.services.button}
							</FeatureServiceButton>
						</FeatureService>
					</FeatureServices>
				</Feature>
				<Feature>
					<FeatureMembers>
						<FeatureMember
							data-aos="fade-up"
							data-aos-delay="100">
							<div className="member-img1"></div>

							<h3>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.members.member1.name
									: features.feature3.members.member1.name}
							</h3>
							<p className="member">
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.members.member1
											.description
									: features.feature3.members.member1
											.description}
							</p>
						</FeatureMember>
						<FeatureMember
							data-aos="fade-up"
							data-aos-delay="150">
							<div className="member-img2"></div>
							<h3>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.members.member2.name
									: features.feature3.members.member2.name}
							</h3>
							<p className="member">
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.members.member2
											.description
									: features.feature3.members.member2
											.description}
							</p>
						</FeatureMember>
						<FeatureMembersDescription
							data-aos="fade-up"
							data-aos-delay="200">
							<SmallText
								className="welcome"
								selectedLanguage={props.selectedLanguage}>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.welcome
									: features.feature3.welcome}
							</SmallText>
							<HeaderText>
								{" "}
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.headerText
									: features.feature3.headerText}
							</HeaderText>
							<SmallText
								selectedLanguage={props.selectedLanguage}>
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.description
									: features.feature3.description}
							</SmallText>
							<Button>
								{" "}
								{props.selectedLanguage === "AR"
									? ARfeatures.feature3.button
									: features.feature3.button}{" "}
							</Button>
						</FeatureMembersDescription>
					</FeatureMembers>
				</Feature>
			</Features>
			<CounterSectionContainer>
				<Counters>
					<Counter
						data-aos="fade-up"
						data-aos-delay="0">
						<CounterImage
							src="/imgs/Tooth-white.svg"
							alt="Counter 1"
						/>
						<CounterDesc>
							<CounterNumber
								selectedLanguage={props.selectedLanguage}>
								{counters.counter1.number}
								<span>+</span>
							</CounterNumber>
							<CounterName>
								{props.selectedLanguage === "AR"
									? ARcounters.counter1.name
									: counters.counter1.name}
							</CounterName>
						</CounterDesc>
					</Counter>
					<Counter
						data-aos="fade-up"
						data-aos-delay="50">
						<CounterImage
							src={
								"/imgs/clinic-1.svg"
							}
							alt="Counter 2"
						/>
						<CounterDesc>
							<CounterNumber
								selectedLanguage={props.selectedLanguage}>
								{counters.counter2.number}
								<span>+</span>
							</CounterNumber>
							<CounterName
								selectedLanguage={props.selectedLanguage}>
								{props.selectedLanguage === "AR"
									? ARcounters.counter2.name
									: counters.counter2.name}
							</CounterName>
						</CounterDesc>
					</Counter>
					<Counter
						data-aos="fade-up"
						data-aos-delay="100">
						<CounterImage
							src={
								"/imgs/dentist-white.svg"
							}
							alt="Counter 3"
						/>
						<CounterDesc>
							<CounterNumber
								selectedLanguage={props.selectedLanguage}>
								{counters.counter3.number}
								<span>+</span>
							</CounterNumber>
							<CounterName>
								{props.selectedLanguage === "AR"
									? ARcounters.counter3.name
									: counters.counter3.name}
							</CounterName>
						</CounterDesc>
					</Counter>
					<Counter
						data-aos="fade-up"
						data-aos-delay="150">
						<CounterImage
							src={
								"/imgs/scedule-white.svg"
							}
							alt="Counter 4"
						/>
						<CounterDesc>
							<CounterNumber
								selectedLanguage={props.selectedLanguage}>
								{counters.counter4.number}
								<span>+</span>
							</CounterNumber>
							<CounterName>
								{props.selectedLanguage === "AR"
									? ARcounters.counter4.name
									: counters.counter4.name}
							</CounterName>
						</CounterDesc>
					</Counter>
				</Counters>
			</CounterSectionContainer>
			<OfferingSection>
				{/* First Div (Centered Text) */}
				<OfferingText
					data-aos="fade-up"
					data-aos-delay="100">
					<SmallText
						className="welcome"
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARofferings.text.welcome
							: offerings.text.welcome}
					</SmallText>
					<HeaderText>
						{props.selectedLanguage === "AR"
							? ARofferings.text.header
							: offerings.text.header}
					</HeaderText>
					<SmallText
						style={{ width: "80%" }}
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARofferings.text.description
							: offerings.text.description}
					</SmallText>
				</OfferingText>

				{/* Second Div (Grid of Boxes) */}
				<OfferingBoxes>
					{/* First Row */}
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="100">
						<OfferingImage
							src="/imgs/offer2.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box1.title
								: offerings.boxes.box1.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box1.description
								: offerings.boxes.box1.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="300">
						<OfferingImage
							src="/imgs/offer2.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box2.title
								: offerings.boxes.box2.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box2.description
								: offerings.boxes.box2.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="500">
						<OfferingImage
							src="/imgs/offer3.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box3.title
								: offerings.boxes.box3.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box3.description
								: offerings.boxes.box3.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
					{/* Second Row */}
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="100">
						<OfferingImage
							src="/imgs/offer4.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box4.title
								: offerings.boxes.box4.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box4.description
								: offerings.boxes.box4.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="300">
						<OfferingImage
							src="/imgs/offer5.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box5.title
								: offerings.boxes.box5.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box5.description
								: offerings.boxes.box5.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
					<OfferingBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="500">
						<OfferingImage
							src="/imgs/offer6.svg"
							alt="Offering 2"
						/>
						<h3>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box6.title
								: offerings.boxes.box6.title}
						</h3>
						<OfferingDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARofferings.boxes.box6.description
								: offerings.boxes.box6.description}
						</OfferingDescription>
						<OfferingLearn
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? "اقرأ المزيد"
								: "Learn More"}
							<div className="forward">
								{props.selectedLanguage === "AR" ? (
									<ArrowBackIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								) : (
									<ArrowForwardIcon
										sx={{ color: "#fff", fontSize: "12px" }}
									/>
								)}
							</div>
						</OfferingLearn>
					</OfferingBox>
				</OfferingBoxes>
			</OfferingSection>
			<ReviewsContainer>
				{/* First Div (Centered Text) */}
				<ReviewsText
					data-aos="fade-up"
					data-aos-delay="100">
					<SmallText
						className="welcome"
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARreviews.text.welcome
							: reviews.text.welcome}
					</SmallText>
					<HeaderText>
						{props.selectedLanguage === "AR"
							? ARreviews.text.header
							: reviews.text.header}
					</HeaderText>
					<SmallText
						style={{ width: "80%" }}
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARreviews.text.description
							: reviews.text.description}
					</SmallText>
				</ReviewsText>

				{/* Second Div (Single Row of Review Boxes) */}
				<ReviewsBoxes>
					{/* Review Box 1 */}
					<ReviewBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="100">
						<ReviewImage
							src="/imgs/review1.svg"
							alt="Review 1"
						/>
						<ReviewName selectedLanguage={props.selectedLanguage}>
							<h3>
								{props.selectedLanguage === "AR"
									? ARreviews.boxes.box1.name
									: reviews.boxes.box1.name}
							</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARreviews.boxes.box1.description
								: reviews.boxes.box1.description}
						</ReviewDescription>
					</ReviewBox>

					{/* Review Box 2 */}
					<ReviewBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="300">
						<ReviewImage
							src="/imgs/review2.svg"
							alt="Review 2"
						/>
						<ReviewName selectedLanguage={props.selectedLanguage}>
							<h3>
								{props.selectedLanguage === "AR"
									? ARreviews.boxes.box2.name
									: reviews.boxes.box2.name}
							</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARreviews.boxes.box2.description
								: reviews.boxes.box2.description}
						</ReviewDescription>
					</ReviewBox>

					{/* Review Box 3 */}
					<ReviewBox
						selectedLanguage={props.selectedLanguage}
						data-aos="fade-up"
						data-aos-delay="500">
						<ReviewImage
							src="/imgs/review3.svg"
							alt="Review 3"
						/>
						<ReviewName selectedLanguage={props.selectedLanguage}>
							<h3>
								{props.selectedLanguage === "AR"
									? ARreviews.boxes.box3.name
									: reviews.boxes.box3.name}
							</h3>
							<img
								src="/imgs/review.svg"
								alt="icon"
							/>
						</ReviewName>
						<ReviewDescription
							selectedLanguage={props.selectedLanguage}>
							{props.selectedLanguage === "AR"
								? ARreviews.boxes.box3.description
								: reviews.boxes.box3.description}
						</ReviewDescription>
					</ReviewBox>
				</ReviewsBoxes>
			</ReviewsContainer>
			<ContactContainer selectedLanguage={props.selectedLanguage}>
				<ContactLeftSection selectedLanguage={props.selectedLanguage}>
					<SmallText
						className="welcome"
						selectedLanguage={props.selectedLanguage}>
						{props.selectedLanguage === "AR"
							? ARcontact.left.welcome
							: contact.left.welcome}
					</SmallText>
					<ContactText>
						{props.selectedLanguage === "AR"
							? ARcontact.left.text
							: contact.left.text}
						<span>
							{props.selectedLanguage === "AR"
								? "وجميلة...."
								: "Smiles..."}
						</span>
					</ContactText>
					<SmallText>
						{props.selectedLanguage === "AR"
							? ARcontact.left.description
							: contact.left.description}
					</SmallText>
					<Button>
						{props.selectedLanguage === "AR"
							? ARcontact.left.button
							: contact.left.button}
					</Button>
				</ContactLeftSection>

				{/* Right Section */}
				<ContactRightSection
					className="hidden"
					data-aos="fade-right"
					data-aos-delay="100">
					<ContactImage
						src="/imgs/contact.svg"
						alt="Header Image"
					/>
				</ContactRightSection>
			</ContactContainer>
		</HomeContainer>
	);
};

// Styled components for the header and its elements
const HomeContainer = styled.div`
	/* Add your container styles here */
	padding-top: 80px;
	box-sizing: border-box;
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
	justify-content: space-between;
	align-items: center;
	height: 540px;
	background-color: #fff;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 60px auto;
	padding: ${(props) =>
		props.selectedLanguage === "AR" ? `0 8% 0 0` : `0 0 0 8%`};
	justify-content: center;
	width: 35%;
	gap: 20px;

	@media (max-width: 1200px) {
		padding: 0;
	}

	@media (max-width: 768px) {
		width: 80%;
		align-items: center;
		padding-top: 0px;
		justify-content: center;
		text-align: center;
		gap: 10px;
	}
`;

const RightSection = styled.div`
	/* Add styling for the right section, like width and padding */
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	order: 1;

	@media (max-width: 768px) {
		width: 100%;
		height: 270px;
	}
`;

const SmallText = styled.div`
	font-size: ${(props) =>
		props.selectedLanguage === "AR" ? "18px" : "14px"};
	color: #333;
	padding: 10px 5px;
`;

const HeaderText = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #333;

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

const Button = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 10px 20px;
	}
`;

const HeaderImage = styled.img`
	/* Add styling for the header image, like width and height */
	width: 65%;
	height: 100%;

	@media (max-width: 1200px) {
		width: 80%;
	}
`;

const Services = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 1200px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 5px;
		padding-top: 150px;
	}
`;

const Service = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: #fff;
	text-align: center;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex: none;
	}
`;

const ServiceIcon = styled.div`
	margin-bottom: 5px;

	img {
		max-width: 100px;
	}
`;

const ServiceHeader = styled.h2`
	font-size: 24px;
	margin: 5px 0;
	color: #333;
`;

const ServiceDescription = styled.p`
	font-size: ${(props) =>
		props.selectedLanguage === "AR" ? "18px" : "14px"};
	text-align: center;
	width: 80%;
	color: #777;
`;

const Features = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 60px auto;
	max-width: 1200px;
	flex-direction: column;
	gap: 40px;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 20px;
	}
`;

const Feature = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	padding: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const FeatureLeft = styled.div`
	width: 40%;
`;

const FeatureServices = styled.div`
	width: 60%;
	position: relative;
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding-top: 80px;
	}
`;

const FeatureImage = styled.img`
	width: 100%;

	@media (max-width: 768px) {
		position: absolute;
	}
`;

const FeatureImageService = styled.img`
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const FeatureService = styled.div`
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
	border-radius: 4px;
	background: #fff;
	padding: 35px;
	flex-direction: column;
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-shrink: 0;
	position: absolute;
	${(props) => (props.selectedLanguage === "AR" ? "left: 0;" : "right: 0;")}
	width: 320.86px;
	height: 400.56px;

	.feature-header {
		font-size: 24px;
	}

	.feature-text {
		color: #636571;
		width: 80%;
	}

	@media (max-width: 768px) {
		bottom: -25%;
		padding: 0 20px;
		width: 100%;
		left: -23px;
	}
`;

const FeatureServiceList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	padding: 0;
	align-items: center;
	gap: 10px;

	@media (max-width: 768px) {
		gap: 5px;
	}
`;

const FeatureServiceListItem = styled.li`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	p {
		color: #636571;
	}

	@media (max-width: 768px) {
	}
`;

const FeatureServiceButton = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;
`;

const FeatureRight = styled.div`
	width: 50%;

	@media (max-width: 768px) {
		width: 80%;
		gap: 15px;
		margin-top: 20px;

		.responsiveText {
			width: 40%;
			margin: 0px 0 20px 0;
		}
	}
`;

const FeatureRightPercentage = styled.div`
	width: 35%;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`;

const FeatureList = styled.ul`
	list-style: none;
	padding: 10px 5px;
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

const CheckItem = styled.li`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	width: 45%;
	font-size: 16px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const FeatureButton = styled.button`
	background-color: #3d75c3;
	color: #fff;
	border: none;
	padding: 20px 30px;
	border-radius: 5px;
	font-size: 12px;
	cursor: pointer;

	@media (max-width: 768px) {
		padding: 10px 20px;
	}
`;

const PercentageBarContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex-direction: column;
	padding-top: 20px;
`;

const PercentageTitle = styled.div`
	display: flex;
	justify-content: space-between;

	width: 95%;
`;

const Title = styled.h3`
	font-size: 18px;
	margin: 0;
`;

const Percentage = styled.span`
	font-size: 16px;
	color: #000;
`;

const PercentageBar = styled.div`
	width: 100%;
	background-color: #f1f8ff;
	height: 10px;
	border-radius: 10px;
	position: relative;
	margin-left: 10px;
`;

const FilledPercentage = styled.div`
	width: ${(props) => props.percentage}%;
	background-color: #3d75c3;
	height: 100%;
	border-radius: 10px;
`;

const FeatureMembers = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	.member-img1 {
		width: 100%;
		height: 300px;
		background-size: cover;
		background-image: url("/imgs/member1.svg");
	}

	.member-img2 {
		width: 100%;
		height: 300px;
		background-size: cover;
		background-image: url("/imgs/member2.svg");
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding-top: 35%;
		gap: 20px;
		align-items: center;
	}
`;

const FeatureMember = styled.div`
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 0 0 30px 0;
	width: 30%;

	img {
		width: 100%;
	}

	h3 {
		padding: 0;
	}

	p {
		color: rgba(0, 0, 0, 0.5);
		text-transform: capitalize;
	}

	@media (max-width: 768px) {
		order: 2;
		width: 80%;
		padding: 20px 0;
	}
`;
const FeatureMembersDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 35%;
	gap: 30px;

	@media (max-width: 1200px) {
	}

	@media (max-width: 768px) {
		width: 80%;
		align-items: center;
		padding-top: 30px;
		text-align: center;
		gap: 10px;
		order: 1;
	}
`;

const CounterSectionContainer = styled.div`
	background-color: #f1f8ff; /* Set the background color for the full-width section */
	margin: 60px 0; /* Add some padding as needed */
	padding: 20px 0;
`;

const Counters = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1200px;
	background: #f1f8ff;
	padding: 0 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

const Counter = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	padding: 20px;
	width: 23%;
	gap: 10px;

	@media (max-width: 768px) {
		width: 80%;
		align-items: center;
		justify-content: center;
	}
`;

const CounterDesc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	@media (max-width: 768px) {
		width: 40%;
	}
`;

const CounterImage = styled.img`
	width: 80px;
	height: 80px;
	background-color: #3d75c3;
`;

const CounterNumber = styled.div`
	font-size: 24px;

	span {
		color: #3d75c3;
		font-size: 40px;
		padding: ${(props) =>
			props.selectedLanguage === "AR" ? "0 5px 0 0px" : "0 0 0 5px"};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const CounterName = styled.div`
	font-size: 16px;
	color: #636571;
	margin-top: 10px;
	width: 100%;
`;

// Styled components for the Offering section
const OfferingSection = styled.div`
	background-color: #fff;
	margin: 60px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
	text-align: center;
`;

const OfferingText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const OfferingBoxes = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 77%;
	gap: 1%;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
		width: 70%;
	}
`;

const OfferingBox = styled.div`
	width: 32%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	height: 400px;
	position: relative;
	margin: 10px 0;
	padding: 0;
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);

	h3 {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		text-align: ${(props) =>
			props.selectedLanguage === "AR" ? "right" : "left"};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const OfferingImage = styled.img`
	width: 110%;
	height: 60%;
	object-fit: cover;
`;

const OfferingDescription = styled.p`
	font-size: 16px;
	box-sizing: border-box;
	color: #636571;
	padding: 0px 10px;
	width: 100%;
	text-align: ${(props) =>
		props.selectedLanguage === "AR" ? "right" : "left"};
`;

const OfferingLearn = styled.div`
	position: absolute;
	bottom: 10px;
	${(props) => (props.selectedLanguage ? "left: 10px;" : " right: 10px;")}
	color: #3d75c3;
	text-align: center;
	font-family: Manrope;
	font-size: 15px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px; /* 160% */
	display: flex;
	gap: 5px;

	.forward {
		background-color: #3d75c3;
		padding: 5px;
		font-size: 10px;
		border-radius: 50%;
		display: flex;
		align-items: center;
	}
`;

const ReviewsContainer = styled.div`
	background-color: #fff;
	margin: 60px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 0;
	text-align: center;
`;

const ReviewsText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 20px;
`;

const ReviewsBoxes = styled.div`
	display: flex;
	justify-content: space-between;
	width: 77%;
	gap: 1%;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 40px;
		width: 70%;
	}
`;

const ReviewBox = styled.div`
	width: 32%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	text-align: center;
	box-shadow: 2px 4px 20px 0px rgba(0, 60, 179, 0.13);

	h3 {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		text-align: ${(props) =>
			props.selectedLanguage === "AR" ? "right" : "left"};
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const ReviewName = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 10px 0;

	img {
		padding: ${(props) =>
			props.selectedLanguage === "AR" ? "0 0px 0 20px" : "0 20px 0 0"};
	}
`;

const ReviewImage = styled.img`
	width: 100%;
	height: 60%;
	object-fit: cover;
`;

const ReviewDescription = styled.p`
	font-size: 16px;
	box-sizing: border-box;
	color: #636571;
	padding: 0px 10px;
	width: 100%;
	line-height: ${(props) => (props.selectedLanguage === "AR" ? "30px" : "")};
	text-align: ${(props) =>
		props.selectedLanguage === "AR" ? "right" : "left"};
`;

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 60px auto;
	height: 540px;
	background-image: url("/imgs/contactbackground.svg");
	background-size: cover;
	${(props) =>
		props.selectedLanguage === "AR" ? "transform: scaleX(-1);" : ""}

	background-color: #f1f8ff;
	@media (max-width: 768px) {
		height: auto;
		flex-direction: column;
	}
`;

const ContactLeftSection = styled.div`
	display: flex;
	${(props) =>
		props.selectedLanguage === "AR" ? "transform: scaleX(-1);" : ""}
	flex-direction: column;
	align-items: flex-start;
	margin: 60px auto;
	padding: ${(props) =>
		props.selectedLanguage === "AR" ? "0 8% 0 0" : "0 0 0 8%"};
	justify-content: center;
	width: 35%;
	gap: 20px;
	${(props) => (props.selectedLanguage === "AR" ? "order: 1;" : "")}

	@media (max-width: 1200px) {
		padding: ${(props) =>
			(props.selectedLanguage = "AR" ? "0 10% 0 0" : "0 0px 0 10%")};
	}

	@media (max-width: 768px) {
		width: 80%;
		padding: 0;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

const ContactRightSection = styled.div`
	/* Add styling for the right section, like width and padding */
	width: 50%;
	${(props) =>
		props.selectedLanguage === "AR" ? "transform: scaleX(-1);" : ""}
	height: 100%;
	display: flex;
	justify-content: center;
	${(props) => (props.selectedLanguage === "AR" ? "order: 0;" : "")}

	@media (max-width: 768px) {
		width: 100%;
		padding-left: 30px;
	}
`;

const ContactText = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #333;

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

const ContactImage = styled.img`
	/* Add styling for the header image, like width and height */
	width: 65%;
	height: 100%;

	@media (max-width: 1200px) {
		width: 70%;
	}
`;

export default Home;
