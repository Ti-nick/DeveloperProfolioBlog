import { Github, Linkedin, Mail } from "lucide-react";
import IMG_1526 from "../assets/IMG_1526.jpg";
import { NavLink, Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl">Hi, I'm Nick</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Focused on delivering solutions across networking, web
                applications, and cloud technologies with curiosity and
                dedication.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-lg font-medium text-background shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View My Work
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4 pt-4 gap-2">
              <a
                href="https://github.com/Ti-nick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-c-8919131aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <img
                src="IMG_1526.jpg"
                alt="Developer workspace"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
