type Job = {
  company: string;
  role: string;
  location: string;
  years: string;
  description: string;
};

type Education = {
  school: string;
  program: string;
  location: string;
  years: string;
  description: string;
};

export const skills: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'TailwindCSS',
  'Sass',
  'Node',
  'Express',
  'Nest',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Git',
  'Jira',
  'Notion',
  'Obsidian',
  'Agile Methodologies',
  'AWS',
  'GCP',
  'Digital Ocean',
  'Cloudflare',
  'Windows OS',
  'MacOS',
  'Linux',
  'Office Suite',
  'Figma',
  'Adobe Creative Cloud',
  'AutoCAD',
  'Civil 3D',
  'Trimble Business Center',
  'Carlson',
  'Bid2Win',
  'Primavera P6',
];

export const experience: Job[] = [
  {
    role: 'Civil Designer',
    company: 'Garver Engineering',
    location: 'Greenville, SC',
    years: 'April 2025 - Present',
    description: 'At Garver Engineering, I create civil designs for engineers in the Water Design center using Autodesk Civil 3D. I have been called upon numerous times to create new improved workflows and standards by developing tools with Dynamo and Python scripting to improve productivity. Additionally, I provide training to Civil technicians, supporting their growth in design proficiency and technical workflows.',
  },
  {
    role: 'Owner | Lead Consultant',
    company: 'HB Consultants',
    location: 'Inman, SC',
    years: 'September 2024 - Present',
    description: 'As the founder of HB Consultants, I design and develop custom websites using HTML, CSS, JavaScript, and specialized frameworks, ensuring responsive and performant interfaces. I manage all aspects of web services, from domain registration to hosting and ongoing maintenance. I also provide technical support to land surveyors and create custom tools tailored for Civil 3D using LISP and Python programming languages to enhance automation and drafting workflows.',
  },
  {
    role: 'Sr. CAD Technician | Survey Department',
    company: 'Civil & Environmental Consultants, Inc (CEC)',
    location: 'Greenville, SC',
    years: 'November 2022 - August 2024',
    description: 'While at CEC, I optimized the survey department workflows, achieving a 400% production increase. I conducted Trimble system training across offices, facilitating smooth technology adoption. Collaborating with the reality capture team, I improved LiDAR processing efficiency by 150% through Ai integration and standardized procedures. I also developed comprehensive CAD documentation and training materials while managing drafting teams to ensure quality across diverse projects.',
  },
  {
    role: 'CAD Manager',
    company: 'EAS Professionals, Inc',
    location: 'Greenville, SC',
    years: 'December 2017 - November 2022',
    description: 'At EAS Professionals, I led the modernization of CAD systems, standardizing workflows and significantly boosting efficiency and revenue. I managed the transition to Trimble survey systems, including procurement and training. I supported environmental and geotechnical departments by introducing Trimble GIS technology, reducing dependency on survey teams. Additionally, I implemented standardized data workflows that improved coordination between field crews and office staff.',
  },
  {
    role: 'CNC Machinist A',
    company: 'GE Verona (formerly GE Power)',
    location: 'Greenville, SC',
    years: 'May 2016 - December 2017',
    description: 'At GE Verona, I operated CNC broach systems manufacturing turbine wheels with high precision for gas-fired power plants, ensuring strict adherence to quality and engineering specifications.',
  },
  {
    role: 'CAD Specialist | 3D Machine Control Modeler',
    company: 'Azimuth Control, Inc',
    location: 'Greenville, SC',
    years: 'May 2013 - May 2016',
    description: 'At Azimuth Control, I transitioned the company&apos;s design software from Civil 3D 2013 to Carlson Civil Suite. I provided comprehensive IT support, including web development, server management, and field equipment calibration. I assisted field crews as needed, created 3D models for machine control, and offered technical support to contractors. I also established a terrestrial LiDAR scanning program and managed all associated data processing.',
  },
  {
    role: 'Estimator | Survey CAD Technician',
    company: 'Morgan Corp.',
    location: 'Duncan, SC',
    years: 'February 2007 - May 2013',
    description: 'At Morgan Corp., I performed quality takeoffs using CAD, Terramodel, and Agtek software. I supported the survey team in establishing site control with GPS and robotic total stations, built machine control models, and provided technical assistance. Additionally, I prepared project bids in Bid2Win, created project schedules in Primavera P6, and developed bid proposals using Adobe Creative Suite.',
  },
  {
    role: 'CNC Machinist Intern',
    company: 'SEW Eurodrive',
    location: 'Lyman, SC',
    years: 'June 2006 - February 2007',
    description: 'As a machinist intern, I supported multiple departments including deburring, quality assurance, heat treatment, and packaging. I earned advanced forklift certification and contributed to improving manufacturing workflows. My responsibilities included monitoring quality, documenting processes, and analyzing production systems. I worked with senior machinists to enhance efficiency across operations, which led to measurable productivity improvements. This experience gave me a strong foundation in industrial manufacturing practices and quality standards.',
  },
  {
    role: 'CNC Machinist',
    company: 'A. Berger',
    location: 'Spartanburg, SC',
    years: 'June 2005 - June 2006',
    description: 'I operated multi-axis CNC machines on second shift, ensuring parts met strict specifications. My role involved machine setup, parameter adjustments, and quality inspections. I collaborated with engineers to improve processes, which reduced cycle times while maintaining precision. I also developed and documented new operating procedures that increased efficiency and reduced waste, directly contributing to higher departmental output.',
  },
  {
    role: 'Assets Protection | Risk Management Associate',
    company: 'Denny&apos;s Corporate',
    location: 'Spartanburg, SC',
    years: 'June 2004 - June 2005',
    description: 'I handled overnight security and risk management operations for Denny&apos;s corporate facilities. My duties included monitoring building access, supporting surveillance systems, and investigating asset discrepancies. I responded to incident reports from multiple locations and maintained detailed records to support internal investigations. I also improved reporting procedures, which helped streamline response times and ensure compliance with corporate security standards.',
  },
  {
    role: 'Unarmed Security Guard',
    company: 'Spartan Security',
    location: 'Lyman, SC',
    years: 'June 2003 - June 2004',
    description: 'Assigned to the Springs Industries plant, I performed access control, perimeter checks, and facility patrols during off-hours. I maintained detailed security logs and coordinated with staff to ensure site safety. I introduced new monitoring routines that improved coverage and helped identify and address potential security issues, strengthening overall facility protection.',
  },
];

