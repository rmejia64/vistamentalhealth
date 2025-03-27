import React from "react";
import "../styles/pages/BlogPage.css";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Ensure to import the storage config
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ReactMarkdown from "react-markdown"; // If using Markdown

export default function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "blog_posts"));
            const postsArray = await Promise.all(
                querySnapshot.docs.map(async (doc) => {
                    const data = doc.data();
                    if (data.images && data.images.length > 0) {
                        const storage = getStorage();
                        const imageUrls = await Promise.all(
                            data.images.map(async (imagePath) => {
                                if (typeof imagePath === 'string') {
                                    const storageRef = ref(storage, imagePath);
                                    return await getDownloadURL(storageRef);
                                }
                                return null;
                            })
                        );
                        data.images = imageUrls.filter(url => url !== null);
                    }
                    return { id: doc.id, ...data };
                })
            );
            setPosts(postsArray);
        };

        fetchPosts();
    }, []);

    return (
        <div className="main-wrapper">
            <div className="blog-container">
                <h1 className="blog-header">Blog</h1>
                <p className="blog-description">
                    Welcome to our blog! Here, we share insights, updates, and stories
                    from our community. Dive in to explore our latest posts and discover
                    what’s happening in our world.
                </p>
                {/* Render the posts */}
                {posts.map((post) => (
                    <div className="blog-post" key={post.id}>
                        <h2 className="blog-title">{post.title}</h2>
                        <p className="blog-date">
                            {new Date(post.updated.toDate()).toLocaleDateString()}
                        </p>
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                        {post.images && post.images.length > 0 && post.images.map((url, index) => (
                            <img className="blog-image" key={index} src={url} alt={`${post.title} ${index + 1}`} />
                        ))}
                        {/* {post.tags && post.tags.length > 0 && (
                            <p className="blog-tags">
                                Tags: {post.tags.join(", ")}
                            </p>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
}