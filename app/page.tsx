import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyBSCU from "@/components/WhyBSCU";
import WhoWereLookingFor from "@/components/WhoWereLookingFor";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyBSCU />
        <WhoWereLookingFor />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
