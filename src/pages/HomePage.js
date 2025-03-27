import React from "react";
import "../styles/pages/HomePage.css";
import OfficeCarousel from "../components/OfficeCarousel";
import StaffCarousel from "../components/StaffCarousel";
import ReviewsCarousel from "../components/ReviewsCarousel";

export default function HomePage() {
	return (
		<div className="main-wrapper">
			<OfficeCarousel />
			<div className="main-container">
				<div className="call-to-action">
					<h1 id="blue" className="heading">
						Your Mental Health Matters.
					</h1>
					<h2 id="home-subheading" className="subheading">
						Compassionate Care, Support, and Guidance for Every Step of Your
						Journey.
					</h2>
					<a alt="Call Vista Mental Health" href="tel:+13238136218">
						<button className="call-button">Call (323) 813-6218</button>
					</a>
				</div>
				<div className="center-content">
					<div className="about-container">
						<p className="banner-card">
							Our team of experienced therapists and psychiatrists specializes
							in creating personalized treatment plans tailored to each client's
							unique needs, fostering growth, healing, and resilience.
						</p>
						<div className="about-us">
							<h1 className="subheading">Our Vision and Mission</h1>
							<p className="paragraph">
								At Vista Mental Health, our vision is to provide exceptional
								mental health care. Our mission is to empower those in need of
								support by equipping them with the tools and strategies to
								better understand and heal themselves. We are dedicated to
								tailoring every visit to the unique needs of each individual.
							</p>
							<h1 className="subheading">Our Approach to Personalized Care</h1>
							<p className="paragraph">
								Our core team is committed to helping you find the best
								long-term solutions for your mental health journey.
							</p>
						</div>
					</div>
					<StaffCarousel />
				</div>
				<ReviewsCarousel />
			</div>
		</div>
	);
}
