import { ExternalLink, Github } from "lucide-react";
import FDS from "../assets/FDS.png";
import RTW from "../assets/RTW.png";
import { useTranslation } from "react-i18next";
import NEA from "../assets/NEA.png";
import Birthbook from "../assets/Birthbook.png";

export function Projects() {
  const { t, i18n } = useTranslation("projects");

  const projects = [
    {
      id: "project1",
      title: "Task Management App",
      description:
        "A full-stack task management solution with React and AWS. Features include user authentication, task assignment, template management, and progress tracking.",
      image: FDS,
      technologies: ["React.js", "AWS", "DynamoDB", "Lambda"],
      project_type: ["Web Application"],
      liveUrl: "https://www.freelancer-daily-scheduler.site/",
      githubUrl: "#",
      type: "real",
    },
    {
      id: "project2",
      title: "Event Company Website",
      description:
        "A responsive website for an event management company built with Vue, Firebase and AWS. It offers event calendar, artist profiles, backend management.",
      image: RTW,
      technologies: ["Vue.js", "AWS", "Firebase"],
      project_type: ["Website"],
      liveUrl: "https://reputation-tw.site/",
      githubUrl: "#",
      type: "real",
    },
    {
      id: "project3",
      title: "Nutrition Education Australia",
      description:
        "A responsive website for a nutrition education organisation built with Vue, Firebase and AWS. It offers nutrition consultation booking service, recipe listing, and backend management.",
      image: NEA,
      technologies: ["Vue.js", "AWS", "Firebase"],
      project_type: ["Website"],
      liveUrl: "https://main.d1i2uhjw00tqqg.amplifyapp.com/",
      githubUrl: "#",
      type: "practice",
    },
    {
      id: "project4",
      title: "Birthbook",
      description:
        "A responsive website for a nutrition education organisation built with Vue, Firebase and AWS. It offers nutrition consultation booking service, recipe listing, and backend management.",
      image: Birthbook,
      technologies: ["Swift"],
      project_type: ["IOS App"],
      liveUrl: "https://apps.apple.com/au/app/birthbook-birthday-reminder/id6755174931?l=en-GB",
      githubUrl: "#",
      type: "real",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 ">
      {/* Real */}
      <div className="container px-4 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">{t("site.real_title")}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t("site.real_title_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((project) => project.type === "real").map((project) => {
            const title = t(`projects_data.${project.id}.title`);
            const description = t(`projects_data.${project.id}.description`);
            const typeLabel = t(`projects_data.${project.id}.project_type`);
            return (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              {/* Image */}
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Header */}
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold leading-none mb-2 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.project_type.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    >
                      {typeLabel}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("site.live_demo")}
                </a>
                {/* <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a> */}
              </div>
            </div>
          )})}
        </div>        
      </div>

      {/* Real */}
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">{t("site.practice_title")}</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t("site.practice_title_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((project) => project.type === "practice").map((project) => {
            const title = t(`projects_data.${project.id}.title`);
            const description = t(`projects_data.${project.id}.description`);
            const typeLabel = t(`projects_data.${project.id}.project_type`);
            return (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              {/* Image */}
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Header */}
              <div className="p-6 pb-0">
                <h3 className="text-lg font-semibold leading-none mb-2 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.project_type.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    >
                      {typeLabel}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("site.live_demo")}
                </a>
                {/* <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a> */}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
