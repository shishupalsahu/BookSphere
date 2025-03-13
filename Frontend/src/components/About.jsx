import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about" id="about">
            <div className="about_main">
                <div className="about_box about_intro_box">
                    <h1 className='font-bold '>📚 About BookSphere</h1>
                    <p>
                        BookSphere is a vibrant platform designed for book lovers to discover, explore, and share their literary journeys. Whether you're a seasoned reader or just beginning to build your bookshelf, BookSphere brings readers together in an interactive space where stories come alive.
                    </p>
                </div>

                <div className="about_box about_dev_box">
                    <h2  className='font-bold '>👨‍💻 Developed By</h2>
                    <p><strong>Shishupal Sahu</strong></p>
                    <p>Student of MCA, <br /> Motilal Nehru National Institute of Technology Allahabad</p>
                    <p>📧 <a href="mailto:shishupalsahu13@gmail.com">shishupalsahu13@gmail.com</a></p>
                    <p>🔗 <a href="https://github.com/shishupalsahu" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                </div>

                <div className="about_box about_features_box">
                    <h2  className='font-bold '>🔑 Key Features</h2>
                    <ul>
                        <li>📚 Discover New Reads: Find books across genres, from timeless classics to modern bestsellers.</li>
                        <li>📝 Personalized Recommendations: Get tailored book suggestions based on your preferences.</li>
                        <li>👥 Community Engagement: Join discussions, write reviews, and connect with fellow readers.</li>
                        <li>📖 Reading Lists: Organize your favorite books, track your reading progress, and set personal goals.</li>
                        <li>🔍 Easy Search & Browse: Explore books by title, author, genre, or keyword.</li>
                        <li>✉️ Contact & Chat with Developer: Send emails through the contact section and talk directly with the developer.</li>
                        <li>🌗 Dark/Light Mode: Enjoy reading with your preferred theme — switch seamlessly between light and dark modes.</li>
                    </ul>
                </div>

                <div className="about_box about_reason_box">
                    <h2  className='font-bold '>📘 Why BookSphere?</h2>
                    <p>
                        Welcome to BookSphere — Your Gateway to a World of Stories!  
                        BookSphere is more than just a book management platform; it's a dynamic community for readers and writers alike. Our goal is to bridge the gap between literature lovers, helping them explore new worlds, share their insights, and build meaningful connections through books.
                        <br /><br />
                        Whether you’re looking for your next favorite novel or hoping to publish a personal blog, BookSphere has you covered. The platform offers personalized recommendations, making sure you always have the perfect book at hand. You can join discussions, write detailed reviews, and share reading lists with friends.
                        <br /><br />
                        For creators, BookSphere provides a space to post blogs, gather feedback, and refine their writing. Admins can easily manage content, users, and categories, while notifications keep users informed and engaged. Plus, with a responsive design and support for both light and dark themes, reading becomes a truly immersive experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
