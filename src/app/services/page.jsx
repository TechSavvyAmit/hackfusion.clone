"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import ServicesHero from "@/components/herosection/services";
import WhatWeDo from "@/components/landingPage/landingWhatWeDoSection";
import OurExpertise from "@/components/landingPage/landingOurExperticeSection";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";

export default function ServicePage() {
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
      <Navbar />
      <ServicesHero />
      <WhatWeDo />
      <OurExpertise></OurExpertise>
      <FooterCover></FooterCover>
      <Footer></Footer>
    </div>
  );
}
