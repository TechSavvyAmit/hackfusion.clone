"use client";
import Head from "next/head";
import Portfolio from "@/components/Herosection/portfolio";
import Navbar from "@/components/nav";
import PortfolioSection from "@/components/LandingPage/landingOurPortofolio";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Next.js Landing Page with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Portfolio />
        <PortfolioSection />
        <FooterCover />
        <Footer />
      </div>
    </div>
  );
}
