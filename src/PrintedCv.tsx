import type { cvDataType } from "./types";

export function PrintedCv({ cvData }: { cvData: cvDataType }) {
  return (
    <article>
      <header>
        <h1>{cvData.generalInfo.name}</h1>
        <address>
          <a href={"mailto:" + cvData.generalInfo.email}>
            {cvData.generalInfo.email}
          </a>
          <a href={`tel:${cvData.generalInfo.phone.replace(/\s/g, "")}`}>
            {cvData.generalInfo.phone}
          </a>
          <a href={cvData.generalInfo.website}>{cvData.generalInfo.website}</a>
        </address>
      </header>
      <section>
        <h2>Summary</h2>
        <p>{cvData.generalInfo.summary}</p>
      </section>
      <section>
        <h2>Technical skills</h2>
        {cvData.technicalSkills.map((skill) => {
          return (
            <div key={skill.id}>
              <h3>{skill.title}</h3>
              <p>{skill.skills}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Projects</h2>
        {cvData.projects.map((project) => {
          return (
            <div key={project.id}>
              <div>
                <h3>{project.title}</h3>
                <a href={project.link}>{project.link}</a>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Work experience</h2>
        {cvData.experience.map((exp) => {
          return (
            <div key={exp.id}>
              <div>
                <h3>{exp.title}</h3>
                <time dateTime={exp.date}>{exp.date}</time>
              </div>
              <p>{exp.companyName}</p>
              <p>{exp.description}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Education</h2>
        {cvData.education.map((ed) => {
          return (
            <div key={ed.id}>
              <h3>{ed.title}</h3>
              <p>{ed.description}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Language skills</h2>
        {cvData.languages.map((lg) => {
          return (
            <div key={lg.id}>
              <h3>{lg.title}</h3>
              <p>{lg.description}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
}
