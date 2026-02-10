import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mickael",
  lastName: "Bon",
  name: "Mickael Bon",
  role: "Financial Controller",
  avatar: "/images/Bon_Mickael.jpg",
  email: "contact@mickaelbon.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Paris'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about analysis and finance</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mikaellll",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mickael-bon-44473a7b/",
    essential: true,
  },
 {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning data into actionable insights</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Analytics</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Mickael, a Financial Controller <Text as="span" size="xl" weight="strong">in corporate finance</Text>, specializing in performance analysis <br /> and budget optimization to support better business decisions.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
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
        Mickael is a corporate finance Financial Controller with a focus on turning complex financial data into clear, actionable insights. His work spans performance analysis, budgeting, and strategic financial decision-making.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Imprimerie Magenta Numeriques",
        timeframe: "2024 - 2026",
        role: "Customer Billing Officer",
        achievements: [
          <>
            Preparation, verification, and dispatch of customer quotes and invoices.
          </>,
          <>
            Monitoring payments, performing customer follow-ups, and managing overdue accounts.
          </>,
          <>
            Linking and submitting accounting documents for monthly closing.
          </>,
          <>
            Implementing automations (n8n + OpenAI) to streamline pricing requests and provide faster responses.
          </>,
          <>
            Analyzing customer KPIs (DSO, outstanding balances, delinquency rate) and preparing monthly reports to optimize cash flow.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bachelor's degree Management sciences",
        description: <>Colbert University, Aix/Marseille.</>,
      },
      {
        name: "DUT business and administration management",
        description: <>IUT St Jerome, Aix/Marseille.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "PowerBI",
        description: (
          <>Power BI dashboards delivering real-time insights for smarter financial decisions.</>
        ),
        tags: [
          {
            name: "excel",
            icon: "excel",
          },
          {
            name: "powerBI",
            icon: "powerBI",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/excel.avif",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/gallery/powerBI.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "pyton in excel",
        description: (
          <>Automate Excel with Python: faster analysis, fewer errors, scalable workflows</>
        ),
        tags: [
          {
            name: "python",
            icon: "python",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/gallery/python-in-excel1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about control and analysis...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://mickaelbon.com
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/excel.avif",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/powerBI.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/python-in-excel.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/deezer_recommendation.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/Tesla_case.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/deezer.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/Tesla_case1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/ange.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
