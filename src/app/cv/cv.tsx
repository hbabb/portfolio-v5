import Link from 'next/link';
import { FaBluesky, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { ModeToggle } from '@/components/modeToggle';
import { Badge } from '@/components/ui/badge';
import { education, experience, skills, volunteer } from '@/lib/cvData';

// Email obfuscation for bots
const user = 'hbabb';
const domain = 'heath-babb.dev';
const email = `${user}@${domain}`;

export function CV() {
  return (
    <>
      <div className="sticky top-0 w-full z-50 -mb-12">
        <div className="flex justify-end p-4 pr-0">
          <ModeToggle />
        </div>
      </div>
      <div className="flex flex-col dark:text-gray-100" id="main">
        <header className="border-b-2 border-black dark:border-gray-300 pb-2">
          <h1 className="text-[clamp(1.75rem,8vw,3rem)] font-bold">Heath Babb</h1>
          <h3 className="text-[clamp(1rem,4vw,1.5rem)] font-bold text-[#0047ab] dark:text-blue-400 pb-4">Junior Frontend Developer</h3>
          <address className="pb-1 not-italic">
            PO Box 925
            <br />
            Inman, SC 29349
            <br />
            United States
            <br />
            <Link
              href={`mailto:${email}`}
              className="text-blue-600 hover:text-violet-600 hover:underline dark:text-blue-400 dark:hover:text-violet-400"
            >
              {email}
            </Link>
          </address>
        </header>
        <main className="flex-1 flex flex-col items-start py-8 gap-8">
          {/* Summary Section */}
          <section id="summary" className="w-full">
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Summary</h2>
            <p className="text-justify pt-2 px-4 text-[clamp(0.875rem,3vw,1rem)] leading-relaxed">
              Experienced CAD professional transitioning into software and web development. Strong foundation in geospatial systems and data analysis, complemented by proficiency in modern frontend technologies through self-taught learning programs at Codecademy, freeCodeCamp, Scrimba, and Frontend Mentor. Proven ability to adapt complex technical workflows and data-driven insights to user-focused digital solutions. Seeking an entry-level frontend developer role to apply analytical thinking, collaborative skills, and a passion for building accessible, high-quality web applications.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="w-full">
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Skills</h2>
            {skills.map((skills, index) => (
              <Badge key={index} className="m-1 text-[clamp(0.75rem,2.5vw,0.85rem)]">{skills}</Badge>
            ))}
          </section>

          {/* Experience Section */}
          <section id="experience" className="w-full">
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Professional Experience</h2>
            <div id="experience-container" className="flex flex-col">
              {experience.map((job, index) => (
                <article key={index} className="flex flex-col w-full py-2 px-2 gap-0.5">
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {job.company}
                    {' '}
                    -
                    {' '}
                    {job.role}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black dark:border-gray-600 max-md:flex max-md:flex-col max-md:gap-1">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">{job.location}</span>
                    <span className="justify-self-end pr-4 max-md:justify-self-start max-md:pr-0 max-md:order-2">{job.years}</span>
                  </small>
                  <p className="text-justify pt-2">{job.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Volunteer Section */}
          <section id="volunteer" className="w-full">
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Volunteer Experience</h2>
            <div id="volunteer-container" className="flex flex-col">
              {volunteer.map((vol, index) => (
                <article key={index} className="flex flex-col w-full py-2 px-2 gap-0.5">
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {vol.company}
                    {' '}
                    -
                    {' '}
                    {vol.role}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black dark:border-gray-600 max-md:flex max-md:flex-col max-md:gap-1">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">{vol.location}</span>
                    <span className="justify-self-end pr-4 max-md:justify-self-start max-md:pr-0 max-md:order-2">{vol.years}</span>
                  </small>
                  <p className="text-justify pt-2">{vol.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="w-full">
            <h2 className="text-[clamp(1.25rem,5vw,2rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Education</h2>
            <div id="education-container" className="flex flex-col">
              {education.map((edu, index) => (
                <article key={index} className="flex flex-col w-full py-2 px-2 gap-0.5">
                  <h5 className="text-[clamp(1rem,4vw,1.25rem)] font-extrabold">
                    {edu.school}
                    {' '}
                    -
                    {' '}
                    {edu.program}
                  </h5>
                  <small className="grid grid-cols-2 border-b border-black dark:border-gray-600 max-md:flex max-md:flex-col max-md:gap-1">
                    <span className="text-[clamp(0.875rem,3vw,1rem)] font-semibold max-md:order-1">{edu.location}</span>
                    <span className="justify-self-end pr-4 max-md:justify-self-start max-md:pr-0 max-md:order-2">{edu.years}</span>
                  </small>
                  <p className="text-justify pt-2">{edu.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section id="social" className="flex flex-col w-full gap-2">
            <h4 className="text-[clamp(1rem,4vw,1.5rem)] font-bold text-[#0047ab] dark:text-blue-400 underline pb-2">Social Media</h4>
            <div className="pl-6 max-md:pl-0 flex gap-4">
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

        <footer className="text-center p-4">
          <p>Single-page CV project from Roadmap.sh | Brought to you by Heath Babb</p>
          <p className="text-[clamp(0.75rem,2.5vw,0.875rem)]">
            Copyright &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Heath Babb - All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};
