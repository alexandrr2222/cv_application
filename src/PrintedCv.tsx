import { PrintedCvSection } from "./PrintedCvComponents/PrintedCvSection";
import type { cvDataType } from "./types";
import { urlChecker } from "./helperFunction/urlChecker";
import { SectionHeader } from "./PrintedCvComponents/SectionHeader";

export function PrintedCv({ cvData }: { cvData: cvDataType }) {
  return (
    <div className=" sticky top-33 self-start print:static">
      <div className="zoom-[0.75] print:zoom-[1]">
        <article className="font-serif w-[210mm] min-h-[297mm] p-[15mm] bg-white text-black shadow-md print:shadow-none print:w-full print:min-h-0 text-sm leading-relaxed space-y-6">
          <header
            className={`space-y-1 pb-4 ${cvData.generalInfo.name !== "" ? "border-b border-neutral-300" : ""}`}
          >
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
              <a
                className="hover:underline"
                href={urlChecker(cvData.generalInfo.website)}
              >
                {cvData.generalInfo.website}
              </a>
            </address>
          </header>
          {cvData.generalInfo.summary.length > 0 && (
            <section className="space-y-2">
              <SectionHeader label="Summary" />
              <p>{cvData.generalInfo.summary}</p>
            </section>
          )}
          <PrintedCvSection
            label="Technical skills"
            cvDataArray={cvData.technicalSkills}
            renderItem={(skill) => (
              <div key={skill.id} className="flex gap-3 break-inside-avoid">
                <h3 className="font-semibold shrink-0">{skill.title}</h3>
                <p>{skill.skills}</p>
              </div>
            )}
          />
          <PrintedCvSection
            label="Projects"
            cvDataArray={cvData.projects}
            renderItem={(project) => (
              <div key={project.id} className="space-y-1 break-inside-avoid">
                <div className="flex items-baseline  gap-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <a
                    className="text-xs text-neutral-600 hover:underline"
                    href={urlChecker(project.link)}
                  >
                    {project.link}
                  </a>
                </div>
                <p>{project.description}</p>
              </div>
            )}
          />
          <PrintedCvSection
            label="Work experience"
            cvDataArray={cvData.experience}
            renderItem={(exp) => (
              <div key={exp.id} className="space-y-1 break-inside-avoid">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <span className="text-xs text-neutral-600 shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-neutral-600 italic">{exp.companyName}</p>
                <p>{exp.description}</p>
              </div>
            )}
          />
          <PrintedCvSection
            label="Education"
            cvDataArray={cvData.education}
            renderItem={(ed) => (
              <div key={ed.id} className="space-y-1 break-inside-avoid">
                <h3 className="font-semibold">{ed.title}</h3>
                <p>{ed.description}</p>
              </div>
            )}
          />
          <PrintedCvSection
            label="Languages"
            cvDataArray={cvData.languages}
            renderItem={(lg) => (
              <div key={lg.id} className="flex gap-3 break-inside-avoid">
                <h3 className="font-semibold shrink-0">{lg.title}</h3>
                <p>{lg.description}</p>
              </div>
            )}
          />
        </article>
      </div>
    </div>
  );
}
