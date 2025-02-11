"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const BlogSection = () => {
  const pathname = usePathname();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4eb1eaf0ea9047439c093bf47c42d4c6`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data. Please try again later.");
        }
        const data = await response.json();
        setBlogs(data.articles || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-500 font-raleway">
          Loading...
        </h2>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-red-500 font-raleway">
          Error: {error}
        </h2>
        <p className="text-gray-600">
          Something went wrong while fetching the blogs. Please try refreshing
          the page.
        </p>
      </section>
    );
  }

  const visibleBlogs =
    pathname === "/blog" ? blogs.slice(0, 12) : blogs.slice(0, 3);
  const latestThreeBlogs = blogs.slice(0, 3); // First 3 blogs for special section

  return (
    <section className="bg-white ">
      <div>
        {pathname === "/blog" && (
          <section className="py-[100px]">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-red-500 font-semibold text-lg mb-2 font-raleway">
                Our Blog
              </h3>
              <h2 className="text-3xl font-bold mb-8 font-raleway">
                Latest Post
              </h2>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full">
                  {latestThreeBlogs.map((blog, index) =>
                    index === 0 ? (
                      <div
                        key={blog.url || index}
                        className="row-span-2 col-span-1 bg-white p-4 rounded-[10px] shadow-lg flex flex-col items-center text-lg font-semibold relative"
                        style={{
                          minWidth: "250px",
                          height: "470px",
                          boxShadow: "0px 0px 10px 0px #FF3E5433",
                        }}
                      >
                        <div className="relative w-full h-[300px] overflow-hidden rounded-[10px]">
                          <img
                            src={
                              blog.urlToImage || "/portfolio/portfolio1.jpeg"
                            }
                            alt={blog.title}
                            className="w-full h-full rounded-[10px] object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-[10px] px-4">
                            <p className="text-xs mb-2 text-center line-clamp-3">
                              {blog.description || "No description available."}
                            </p>
                            <a
                              href={blog.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 text-white text-xs px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                            >
                              View Blog
                            </a>
                          </div>
                        </div>
                        <div className="pt-4 text-left w-full">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500 overflow-hidden text-ellipsis max-h-12">
                            {blog.title}
                          </h3>

                          <div className="mt-4">
                            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                              {blog.source?.name || "General News"}
                            </span>
                            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                              <span className="italic">
                                {blog.author
                                  ? `By ${blog.author}`
                                  : "By Unknown"}
                              </span>
                              <span>
                                {new Date(
                                  blog.publishedAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={blog.url || index}
                        className="row-span-1 col-span-1 bg-white p-4 rounded-lg shadow-lg flex items-start text-lg font-semibold relative"
                        style={{
                          minWidth: "250px",
                          height: "225px",
                          boxShadow: "0px 0px 10px 0px #FF3E5433",
                        }}
                      >
                        <div className="relative">
                          <img
                            src={
                              blog.urlToImage || "/portfolio/portfolio1.jpeg"
                            }
                            alt="Blog Image"
                            className="w-[185px] h-[185px] rounded-[10px] object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-[10px] px-2">
                            <p className="text-xs mb-2 text-center line-clamp-2">
                              {blog.description || "No description available."}
                            </p>
                            <a
                              href={blog.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600 transition duration-300"
                            >
                              View Blog
                            </a>
                          </div>
                        </div>

                        <div className="pl-4 text-left flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500 line-clamp-2 overflow-hidden text-ellipsis max-h-12">
                            {blog.title}
                          </h3>

                          <div className="mt-4">
                            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                              {blog.source?.name || "General News"}
                            </span>
                            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                              <span className="italic">
                                {blog.author
                                  ? `By ${blog.author}`
                                  : "By Unknown"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {
          <div className="py-[100px] bg-gray-50 ">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-black font-semibold text-lg mb-2">
                \ Our Blog \
              </h3>
              <h2 className="text-3xl font-bold mb-8">Latest Post</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {visibleBlogs.map((blog, index) => (
                  <div
                    key={blog.url || index}
                    className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative cursor-pointer"
                  >
                    <div className="p-4 relative group">
                      <img
                        src={
                          blog.urlToImage || "https://via.placeholder.com/400"
                        }
                        alt={blog.title}
                        className="w-full h-60 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center px-4 transition-opacity duration-300">
                        <p className="text-sm mb-4">
                          {blog.description || "No description available."}
                        </p>
                        <a
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                        >
                          View Blog
                        </a>
                      </div>
                    </div>
                    <div className=" p-4 text-left">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-500 overflow-hidden text-ellipsis max-h-12">
                        {blog.title}
                      </h3>
                      <div className="mt-4">
                        <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                          {blog.source?.name || "General News"}
                        </span>
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                          <span className="italic">
                            {blog.author ? `By ${blog.author}` : "By Unknown"}
                          </span>
                          <span>
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default BlogSection;
