import React, { useEffect, useState } from 'react';
import "../styles/components/BlogCarousel.css";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Ensure to import the storage config
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ReactMarkdown from "react-markdown"; // If using Markdown

export default function BlogCarousel() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const q = query(collection(db, "blog_posts"), orderBy("updated", "desc"), limit(2));
            const querySnapshot = await getDocs(q);
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
        <div className='blog-carousel'>
            {posts.map((post) => (
                <div className="blog-carousel-preview" key={post.id}>
                    <h2 className="blog-carousel-title">{post.title}</h2>
                    <p className="blog-carousel-author">By {post.author}</p>
                    <p className="blog-carousel-date">
                        {new Date(post.updated.toDate()).toLocaleDateString()}
                    </p>
                    <ReactMarkdown>
                        {`${post.content.substring(0, 100)}...`}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
}