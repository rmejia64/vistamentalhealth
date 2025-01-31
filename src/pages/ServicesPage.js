import React from "react";
import "../styles/pages/ServicesPage.css";

export default function ServicesPage() {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<h1 className="services-title">Services</h1>
				<div className="services-container">
					<p className="conditions-treated">
						Our services are designed to treat a wide range of mental health
						concerns, including: <br></br>
						<br></br> Acute Stress Disorder, Adjustment Disorder, Anxiety
						Disorders, Attention Deficit Disorder (ADD), Attention Deficit
						Hyperactivity Disorder (ADHD), Bipolar Disorder, Dissociative
						Disorder, Major Depressive Disorder, Obsessive-Compulsive Disorder
						(OCD), Personality Disorders, Post-Traumatic Stress Disorder (PTSD),
						Schizoaffective Disorder, Schizophrenia, and Sleep Disorders.
						<br></br> <br></br>We also specialize in women’s mental health,
						addressing concerns such as fertility and mental health,
						Premenstrual Dysphoric Disorder (PMDD), medications during pregnancy
						or breastfeeding, "baby blues," and postpartum depression or
						psychosis. Our comprehensive care is tailored to meet your unique
						needs at every stage of life.
					</p>
					<div className="service-card">
						<h1 className="service-header">Medication Management</h1>
						<p className="service-description">
							Should you choose to see one of our psychiatrists, we can provide
							you with both medication management as well as therapy (if you
							choose). Most of our patients choose therapy along with medication
							management, but others choose one or the other. We can help you
							with coming up with an individualized treatment plan that
							incorporates the biopsychosocial model of treatment for the best
							possible outcome. Our psychiatrists are expert
							psychopharmacologists and can help with you maintaining or
							initiating treatment.
						</p>
					</div>
					<div className="service-card">
						<h1 className="service-header">Individial Therapy</h1>
						<p className="service-description">
							Individual Therapy is an opportunity for growth. It is a safe
							space that is created where one can begin to heal and grow as a
							person. Cognitive-Behavioral Therapy (CBT) is a very effective
							form of treatment that we often use, it teaches individuals how to
							identify their cognitive distortions and make the necessary
							changes moving forward. Psychodynamic psychotherapy is another
							modality of treatment that is used, this type of therapy helps
							individuals understand how the past affects current behaviors so
							that these can be changed into more helpful ways of coping.
						</p>
					</div>
					<div className="service-card">
						<h1 className="service-header">Couple's Counseling</h1>
						<p className="service-description">
							Couples counseling helps improve communication and rebuild the
							bond that you once had with your partner. It is about enabling
							each partner to be heard and to hear themselves. It is about
							providing a mirror to reflect the change and provide a direction
							that will lead to growth. It is about identifying negative
							interaction cycles and being given the guidance to make the right
							changes. It is about rekindling a sense of intimacy. We can help
							you with your goals for your relationship.
						</p>
					</div>
					<div className="service-card">
						<h1 className="service-header">Biofeedback</h1>
						<p className="service-description">
							Biofeedback is a therapeutic technique that helps you gain control
							over physiological functions like heart rate, muscle tension, and
							breathing. Using sensors to provide real-time data, it teaches you
							how to regulate your body's responses to stress and emotions.
							Biofeedback can effectively manage conditions such as chronic
							pain, anxiety, depression, migraines, and insomnia, empowering you
							to maintain balance even in stressful situations. It's a powerful
							tool for enhancing emotional and physical resilience. Contact us
							to learn how biofeedback can complement your treatment plan!
						</p>
					</div>
					<div className="service-card">
						<h1 className="service-header">EDMR</h1>
						<p className="service-description">
							EMDR (Eye Movement Desensitization and Reprocessing) is an
							evidence-based therapy that helps process and heal traumatic
							experiences or distressing memories. Guided by a trained
							therapist, it uses a structured approach to address troubling
							memories, often providing quicker results than other methods. If
							you're curious about EMDR or think it might be right for you,
							contact us to learn more!
						</p>
					</div>
					<div className="service-card">
						<h1 className="service-header">Telepsychiatry & Home Visits</h1>
						<p className="service-description">
							Telepsychiatry and home visits may be offered to some patients.
							Please inquire with our office to see if these services would fit
							your needs. Should you choose to use our telepsychiatry services,
							please click on this link to see a video on how to create a
							profile with SecureVideo.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
