import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import PostModal from '@/components/PostCreation';

const cardData = [
    {
        id: 1,
        profileImage: "https://via.placeholder.com/48",
        name: "Dr. John Doe (He/Him)",
        position: "Head of AI & Data Science @ XYZ University, Boston",
        timePosted: "3w ago",
        postContent: "🎉 Excited to announce that I've been recognized as a reviewer for the prestigious ABC SCI/Scopus journal 'International Journal of AI and Robotics.' Honored to contribute to the field of AI research! 🙏",
        certificateTitle: "ABC JOURNAL",
        certificateImage: "https://via.placeholder.com/150",
        awardedTo: "John Doe",
        contributionDetails: "in recognition of their contribution to 3 manuscripts in 2024 for",
        journalName: "International Journal of AI and Robotics",
        issueDate: "15 October 2024",
        logos: [
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
        ]
    },
    {
        id: 2,
        profileImage: "https://via.placeholder.com/48",
        name: "Dr. Jane Smith (She/Her)",
        position: "Data Scientist @ ABC Corp",
        timePosted: "1w ago",
        postContent: "🎉 Thrilled to share that I recently completed my review for a paper in the renowned 'Machine Learning and Data Science' journal. Excited to support innovative research! 🙏",
        certificateTitle: "MLDS JOURNAL",
        certificateImage: "https://via.placeholder.com/150",
        awardedTo: "Jane Smith",
        contributionDetails: "in recognition of their contribution to 1 manuscript in 2024 for",
        journalName: "Machine Learning and Data Science",
        issueDate: "10 October 2024",
        logos: [
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40"
        ]
    }
];
const Dashboard = () => {
    const [posts, setPosts] = useState(cardData);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(); // Ref for infinite scroll trigger

    // Function to load more posts (simulating an API call)
    const fetchPosts = async () => {
        setLoading(true);
        try {
            // Simulating API call
            const newPosts = dummyPosts.slice(posts.length, posts.length + 2); // Load 2 more posts
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
        setLoading(false);
    };

    // Use IntersectionObserver to detect the end of the page
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchPosts();
                }
            },
            { threshold: 1 }
        );
        if (observerRef.current) observer.observe(observerRef.current);
        return () => observer.disconnect();
    }, [posts]);

    return (
        <div>
            <div>

            </div>

            <div className="grid grid-cols-1 gap-4 p-4">
                <h1>Posts</h1>
                <PostModal />
                {posts.map((data, index) => (
                    <div className="bg-white border rounded-lg shadow-md p-4 max-w-md mx-auto mb-6">
                        {/* Profile Header */}
                        <div className="flex items-center mb-4">
                            <img src={data.profileImage} alt="User Profile" className="w-12 h-12 rounded-full mr-3" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                                <p className="text-sm text-gray-500">{data.position}</p>
                                <p className="text-xs text-gray-400">{data.timePosted}</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <p className="mb-4 text-gray-800">{data.postContent}</p>

                        {/* Certificate Image */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                            <div className="bg-blue-900 text-white p-4 text-center font-semibold">{data.certificateTitle}</div>
                            <div className="p-6 bg-blue-50 text-center">
                                <p className="text-sm text-gray-600 mb-1">REVIEWER CERTIFICATE</p>
                                <h4 className="text-2xl font-bold text-gray-800 mb-4">This certificate is awarded to</h4>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.awardedTo}</h3>
                                <p className="text-md text-gray-700 mb-4">{data.contributionDetails}</p>
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">{data.journalName}</h4>
                                <p className="text-xs text-gray-500">{data.issueDate}</p>
                            </div>
                            <div className="flex justify-center space-x-2 p-4">
                                {data.logos.map((logo, index) => (
                                    <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-6" />
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-around items-center border-t border-gray-200 pt-3">
                            <button className="flex items-center text-gray-500 hover:text-blue-500">
                                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3.172 9.172a4 4 0 015.656 0l.172.172.172-.172a4 4 0 115.656 5.656l-5.656 5.656-5.656-5.656a4 4 0 010-5.656z" />
                                </svg>
                                Like
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-blue-500">
                                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h10l4 4V5a2 2 0 00-2-2H4z" />
                                </svg>
                                Comment
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-blue-500">
                                <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 8a3 3 0 013 3v7H2V5a3 3 0 013-3h7.59l2 2H5a1 1 0 00-1 1v12h12v-6a1 1 0 00-1-1h-3V8h3z" />
                                </svg>
                                Share
                            </button>
                        </div>
                    </div>

                ))}
                <div ref={observerRef} className="flex justify-center items-center h-16">
                    {loading && <span className="text-gray-500">Loading more posts...</span>}
                </div>
            </div></div>
    );
};

export default Dashboard;
