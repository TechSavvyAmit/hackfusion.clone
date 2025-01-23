"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import HeroSection from "@/components/LandingPage/landingHeroSection";
import AboutUsSection from "@/components/LandingPage/landingAboutusSection";
import OurProcess from "@/components/LandingPage/landingOurprocessSection";
import WhatWeDo from "@/components/LandingPage/landingWhatWeDoSection";
import OurExpertise from "@/components/LandingPage/landingOurExperticeSection";
import OurLeaders from "@/components/LandingPage/landingOurLeaders";
import Testimonials from "@/components/LandingPage/landingTestimonialsSection";
import ContactUs from "@/components/getintouchsection";
import BlogSection from "@/components/LandingPage/landingBlogSection";
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
