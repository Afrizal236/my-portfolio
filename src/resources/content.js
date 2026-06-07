import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Afrizal Ramy",
  lastName: "Diaman",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  email: "ramydiaman@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName} Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Afrizal236",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammadwildanyulioardana/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ardnskyyy/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning Ideas into Scalable Digital Products.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Ramy</strong>
      </>
    ),
    href: "/work",
  },
  subline: (
    <>
      Hi! I’m {person.name}, a Software Engineer passionate about building
      reliable, user-focused applications and transforming complex challenges
      into efficient digital solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a Full-Stack Software Engineer with expertise across both frontend
        and backend, I build end-to-end systems that are not only robust, but
        also seamless and intuitive. With hands-on internship experience as a
        Data Scientist and AI Engineer, I turn raw data into intelligence and
        ship AI-powered products — from crafting responsive, interactive
        interfaces to designing scalable server-side architectures that drive
        real business impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Diskominfo Surabaya",
        timeframe: "August 2025 - December 2025",
        role: "Website Developer Intern",
        achievements: [
          <>
            <strong>UI/UX Design & Prototyping:</strong> Designed wireframes and
            high-fidelity mockups for the Surabaya Regional Portal and PPID
            Website using Figma, including multi-level navigation
            (region–district–village), interactive map visualization, and a
            complete design system covering typography, color scheme, spacing,
            and reusable UI components.
          </>,
          <>
            <strong>Frontend Development with Next.js:</strong> Developed
            tourism information pages (Event, Hotel, Heritage, and Culinary) on
            the Surabaya.go.id website using Next.js with React.js and
            TypeScript, implementing dynamic components, responsive layouts with
            Material-UI, and interactive navigation features.
          </>,
          <>
            <strong>API Integration & Data Fetching:</strong> Integrated the
            frontend with backend REST APIs using React Query (useQuery hook)
            for asynchronous data fetching, complete with caching (staleTime: 10
            minutes), retry mechanism, and loading/error state handling for
            dynamic content rendering.
          </>,
          <>
            <strong>ERP System Customization (Odoo):</strong> Customized the
            PPID module on the Odoo ERP platform by developing custom XML-based
            view layouts, QWeb templates for frontend pages, and Python logic to
            manage data structure and system functionality in accordance with
            the approved Figma design.
          </>,
          <>
            <strong>Statistical Data Visualization:</strong> Designed an
            interactive regional comparison feature concept for the Surabaya
            Regional Portal, enabling side-by-side analysis of key indicators
            such as population density, area size, and public facility
            availability across districts and villages.
          </>,
          <>
            <strong>Design System Implementation:</strong> Developed and
            documented a comprehensive design system as a visual and technical
            reference for Surabaya.go.id, ensuring consistency across
            components, interaction patterns, and multi-device responsiveness
            throughout the portal's various modules.
          </>,
        ],
        images: [
          {
            src: "/images/work/website-developer1.jpeg",
            alt: "All Team",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/website-developer2.jpg",
            alt: "me",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PT Mitra Talenta Grup (Celerates)",
        timeframe: "Maret 2026 - June 2026",
        role: "Data scientist & AI Engineer Intern",
        achievements: [
          <>
            <strong>Data Collection & Preprocessing:</strong> Collected,
            cleaned, and transformed raw datasets into structured formats ready
            for analysis and model training, ensuring data quality and
            consistency as the foundation for accurate and reliable AI-driven
            solutions.
          </>,
          <>
            <strong>Predictive Modeling & Machine Learning:</strong> Built and
            trained machine learning models using Python and TensorFlow for
            forecasting and trend prediction tasks, enabling businesses to make
            smarter, data-driven decisions and stay ahead of market changes.
          </>,
          <>
            <strong>Generative AI Development:</strong> Developed generative AI
            pipelines and intelligent automation workflows using LangChain,
            designing systems capable of producing AI-generated content,
            insights, and responses tailored to specific business contexts and
            user needs.
          </>,
          <>
            <strong>Data Analysis & Insight Generation:</strong> Performed
            exploratory data analysis (EDA) and statistical modeling to uncover
            patterns, correlations, and actionable insights from complex
            datasets, transforming raw data into strategic intelligence for
            organizational decision-making.
          </>,
          <>
            <strong>Personalization & Recommendation Systems:</strong> Designed
            and implemented data-driven personalization models to enhance user
            experiences, leveraging behavioral data and machine learning
            algorithms to deliver relevant, context-aware recommendations at
            scale.
          </>,
          <>
            <strong>Process Optimization with AI:</strong> Applied AI and data
            science methodologies to identify inefficiencies and automate
            repetitive business processes, helping organizations optimize
            operations, reduce costs, and unlock new possibilities through
            intelligent, data-powered automation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/dewo-robotic1.jpg",
            alt: "All Team",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/dewo-robotic2.jpg",
            alt: "All Team",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Surabaya State University | 2023 - present",
        description: <>informatics engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>JavaScript | TypeScript | Python | C++</>,
        images: [],
      },
      {
        title: "Frontend Frameworks",
        description: <>React.js | Next.js</>,
        images: [],
      },
      {
        title: "Backend Frameworks",
        description: <>Node.js | Express.js | NestJS</>,
        images: [],
      },
      {
        title: "Database & ORM",
        description: <>PostgreSQL | Redis | SQL | NoSQL</>,
        images: [],
      },
      {
        title: "Architecture & DevOps",
        description: <>Docker | Git</>,
        images: [],
      },
      {
        title: "Machine Learning & Services",
        description: <>TensorFlow | OpenCV | Scikit-learn | FastAPI | Streamlit </>,
        images: [],
      },
    ],
  },
  otherSkill: {
    display: true, // set to false to hide this section
    title: "Other skills",
    skills: [
      {
        title: "UI/UX Design",
        description: <>Figma | Wireframing | Prototyping</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Technologi",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
