"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import HeroSection from "@/components/landingPage/landingHeroSection";
import AboutUsSection from "@/components/landingPage/landingAboutusSection";
import OurProcess from "@/components/landingPage/landingOurprocessSection";
import WhatWeDo from "@/components/landingPage/landingWhatWeDoSection";
import OurExpertise from "@/components/landingPage/landingOurExperticeSection";
import OurLeaders from "@/components/landingPage/landingOurLeaders";
import Testimonials from "@/components/landingPage/landingTestimonialsSection";
import ContactUs from "@/components/getintouchsection";
import BlogSection from "@/components/landingPage/landingBlogSection";
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
