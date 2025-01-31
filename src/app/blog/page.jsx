"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import BlogHero from "@/components/herosection/blog";
import BlogSection from "@/components/landingPage/landingBlogSection";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";

export default function BlogPage() {
  return (
    <div>
      <Head>
        <title>About HackFusion</title>
        <meta
          name="description"
          content="Next.js Landing Page with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <BlogHero />
        <BlogSection/>
        <FooterCover />
        <Footer />
      </div>
    </div>
  );
}
