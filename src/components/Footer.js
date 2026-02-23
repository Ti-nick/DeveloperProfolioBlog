import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation("common");

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Developer Info */}
          <div className="space-y-4">
            <h3 className="font-medium">Blue Ambr Technology</h3>
            <p className="text-sm text-muted-foreground">
              ‘{t("footer.quote")}’
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
              <a
                href="http://www.instagram.com/blue_ambr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          {/* <div className="space-y-4">
            <h3 className="font-medium">{t("footer.menu")}</h3>
            <div className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.home")}
              </Link>
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.about")}
              </Link>
              <Link
                to="/projects"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.projects")}
              </Link>
              <Link
                to="/blog"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.blog")}
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.contact")}
              </Link>
            </div>
          </div> */}

          {/* Services */}
          {/* <div className="space-y-4">
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
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Blue Ambr Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
