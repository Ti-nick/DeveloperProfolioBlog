const skills = [
  "Java",
  "Python",
  "React",
  "Vue.js",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "REST APIs",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-muted-foreground">
              Get to know more about my background, skills, and what drives me
              as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Story & Experience */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate full-stack developer who started from a
                    non-technical background. During my time at Apple, I
                    discovered my interest in IT and decided to fully pursue it.
                  </p>
                  <p>
                    I love being creative and bringing ideas to life. Over the
                    years, I’ve worked on projects ranging from web applications
                    and cloud solutions to mobile app development, each teaching
                    me something new along the way.
                  </p>
                  <p>
                    Outside of coding, I enjoy writing technical blog posts,
                    reading about technology and self-improvement, and exploring
                    the latest tools that push my projects forward.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">
                      Master in Information Technology
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      July 2024 - Present
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-xl mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <h4 className="font-medium">What I'm currently learning:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                    Vue.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
