"use client";
import Head from "next/head";
import Navbar from "@/components/nav";
import ContactHero from "@/components/herosection/contact";
import ContactUs from "@/components/getintouchsection";
import FooterCover from "@/components/footerCover";
import Footer from "@/components/footerSection";

export default function ContactPage() {
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
        <Navbar></Navbar>
        <ContactHero></ContactHero>
        <ContactUs></ContactUs>
        <FooterCover></FooterCover>
        <Footer></Footer>
      </div>
    </div>
  );
}
