import type { cvDataType } from "./types";

export function PrintedCv({ cvData }: { cvData: cvDataType }) {
  return (
    <div>
      <section>
        <h1>{cvData.generalInfo.name}</h1>
        <div>
          <a href={"mailto:" + cvData.generalInfo.email}>
            {cvData.generalInfo.email}
          </a>
          <a href={`tel:${cvData.generalInfo.phone.replace(/\s/g, "")}`}>
            {cvData.generalInfo.phone}
          </a>
          <a href={cvData.generalInfo.website}>{cvData.generalInfo.website}</a>
        </div>
      </section>
      <section>
        <h2>Summary</h2>
        <p>{cvData.generalInfo.summary}</p>
      </section>
      <section>
        <h2>Technical skills</h2>
        {cvData.technicalSkills.map((skill) => {
          return (
            <div id={skill.id}>
              <h4>{skill.title}</h4>
              <p>{skill.skills}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Projects</h2>
        {cvData.projects.map((project) => {
          return (
            <div id={project.id}>
              <div>
                <h3>{project.title}</h3>
                <a href={project.link}></a>
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
            <div id={exp.id}>
              <div>
                <h4>{exp.title}</h4>
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
            <div id={ed.id}>
              <h4>{ed.title}</h4>
              <p>{ed.description}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h2>Language skills</h2>
        {cvData.languages.map((lg) => {
          return (
            <div id={lg.id}>
              <h4>{lg.title}</h4>
              <p>{lg.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
