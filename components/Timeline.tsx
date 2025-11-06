import React from "react";
import { Timeline } from "./ui/timeline";

function TimelineWork() {
  const data = [
    {
      id: "1",
      title: "2022-present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold mb-4">
            Adventus.io - Senior Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Technologies Used: Laravel (Lucid Architecture), Vue.js, MySQL,
            Stripe API, Docker, AWS, Nest.js.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Implemented functinalities of student recruitment platform
            facilitate seamless interactions between institutions and
            recruitment agents.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integrate Turnitin API to check plagiarism in SOP
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented complex SQL queries in MySQL to generate detailed
              reports (Follow-ups, To-dos)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Converted UIs which are impelemented using Laravel Backpack to
              Vue.js
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Upgraded the system&apos;s PHP version from 8.0 to 8.1
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Participated in code reviews and contributed to improving coding
            practices Supported the development team with troubleshooting and
            debugging Participated in Agile development processes, contributing
            to sprint planning, reviews, and retrospectives Conducted unit
            testing and performance tuning to ensure high-quality software
            Successfully led multiple production releases with no impact on
            end-users Mentor junior developers, conduct technical training
            sessions, and enforce best practices in software development
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      id: "2",
      title: "2020 - 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-bold mb-4">
            Web Choice Online Pty Ltd - Senior Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Technologies Used: Laravel, Vue.js, MySQL, cPanel, Stripe API,
            Google Maps API, Zoom API, Vimeo API.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Implemented functinalities of learning management software and
            online baby store.
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integrated Stripe API for seamless payment processing
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integrated Zoom API to enable meeting creation and joining
              directly through the LMS
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integrated Google Maps API to display shops within a specified
              range
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integrated Vimeo API to display recorded lessons
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed reusable components to streamline the development process
            Optimized database queries and implemented caching strategies,
            enhancing application performance Conduct code reviews, mentor
            junior developers, and enforce coding standards and best practices
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      id: "3",
      title: "2019 - 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-bold mb-4">
            Concon Solution - Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Technologies Used: Laravel, React.js, MySQL
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented functinalities of online gift shop
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed the front-end interface with React.js, focusing on a
              responsive and user-friendly design
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Implemented RESTful APIs for efficient data handling and
              interaction between the front-end and back-end
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Improved codebase maintainability by refactoring legacy code
              and implementing best practices
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Coordinated with a team of developers and conducted code reviews to
            maintain high coding standards Conducted unit testing and
            performance tuning
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      id: "4",
      title: "2016 - 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-bold mb-4">
            Redomini (Pvt.) Ltd. - Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Technologies Used: Laravel, CodeIgniter, jQuery, MySQL
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Successfully delivered over 8 high-quality web projects on time and
            within budget
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed and maintained web applications using Laravel and
              CodeIgniter Connected the application to hardware devices,
              including printers and barcode readers for the POS system
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Developed RESTful APIs and integrated third-party services
              Improved code quality through unit testing and code reviews
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      id: "5",
      title: "2015 - 2016",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-bold mb-4">
            Ceylon Linux - Associate Software Engineer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-semibold mb-4">
            Technologies Used: Java, CodeIgniter, jQuery, MySQL
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Contributed to the successful launch of several web applications
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Assist in the development and maintenance of desktop
              applications using Java and web applications using CodeIgniter
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Collaborate with senior developers to design and implement new
              features Participate in code reviews to learn and apply best
              practices
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Debug and troubleshoot issues in the application
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <section id="timeline" className="py-10">
      <h1 className="heading py-10">
        Changelog from
        <span className="text-purple"> my journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default TimelineWork;
