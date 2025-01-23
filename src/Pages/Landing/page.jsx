"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import HeroSection from "@/components/landingHeroSection";
import AboutUsSection from "@/components/landingAboutusSection";
import OurProcess from "@/components/landingOurprocessSection";
import WhatWeDo from "@/components/landingWhatWeDoSection";
import OurExpertise from "@/components/landingOurExperticeSection";
import OurLeaders from "@/components/landingOurLeaders";
import Testimonials from "@/components/landingTestimonialsSection";
import ContactUs from "@/components/getintouchsection";
import BlogSection from "@/components/landingBlogSection";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="Next.js Landing Page with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutUsSection></AboutUsSection>
      <OurProcess></OurProcess>
      <WhatWeDo></WhatWeDo>
      <OurExpertise></OurExpertise>
      <OurLeaders></OurLeaders>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <BlogSection></BlogSection>
      <FooterCover></FooterCover>
      <Footer></Footer>
    </div>
  );
}
