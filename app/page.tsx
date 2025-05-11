import Hero from "@/components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import { navItems } from "@/data";
import Clients from "../components/Clients";
import Experience from "@/components/Experience";
import TimelineWork from "../components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TimelineWork />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
