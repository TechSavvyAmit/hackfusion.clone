"use client"
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/path/to/image1.jpg", // Replace with actual image paths
      title: "The most Popular Business Of the Year",
      author: "Ranold Jeff",
      authorImage: "/path/to/author1.jpg", // Replace with actual author image paths
      date: "May 4th, 2022",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      title: "The most Popular Business Of the Year",
      author: "Patricia Anderson",
      authorImage: "/path/to/author2.jpg",
      date: "Apr 27th, 2022",
    },
    {
      id: 3,
      image: "/path/to/image3.jpg",
      title: "The most Popular Business Of the Year",
      author: "Elaine Luna",
      authorImage: "/path/to/author3.jpg",
      date: "Apr 20th, 2022",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h3 className="text-red-500 font-semibold text-lg mb-2">
          \ Our Blog \
        </h3>
        <h2 className="text-3xl font-bold mb-8">Latest Post</h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{blog.author}</span>
                  </div>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
