import type { cvDataType } from "./types";

export function PrintedCv({ cvData }: { cvData: cvDataType }) {
  return (
    <div className="print:scale-100 scale-75 origin-top">
      <article className="font-serif w-[210mm] min-h-[297mm] p-[15mm] bg-white text-black shadow-md print:shadow-none print:w-full print:min-h-0 text-sm leading-relaxed space-y-6">
        <header className="space-y-1 pb-4 border-b border-neutral-300">
          <h1 className="text-3xl font-semibold tracking-tight">
            {cvData.generalInfo.name}
          </h1>
          <address className="not-italic flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600">
            <a
              className="hover:underline"
              href={"mailto:" + cvData.generalInfo.email}
            >
              {cvData.generalInfo.email}
            </a>
            <a
              className="hover:underline"
              href={`tel:${cvData.generalInfo.phone.replace(/\s/g, "")}`}
            >
              {cvData.generalInfo.phone}
            </a>
            <a className="hover:underline" href={cvData.generalInfo.website}>
              {cvData.generalInfo.website}
            </a>
          </address>
        </header>
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Summary
          </h2>
          <p>{cvData.generalInfo.summary}</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Technical skills
          </h2>
          {cvData.technicalSkills.map((skill) => {
            return (
              <div key={skill.id} className="flex gap-3 break-inside-avoid">
                <h3 className="font-semibold w-44 shrink-0">{skill.title}</h3>
                <p>{skill.skills}</p>
              </div>
            );
          })}
        </section>
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Projects
          </h2>
          {cvData.projects.map((project) => {
            return (
              <div key={project.id} className="space-y-1 break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <a
                    className="text-xs text-neutral-600 hover:underline"
                    href={project.link}
                  >
                    {project.link}
                  </a>
                </div>
                <p>{project.description}</p>
              </div>
            );
          })}
        </section>
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Work experience
          </h2>
          {cvData.experience.map((exp) => {
            return (
              <div key={exp.id} className="space-y-1 break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <time
                    className="text-xs text-neutral-600 shrink-0"
                    dateTime={exp.date}
                  >
                    {exp.date}
                  </time>
                </div>
                <p className="text-neutral-600 italic">{exp.companyName}</p>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </section>
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Education
          </h2>
          {cvData.education.map((ed) => {
            return (
              <div key={ed.id} className="space-y-1 break-inside-avoid">
                <h3 className="font-semibold">{ed.title}</h3>
                <p>{ed.description}</p>
              </div>
            );
          })}
        </section>
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Language skills
          </h2>
          {cvData.languages.map((lg) => {
            return (
              <div key={lg.id} className="flex gap-3 break-inside-avoid">
                <h3 className="font-semibold w-44 shrink-0">{lg.title}</h3>
                <p>{lg.description}</p>
              </div>
            );
          })}
        </section>
      </article>
    </div>
  );
}
