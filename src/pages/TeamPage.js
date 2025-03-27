import React, { useEffect, useState } from "react";
import "../styles/pages/TeamPage.css";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../firebaseConfig"; // Ensure to import the storage config
import { getDownloadURL, ref } from "firebase/storage"; // Import necessary Firebase Storage methods

export default function TeamPage() {
    const [staffMembers, setStaffMembers] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Psychiatrists"); // Default category
    const blank = require("../assets/images/icons/blank.png");

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
                            showFullBio: false, // Add showFullBio property to each staff member
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
    }, [blank]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleReadMoreClick = (id) => {
        setStaffMembers((prevStaffMembers) =>
            prevStaffMembers.map((staff) =>
                staff.id === id ? { ...staff, showFullBio: !staff.showFullBio } : staff
            )
        );
    };

    const filteredStaffMembers =
        selectedCategory === "All"
            ? staffMembers
            : staffMembers.filter((staff) => staff.title === selectedCategory);

    return (
        <div className="main-wrapper">
            <div className="main-container">
                <h1 className="main-header">Meet the Team</h1>
                <div className="team-container">
                    <div className="team-filter">
                        <h2
                            className={`team-category ${
                                selectedCategory === "Psychiatrists" ? "active" : ""
                            }`}
                            onClick={() => handleCategoryClick("Psychiatrists")}
                        >
                            Psychiatrists
                        </h2>
                        {/* <h2
                            className={`team-category ${
                                selectedCategory === "Therapists" ? "active" : ""
                            }`}
                            onClick={() => handleCategoryClick("Therapists")}
                        >
                            Therapists
                        </h2> */}
                        <h2
                            className={`team-category ${
                                selectedCategory === "Administrative Assistants" ? "active" : ""
                            }`}
                            onClick={() => handleCategoryClick("Administrative Assistants")}
                        >
                            Administrative Assistants
                        </h2>
                    </div>
                    <div className="staff-list">
                        {filteredStaffMembers.length > 0 ? (
                            filteredStaffMembers.map((staff) => (
                                <div key={staff.id} className="staff-card">
                                    <img
                                        src={staff.photoURL || blank}
                                        alt={staff.firstName}
                                        className="staff-photo"
                                    />
                                    <div className="staff-info">
                                        <h3 className="staff-name">
                                            {staff.firstName} {staff.lastName}
                                        </h3>
                                        <p className="staff-title">{staff.title}</p>
                                        <p
                                            className={`staff-bio ${
                                                staff.showFullBio ? "full" : "truncated"
                                            }`}
                                        >
                                            {staff.bio}
                                        </p>
                                        <button
                                            className="read-more"
                                            onClick={() => handleReadMoreClick(staff.id)}
                                        >
                                            {staff.showFullBio ? "Read less" : "Read more"}
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading staff members...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}