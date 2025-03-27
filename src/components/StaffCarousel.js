import React, { useEffect, useState } from "react";
import "../styles/components/StaffCarousel.css";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db, storage } from "../firebaseConfig"; // Ensure to import the storage config
import { getDownloadURL, ref } from "firebase/storage"; // Import necessary Firebase Storage methods
const blank = require("../assets/images/icons/blank.png"); // Placeholder image for staff members without a photo

export default function StaffCarousel() {
	const [staffMembers, setStaffMembers] = useState([]);
	const [currentStaffIndex, setCurrentStaffIndex] = useState(0);
	const [showFullBio, setShowFullBio] = useState(false);

	useEffect(() => {
		const fetchStaffMembers = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "staff_roster"));
				const staffList = await Promise.all(
					querySnapshot.docs.map(async (doc) => {
						const staff = doc.data();
						const photoUrl = staff.photoURL; // Assuming the photoURL is a gs:// URL

						if (photoUrl) {
							const storageRef = ref(storage, photoUrl); // Create a reference to the file
							try {
								// Get the downloadable HTTP URL
								const downloadUrl = await getDownloadURL(storageRef);
								staff.photoURL = downloadUrl; // Update staff object with the download URL
							} catch (error) {
								console.error("Error getting download URL:", error);
								staff.photoURL = blank; // Default image if error occurs
							}
						} else {
							staff.photoURL = blank; // Default image if no photoURL is provided
						}

						return {
							id: doc.id,
							...staff,
						};
					})
				);

				setStaffMembers(staffList);
			} catch (error) {
				console.error("Error fetching staff members:", error);
			}
		};

		fetchStaffMembers();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentStaffIndex(
				(prevIndex) => (prevIndex + 1) % staffMembers.length
			);
			setShowFullBio(false); // Reset bio view when changing staff member
		}, 10000); // Change staff member every 10 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [staffMembers]);

	if (staffMembers.length === 0) {
		return <div className="staff-carousel">Loading staff...</div>;
	}

	const currentStaff = staffMembers[currentStaffIndex];

	return (
		<div className="staff-carousel">
			<div className="staff-carousel-card">
				<img
					src={currentStaff.photoURL || blank}
					alt={currentStaff.firstName}
					className="staff-photo"
				/>
				<div className="staff-info">
					<h3 className="staff-name">
						{currentStaff.firstName} {currentStaff.lastName}
					</h3>
					{/* <p className="staff-title">{currentStaff.title}</p> */}
					<p className={`staff-bio ${showFullBio ? "full" : "truncated"}`}>
						{currentStaff.bio}
					</p>
					<Link className="staff-carousel-link" to="/Team">
						Meet the Team
					</Link>
				</div>
			</div>
		</div>
	);
}
