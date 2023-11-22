// هنا كونتنت صفحة الهوم
const contentObject = {
	header: {
		welcome: "👋Hey! We Are Dentic",
		headerText: "Your trusted partner for healthy and beautiful ",
		description:
			"Step into of vibrant smiles and exceptional dental care at [Clinic Name]. We're not just a dental clinic; we're your partners in confidence, delivering the brilliance of a captivating smile.",
		button: "Discover More..",
	},
	services: {
		service1: {
			icon: "https://Moamen112.github.io/dental/imgs/services1.svg",
			header: "Affordable Price",
			description:
				"We're here to provide affordable, high-quality dental solutions to meet your needs.",
		},
		service2: {
			icon: "https://Moamen112.github.io/dental/imgs/services2.svg",
			header: "Professional Dentist",
			description:
				"We dedicated to your oral health and well-being.",
		},
		service3: {
			icon: "https://Moamen112.github.io/dental/imgs/services3.svg",
			header: "Satisfactory Service",
			description:
				"Our goal is to provide a level of service that not only meets but exceeds your expectations.",
		},
	},
	features: {
		feature1: {
			welcome: "More About Us",
			headerText: "The Best Dental Clinic That You Can Trust",
			description:
				"When it comes to your oral health, trust is paramount. At [Clinic Name], we take pride in being the dental clinic you can unquestionably trust.",
			smallText:
				"Our unwavering commitment to excellence, a team of skilled professionals, and a track record of satisfied patients make us the best choice for all your dental needs. Experience the difference with a dental clinic that earns your trust every day.",
			featureList: {
				featureList1: {
					icon: "https://Moamen112.github.io/dental/imgs/feature1.svg",
					text: "Modern Equipment",
				},
				featureList2: {
					icon: "https://Moamen112.github.io/dental/imgs/feature2.svg",
					text: "Easy Online Appointment",
				},
				featureList3: {
					icon: "https://Moamen112.github.io/dental/imgs/feature3.svg",
					text: "Comfortable CIinic",
				},
				featureList4: {
					icon: "https://Moamen112.github.io/dental/imgs/feature4.svg",
					text: "Always Monitored",
				},
			},
			button: "Show More..",
		},
		feature2: {
			welcome: "Why Choose Us",
			headerText: "Helping Your Dental Problems",
			description:
				"Our dedicated team of dental experts is ready to address your concerns and provide tailored solutions for a healthier, happier smile. Your dental well-being is our primary focus, and we're committed to helping you achieve the best possible oral health.",
			percentages: {
				percentage1: {
					title: "Dental and Mouth Care",
					percentage: 70,
				},
				percentage2: {
					title: "Cosmetic Treatment",
					percentage: 87,
				},
			},
			services: {
				image: "https://Moamen112.github.io/dental/imgs/feature2.svg",
				header: "Don't Hesitate to Do Consultation",
				description:
					"Your dental health matters, and we encourage you not to hesitate when it comes to seeking a consultation.",
				schedule: {
					schedule1: {
						day: "Monday - Friday",
						hours: "8AM - 10PM",
					},
					schedule2: {
						day: "Monday - Friday",
						hours: "8AM - 10PM",
					},
					schedule3: {
						day: "Monday - Friday",
						hours: "8AM - 10PM",
					},
				},
				button: "Call +01234 567 890",
			},
		},
		feature3: {
			welcome: "Our Doctors",
			headerText: "Our Experienced Doctors",
			description:
				"You can trust your smile in the hands of our experienced doctors. With a wealth of knowledge and a commitment to your well-being, our dental professionals are dedicated to providing top-notch care and expertise to ensure your oral health is in the best possible hands.",
			button: "View more",

			members: {
				member1: {
					name: "Sara Ehab",
					description: "cardiology & neurology",
				},
				member2: {
					name: "Amr Ahmed",
					description: "cardiology & neurology",
				},
			},
		},
	},
	counters: {
		counter1: {
			image: "https://Moamen112.github.io/dental/imgs/Tooth-white.svg",
			number: "1200",
			name: "Happy Client",
		},
		counter2: {
			image: "https://Moamen112.github.io/dental/imgs/clinic-1.svg",
			number: "15",
			name: "Year Experience",
		},
		counter3: {
			image: "https://Moamen112.github.io/dental/imgs/dentist-white.svg",
			number: "70",
			name: "Doctor & Staff",
		},
		counter4: {
			image: "https://Moamen112.github.io/dental/imgs/scedule-white.svg",
			number: "340",
			name: "Online Appointment",
		},
	},
	offerings: {
		text: {
			welcome: "Our Services",
			header: "Services",
			description:
				"We offer a wide range of services tailored to meet your unique dental needs. Our commitment to your oral health is unwavering, and we're here to provide the quality services you deserve.",
		},
		boxes: {
			box1: {
				image: "https://Moamen112.github.io/dental/imgs/offer2.svg",
				title: "Teeth Checkup",
				description:
					"Ensure your smile stays healthy with our thorough teeth checkup.",
			},
			box2: {
				image: "https://Moamen112.github.io/dental/imgs/offer2.svg",
				title: "Teeth Whitening",
				description:
					"Brighten your smile with our professional teeth whitening services.",
			},
			box3: {
				image: "https://Moamen112.github.io/dental/imgs/offer3.svg",
				title: "Dental Checkup",
				description:
					"Transform your smile with precision and care through dental brace.",
			},
			box4: {
				image: "https://Moamen112.github.io/dental/imgs/offer4.svg",
				title: "Teeth Implants",
				description:
					"Transform your smile with our expert teeth implants.",
			},
			box5: {
				image: "https://Moamen112.github.io/dental/imgs/offer5.svg",
				title: "Dental Filling",
				description:
					"Restore your smile's health and beauty with our expert dental filling services.",
			},
			box6: {
				image: "https://Moamen112.github.io/dental/imgs/offer6.svg",
				title: "Cosmetic",
				description:
					"Elevate your smile with our cosmetic dentistry services.",
			},
		},
	},
	reviews: {
		text: {
			welcome: "Our Reviews",
			header: "What Our Patients Say",
			description:
				"Read what our satisfied patients have to say about us.",
		},
		boxes: {
			box1: {
				image: "https://Moamen112.github.io/dental/imgs/review1.svg",
				name: "Muhammed Kamal",
				icon: "https://Moamen112.github.io/dental/imgs/review.svg",
				description:
					"I can't thank [Clinic Name] enough for their exceptional care. The team is friendly, and the results of my treatment exceeded my expectations.",
			},
			box2: {
				image: "https://Moamen112.github.io/dental/imgs/review2.svg",
				name: "Nada Abdelnasser",
				icon: "https://Moamen112.github.io/dental/imgs/review.svg",
				description:
					"I was nervous about my dental procedure, but [Clinic Name] made me feel comfortable throughout the process.",
			},
			box3: {
				image: "https://Moamen112.github.io/dental/imgs/review3.svg",
				name: "Ahmed Kamal",
				icon: "https://Moamen112.github.io/dental/imgs/review.svg",
				description:
					"I've been a patient at [Clinic Name] for years, and the consistent quality of care is what keeps me coming back.",
			},
		},
	},
	contact: {
		left: {
			welcome: "Contact Us",
			text: "Your trusted partner for healthy and beautiful ",
			description:
				"Join our family of happy clients at [Clinic Name] and experience exceptional dental care that will leave you smiling.",
			button: "Show More..",
		},
		right: {
			image: "https://Moamen112.github.io/dental/imgs/contact.svg",
		},
	},
};

export default contentObject;
