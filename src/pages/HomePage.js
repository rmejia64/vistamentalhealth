import React from "react";
import Office from "../components/Office";
import "../styles/pages/HomePage.css";
import Staff from "../components/Staff";
import Reviews from "../components/Reviews";

export default function HomePage() {
	return (
		<div className="main-wrapper">
			<Office />
			<div className="main-container">
				<div className="call-to-action"></div>
				<div className="banner-card">
					<p className="banner-card-message">
						Our team of experienced therapists and psychiatrists specializes in
						creating personalized treatment plans tailored to each client’s
						unique needs, fostering growth, healing, and resilience.
					</p>
				</div>

				<div className="section-one">
					<div className="row-one">
						<div className="about-us">
							<h1 className="subheading-one">Our Vision and Mission</h1>
							<p className="paragraph-one">
								At Vista Mental Health, our vision is to provide exceptional
								mental health care to our local community. Our mission is to
								empower those in need of support by equipping them with the
								tools and strategies to better understand and heal themselves.
								We are dedicated to identifying the right corrective and
								preventative measures, tailoring every visit to the unique needs
								of each individual in the moment.
							</p>
							<h1 className="subheading-one">
								Our Commitment to Respect and Privacy
							</h1>
							<p className="paragraph-one">
								We deeply respect the dignity and individuality of every person
								we serve. All visits to our office are HIPAA-compliant, ensuring
								that your treatment remains entirely confidential. This includes
								all written, electronic, and verbal communication between you
								and your provider.
							</p>
							<h1 className="subheading-one">
								Our Approach to Personalized Care
							</h1>
							<p className="paragraph-one">
								Our core team is committed to helping you find the best
								long-term solutions for your mental health journey. If we
								believe your care would be better supported by another provider,
								we will gladly provide a referral to ensure you receive the
								treatment that aligns with your needs and goals.
							</p>
						</div>
						<Staff />
					</div>
					<Reviews />
				</div>
			</div>
		</div>
	);
}
