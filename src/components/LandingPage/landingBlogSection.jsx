"use client";
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog/image-1.jpg",
      title: "The most Popular Business Of the Year",
      author: "Ranold Jeff",
      authorImage: "/blog/author1.jpg",
      date: "May 4th, 2022",
    },
    {
      id: 2,
      image: "/blog/image-2.jpg",
      title: "The most Popular Business Of the Year",
      author: "Patricia Anderson",
      authorImage: "/blog/author2.jpg",
      date: "Apr 27th, 2022",
    },
    {
      id: 3,
      image: "/blog/image-3.jpg",
      title: "The most Popular Business Of the Year",
      author: "Elaine Luna",
      authorImage: "/blog/author3.jpg",
      date: "Apr 20th, 2022",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h3 className="text-red-500 font-semibold text-lg mb-2 font-raleway">
          \ Our Blog \
        </h3>
        <h2 className="text-3xl font-bold mb-8 font-raleway">Latest Post</h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden hover:cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <div className="p-2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-red-500 text-left font-raleway">
                  {blog.title}
                </h3>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-raleway">{blog.author}</span>
                  </div>
                  <span className="font-raleway">{blog.date}</span>
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
