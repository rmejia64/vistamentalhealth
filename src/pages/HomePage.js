import React from "react";
import "../styles/pages/HomePage.css";
import OfficeCarousel from "../components/OfficeCarousel";
import StaffCarousel from "../components/StaffCarousel";
import ReviewsCarousel from "../components/ReviewsCarousel";
import down_arrows from "../assets/images/icons/angles-down-solid.svg";

export default function HomePage() {
	return (
		<div className="main-wrapper">
			<OfficeCarousel />
			<div className="main-container">
				<div className="row-one">
					<div className="call-to-action">
						<h1 id="blue" className="heading">
							Your Mental Health Matters.
						</h1>
						<h2 className="subheading">
							Compassionate Care, Support, and Guidance for Every Step of Your
							Journey.
						</h2>
						<p className="paragraph">Call us to schedule an appointment</p>
						<a alt="Call Vista Mental Health" href="tel:+13238136218">
							<button className="call-button">Call +1 (323) 813-6218</button>
						</a>
					</div>
					<img
						className="down-arrows"
						alt="swipe down indicator"
						src={down_arrows}
					></img>
					<div className="banner-card">
						<p className="paragraph">
							Our team of experienced therapists and psychiatrists specializes
							in creating personalized treatment plans tailored to each client's
							unique needs, fostering growth, healing, and resilience.
						</p>
					</div>
				</div>
				<div className="row-two">
					<div className="about-us">
						<h1 className="subheading">Our Vision and Mission</h1>
						<p className="paragraph">
							At Vista Mental Health, our vision is to provide exceptional
							mental health care to our local community. Our mission is to
							empower those in need of support by equipping them with the tools
							and strategies to better understand and heal themselves. We are
							dedicated to identifying the right corrective and preventative
							measures, tailoring every visit to the unique needs of each
							individual in the moment.
						</p>
						<h1 className="subheading">
							Our Commitment to Respect and Privacy
						</h1>
						<p className="paragraph">
							We deeply respect the dignity and individuality of every person we
							serve. All visits to our office are HIPAA-compliant, ensuring that
							your treatment remains entirely confidential. This includes all
							written, electronic, and verbal communication between you and your
							provider.
						</p>
						<h1 className="subheading">Our Approach to Personalized Care</h1>
						<p className="paragraph">
							Our core team is committed to helping you find the best long-term
							solutions for your mental health journey. If we believe your care
							would be better supported by another provider, we will gladly
							provide a referral to ensure you receive the treatment that aligns
							with your needs and goals.
						</p>
					</div>
					<StaffCarousel />
				</div>
				<ReviewsCarousel />
			</div>
		</div>
	);
}
