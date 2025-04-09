// BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const dummyPosts = [
  {
    id: 1,
    title: "5 Reasons to Use Antivirus in 2025",
    content:
      "Cybersecurity threats are rising every year. Here's why you need a reliable antivirus solution...",
    date: "April 8, 2025",
  },
  {
    id: 2,
    title: "How to Activate Your McAfee Subscription Easily",
    content:
      "Activating your McAfee subscription is easy and takes less than 5 minutes...",
    date: "April 7, 2025",
  },
  {
    id: 3,
    title: "Top 3 Cybersecurity Trends in 2025",
    content:
      "The cybersecurity world is evolving. Here are the top 3 trends you should watch in 2025...",
    date: "April 6, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">
            Home
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium">
            Blog
          </Link>
          <Link to="/create" className="text-gray-700 hover:text-red-600 font-medium">
            New Post
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-red-600">McAfee Blog</h1>
          <Link
            to="/create"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
          >
            + New Post
          </Link>
        </header>

        {/* Blog List */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-bold text-red-600 mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 text-base mb-4">{post.content}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-red-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Blog;
