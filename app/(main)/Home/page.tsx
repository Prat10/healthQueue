import React from "react";
import Hero from "./_components/_Hero/page";
import WhyChoose from "./_components/_WhyChoose/page";
import HowItWorks from "./_components/_HowItWorks/page";
import StatsSection from "./_components/_stats/page";
import Footer from "./_components/_Footer/page";

export default function Home() {
  return (
    <>
    <Hero />
    <WhyChoose />
    <HowItWorks />
    <StatsSection />
    <Footer />
    </>
  );
}
