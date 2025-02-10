"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import About from "@/components/Herosection/About";
import AboutUsSection from "@/components/LandingPage/landingAboutusSection";
import OurLeaders from "@/components/LandingPage/landingOurLeaders";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";

export default function AboutPage() {
  return (
    <>
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
        <About />
        <AboutUsSection />
        <OurLeaders />
        <FooterCover />
        <Footer />
      </div>
    </>
  );
}
