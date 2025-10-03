import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Developer Info */}
          <div className="space-y-4">
            <h3 className="font-medium">Nick Choi</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Ti-nick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nick-c-8919131aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-medium">Navigation</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-medium">Services</h3>
            <div className="space-y-2 text-sm">
              <span className="block text-muted-foreground">
                Web Development
              </span>
              <span className="block text-muted-foreground">
                Cloud Services
              </span>
              <span className="block text-muted-foreground">
                Technical Consulting
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>nick.choi.it@gmail.com</p>
              <p>Melbourne, Australia</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nick Choi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