export const volunteer: Job[] = [
  {
    role: 'Technical Consultant | Web Developer',
    company: 'Motlow Creek Baptist Church',
    location: 'Campobello, SC',
    years: 'January 2011 - Present',
    description: 'As the volunteer technical consultant for Motlow Creek Baptist Church, I manage the church&apos;s audio-visual systems and digital infrastructure. I serve as the lead audio engineer for services and oversee livestream production. I maintain the network, support staff with technical issues, and manage the church&apos;s online presence. I also created backup systems to ensure reliability during services and developed documentation and training resources to enable other volunteers to assist, enhancing the sustainability of the church&apos;s tech operations.',
  },
  {
    role: 'Technical Operations & Maintenance',
    company: 'Family Farm',
    location: 'Campobello, SC',
    years: 'January 1998 - December 2017 (with informal experience from early childhood)',
    description: 'Starting in early childhood, I became deeply involved in the daily operations of our family farm. I operated and maintained a wide range of agricultural equipment, managed irrigation systems, and performed repairs to ensure uptime and operational efficiency. I introduced improvements to reduce downtime and applied technology solutions to streamline core processes. This long-term experience shaped my understanding of technical systems, equipment maintenance, and problem-solving under real-world conditions.',
  },
  {
    role: 'Technical Assistant | Jr. Electrician',
    company: 'B&B Repair',
    location: 'Campobello, SC',
    years: 'May 2003 - December 2006',
    description: 'At this family-owned business, I worked hands-on with electrical, mechanical, and control systems across residential, commercial, and industrial settings. I performed electrical installations and repairs, developed preventive maintenance routines that improved equipment reliability, and supported cost-saving efforts. I also troubleshot complex systems including motor controls and PLCs, and collaborated with senior technicians to implement clear maintenance documentation and repair procedures.',
  },
];

export const education: Education[] = [
  {
    school: 'Codecademy',
    location: 'Online',
    program: 'Full-Stack Engineer',
    years: 'March 2025 - Present',
    description: 'A comprehensive program covering both frontend and backend web development',
  },
  {
    school: 'Scrimba',
    location: 'Online',
    program: 'Frontend Engineer',
    years: 'March 2025 - Present',
    description: 'An immersive, interactive course developed in collaboration with Mozilla MDN. Focusses on HTML, CSS, JavaScript, responsive design, accessibility, and React',
  },
  {
    school: 'Greenville Technical College',
    location: 'Greenville, SC',
    program: 'Aircraft Maintenance | Aircraft Electronics',
    years: '2012 - 2025',
    description: 'FAA approved Associate in Applied Science program providing technical,mechanical, and academic skills required to become an aircraft maintenance technician.',
  },
  {
    school: 'Spartanburg Community College',
    location: 'Spartanburg, SC',
    program: 'Civil Engineering Technology',
    years: '2006 - 2007',
    description: 'Associate of Applied Science program focused on infrastructure design, surveying, materials, and construction management',
  },
  {
    school: 'Spartanburg Community College',
    location: 'Spartanburg, SC',
    program: 'Machine Tool Technology',
    years: '2004 - 2006',
    description: 'Associate of Applied Science program teaching setup and operation of standard and computer numerical control (CNC) machine tools.',
  },
];
