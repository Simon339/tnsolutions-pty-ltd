
import About from "@/components/websites/About";
import Contact from "@/components/websites/Contact";
import Gallery from "@/components/websites/Gallery";
import HomePage from "@/components/websites/Home";
import Services from "@/components/websites/Services";

export default function Home() {
  return (
    <div className="font-(family-name:--font-geist-sans)">
      <HomePage />
      <About />
      <Services />
      <Gallery/>
      <Contact />
    </div>
  );
}
