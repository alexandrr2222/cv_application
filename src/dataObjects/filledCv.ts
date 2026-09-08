import type { cvDataType } from "../types";

export const filledCv: cvDataType = {
  generalInfo: {
    name: "Jana Nováková",
    email: "jana.novakova@example.com",
    phone: "+420 777 123 456",
    website: "github.com/jnovakova",
    summary:
      "Frontend developer with a background in data analysis, focused on React and TypeScript. I like building interfaces that stay readable as they grow, and I care about accessibility and clean state management. Looking for a junior role where I can learn from code review and ship regularly.",
  },
  technicalSkills: [
    {
      id: "skill-1",
      title: "Languages",
      skills: "TypeScript, JavaScript (ES2022), HTML, CSS, SQL",
    },
    {
      id: "skill-2",
      title: "Frameworks & libraries",
      skills: "React, React Router, Tailwind CSS, Vite, Vitest",
    },
    {
      id: "skill-3",
      title: "Tools",
      skills: "Git, GitHub Actions, Figma, Postman, Linux",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "CV Builder",
      link: "github.com/jnovakova/cv-builder",
      description:
        "Single-page CV generator built with React and TypeScript. Live preview updates as you type, state persists to localStorage through a custom hook, and the result prints straight to A4 PDF via print stylesheets.",
    },
    {
      id: "project-2",
      title: "Transit Board",
      link: "github.com/jnovakova/transit-board",
      description:
        "Departure board for Prague public transport using the Golemio open data API. Handles loading and error states explicitly, caches responses, and refreshes on an interval.",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Junior Data Analyst",
      companyName: "Kompas Retail s.r.o.",
      date: "March 2023 – Present",
      description:
        "Built internal reporting dashboards and automated a weekly stock report that previously took two days of manual work. Wrote SQL for the reporting layer and gradually took over the small React frontend the team used.",
    },
    {
      id: "exp-2",
      title: "Accounting Assistant",
      companyName: "Vávra & Partners",
      date: "September 2021 – February 2023",
      description:
        "Processed invoices and payroll for a portfolio of small clients. Wrote scripts to convert bank statements into the accounting software's import format, which is where I started programming.",
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "Bc. Economics and Management, University of Economics, Prague",
      description:
        "Bachelor's degree with a focus on quantitative methods and statistics. Thesis on forecasting seasonal demand in retail.",
    },
  ],
  languages: [
    {
      id: "lang-1",
      title: "Czech",
      description: "Native",
    },
    {
      id: "lang-2",
      title: "English",
      description:
        "C1 — daily working language, comfortable in technical discussions",
    },
  ],
};
