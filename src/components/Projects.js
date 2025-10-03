import { ExternalLink, Github } from "lucide-react";
import FDS from "../assets/FDS.png";

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description:
      "A full-stack task management solution with React and AWS. Features include user authentication, task assignment, template management, and progress tracking.",
    image: FDS,
    technologies: ["React", "AWS", "DynamoDB", "Lambda"],
    liveUrl: "https://www.freelancer-daily-scheduler.site/",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my recent projects that showcase my skills in
            full-stack development, cloud computing, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                    >
                      {tech}
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
                  Live Demo
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
          ))}
        </div>
      </div>
    </section>
  );
}
