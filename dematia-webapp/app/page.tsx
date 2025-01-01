import About from "@/components/About";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Install from "@/components/Install";
import Navbar from "@/components/Navbar";
import PeopleSay from "@/components/PeopleSay";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="p-2">
          <Hero/>
          <Feature/>
          <HowItWorks/>
          <PeopleSay/>
          <Install/>
          <About/>
      </main>
      <Footer/>
    </>
  );
}
