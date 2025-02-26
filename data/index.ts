export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Journey", link: "#timeline" },
  // { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Experienced Software Engineer with over seven years in web development, specializing in PHP. Proficient in Laravel, Vue.js, and other modern technologies",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Reach out to me at:",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Reshan is exceptional at his job. He has great interpersonal skills, works well with clients, and always goes the extra mile to support his colleagues. His dedication to getting things done efficiently makes him a valuable asset to any team. I highly recommend him for any organization seeking a reliable and skilled professional.",
    name: "Chaminda Chanaka",
    title: "Software Engineer | Fullstack Developer",
    image: "/chanaka.jpeg",
  },
  {
    quote:
      "Reshan was my senior at our previous company and consistently impressed me with his exceptional programming skills and problem-solving abilities. He has deep knowledge of software engineering principles and stays updated with the latest advancements. His ability to tackle complex technical issues and deliver elegant solutions is remarkable. I highly recommend Reshan to any organization seeking a talented and driven Software Engineer. It was a pleasure working with him, and I’m confident he will excel in his future endeavors.",
    name: "Avishka Meddegoda",
    title: "Backend Dev | Software Engineer",
    image: "/awishka.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Intern Software Engineer",
    desc: "Assisted in developing web applications using Java, CodeIgniter, jQuery, MySQL, gaining hands-on experience with RESTful APIs, database design, and modern UI development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Asociate Software Engineer",
    desc: "Collaborated on full-stack web solutions using Laravel PHP and Vue.js, focusing on integrating MySQL databases and implementing user-friendly interfaces.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer",
    desc: "Engineered scalable backend solutions using Laravel and optimized MySQL queries for high-performance applications. Contributed to enhancing existing systems by improving code quality and efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Senior Software Engineer",
    desc: "Led development of complex web applications with Laravel and Vue.js, introducing best practices for code optimization and database structuring. Mentored junior developers and managed project lifecycles.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/reshan-wijerathna-093b79108",
  },
  {
    id: 2,
    img: "/stackover.svg",
    url: "https://stackoverflow.com/users/10308784/reshan-wijerathna",
  },
  {
    id: 3,
    img: "/git.svg",
    url: "https://github.com/reshanmadushanka",
  },
];
