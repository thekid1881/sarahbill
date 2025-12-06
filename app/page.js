import Contact from "@/components/Contact";
import Offerings from "@/components/Offerings";
import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-sans flex flex-col items-center justify-start min-h-screen">
        <section 
          id="home"
          className="relative snap-start flex-col w-full h-screen bg-[#F9FAFB] flex items-center justify-center"
        >
          <h1 className="leading-relaxed text-[#1F2937] text-5xl md:text-8xl font-semibold">
            Sarah Bill
          </h1>
          <p className="leading-relaxed text-[#4B5563] text-xl md:text-4xl font-semibold">
            Websites, Data Analysis, and Transcription
          </p>
          <ScrollIndicator />
        </section>
        <Offerings />
        <About />
        <Contact />
      </main>
    </>
  );
}