import Link from "next/link";
import { FaBluesky, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { ModeToggle } from "@/components/modeToggle";
import { Badge } from "@/components/ui/badge";
import {
  education,
  experience,
  professionalSkills,
  techSkills,
  volunteer,
} from "@/lib/cvData";

export function CV() {
  return (
    <>
      <div className="sticky top-0 z-50 -mb-12 w-full">
        <div className="flex justify-end p-4 pr-0">
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col dark:text-gray-100" id="main">
        <header className="flex flex-col border-b-2 border-black pb-2 dark:border-gray-300">
          <h1 className="text-[clamp(1.75rem,8vw,3rem)] font-bold">
            Heath Babb
          </h1>
          <h3 className="pb-4 text-[clamp(1rem,4vw,1.5rem)] font-bold text-[#0047ab] dark:text-blue-400">
            Junior Frontend Developer
          </h3>
          <address className="pb-1 not-italic">
            PO Box 925
            <br />
            Inman, SC 29349
            <br />
            United States
          </address>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-violet-400"
          >
            Contact Me
          </Link>
          <Link
            href="/HeathBabb_Resume_v5.pdf"
            download
            className="text-blue-600 hover:text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-violet-400"
          >
            Download PDF Resume
          </Link>
        </header>
        <main className="flex flex-1 flex-col items-start gap-8 py-8">
          {/* Summary Section */}
          <section id="summary" className="w-full">
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Summary
            </h2>
            <p className="px-4 pt-2 text-justify text-[clamp(0.875rem,3vw,1rem)] leading-relaxed">
              Experienced and innovative Civil Designer with 15+ years of
              experience in geospatial systems and data analysis, complemented
              by proficiency in modern front-end technologies. Proven ability to
              adapt complex technical workflows and data-driven insights to
              user-focused digital solutions. Seeking to leverage technical
              expertise in software and web development roles.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full">
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Professional Skills
            </h2>
            {professionalSkills.map((professionalSkills, index) => (
              <Badge
                key={index}
                className="m-1 rounded-full bg-blue-800 text-[clamp(0.75rem,2.5vw,0.85rem)] dark:bg-slate-300"
              >
                {professionalSkills}
              </Badge>
            ))}
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Technical Skills
            </h2>
            {techSkills.map((techSkills, index) => (
              <Badge
                key={index}
                className="m-1 rounded-full bg-blue-800 text-[clamp(0.75rem,2.5vw,0.85rem)] dark:bg-slate-300"
              >
                {techSkills}
              </Badge>
            ))}
          </section>

          {/* Experience Section */}
          <section id="experience" className="w-full">
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Professional Experience
            </h2>
            <div id="experience-container" className="flex flex-col">
              {experience.map((job, index) => (
                <article
                  key={index}
                  className="flex w-full flex-col gap-0.5 px-2 py-2"
                >
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {job.company} - {job.role}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black max-md:flex max-md:flex-col max-md:gap-1 dark:border-gray-600">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">
                      {job.location}
                    </span>
                    <span className="justify-self-end pr-4 max-md:order-2 max-md:justify-self-start max-md:pr-0">
                      {job.years}
                    </span>
                  </small>
                  <p className="pt-2 text-justify">{job.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Volunteer Section */}
          <section id="volunteer" className="w-full">
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Volunteer Experience
            </h2>
            <div id="volunteer-container" className="flex flex-col">
              {volunteer.map((vol, index) => (
                <article
                  key={index}
                  className="flex w-full flex-col gap-0.5 px-2 py-2"
                >
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {vol.company} - {vol.role}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black max-md:flex max-md:flex-col max-md:gap-1 dark:border-gray-600">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">
                      {vol.location}
                    </span>
                    <span className="justify-self-end pr-4 max-md:order-2 max-md:justify-self-start max-md:pr-0">
                      {vol.years}
                    </span>
                  </small>
                  <p className="pt-2 text-justify">{vol.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="w-full">
            <h2 className="pb-2 text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Education
            </h2>
            <div id="education-container" className="flex flex-col">
              {education.map((edu, index) => (
                <article
                  key={index}
                  className="flex w-full flex-col gap-0.5 px-2 py-2"
                >
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {edu.school} - {edu.program}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black max-md:flex max-md:flex-col max-md:gap-1 dark:border-gray-600">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">
                      {edu.location}
                    </span>
                    <span className="justify-self-end pr-4 max-md:order-2 max-md:justify-self-start max-md:pr-0">
                      {edu.years}
                    </span>
                  </small>
                  <p className="pt-2 text-justify">{edu.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section id="social" className="flex w-full flex-col gap-2">
            <h4 className="pb-2 text-[clamp(1rem,4vw,1.5rem)] font-bold text-[#0047ab] underline dark:text-blue-400">
              Social Media
            </h4>
            <div className="flex gap-4 pl-6 max-md:pl-0">
              <Link
                href="https://linkedin.com/in/hbabb"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="text-[clamp(1.5rem,6vw,2.5rem)] hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="https://github.com/hbabb"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="text-[clamp(1.5rem,6vw,2.5rem)] hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://x.com/Heath2420"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="text-[clamp(1.5rem,6vw,2.5rem)] hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaXTwitter />
              </Link>

              <Link
                href="https://bsky.app/profile/hbabb.bsky.social"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="text-[clamp(1.5rem,6vw,2.5rem)] hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaBluesky />
              </Link>
            </div>
          </section>
        </main>

        <footer className="p-4 text-center">
          <p>
            Single-page CV project from Roadmap.sh | Brought to you by Heath
            Babb
          </p>
          <p className="text-[clamp(0.75rem,2.5vw,0.875rem)]">
            Copyright &copy; {new Date().getFullYear()} Heath Babb - All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
