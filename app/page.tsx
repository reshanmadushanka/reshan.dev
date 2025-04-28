import Hero from "@/components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import Grid from "../components/Grid";
import { navItems } from "@/data";
import Clients from "../components/Clients";
import Experience from "@/components/Experience";
import TimelineWork from "../components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TimelineWork />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
