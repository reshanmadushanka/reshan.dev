import Hero from "@/components/Hero";
import { FloatingNav } from "../components/ui/floating-navbar";
import Grid from "../components/Grid";
import Skills from "@/components/Skills";
import Clients from "../components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import TimelineWork from "../components/Timeline";
import Footer from "@/components/Footer";
import {
  IconHome,
  IconCar,
  IconUser,
  IconCode,
  IconMessageStar,
  IconAddressBook,
} from "@tabler/icons-react";
const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />, // Just pass the component reference
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Journey",
    link: "#timeline",
    icon: <IconCar className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: (
      <IconMessageStar className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <main className="relative bg-gray-950 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <TimelineWork />
        <Experience />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
