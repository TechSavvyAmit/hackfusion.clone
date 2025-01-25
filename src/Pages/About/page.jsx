"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import AboutHero from "@/components/Herosection/about";
import AboutUsSection from "@/components/LandingPage/landingAboutusSection";
import OurLeaders from "@/components/LandingPage/landingOurLeaders";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";


export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About HackFusion</title>
        <meta name="description" content="Next.js Landing Page with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <AboutHero></AboutHero>
      <AboutUsSection></AboutUsSection>
      <OurLeaders></OurLeaders>
      <FooterCover></FooterCover>
      <Footer></Footer>
    </div>
  );
}
