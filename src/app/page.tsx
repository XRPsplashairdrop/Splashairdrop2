import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import DeFiProducts from "@/components/landing/DeFiProducts";
import HowItWorks from "@/components/landing/HowItWorks";
import Security from "@/components/landing/Security";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DeFiProducts />
        <HowItWorks />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
