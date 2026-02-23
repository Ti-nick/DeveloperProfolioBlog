import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t, i18n } = useTranslation("contact");
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">{t("contact_heading")}
            </h2>
            <p className="text-muted-foreground">
              {t("contact_subheading")}
            </p>
          </div>

          {/* Two equal blocks */}
          <div className="grid gap-12">
            {/* Contact Info */}
            <div className="text-center space-y-6">
              <h3 className="text-xl">
                {t("contact_info_heading")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>nick.choi.it@gmail.com</span>
                </div>
                {/* 
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span></span>
            </div> 
            */}
                <a href="http://www.instagram.com/blue_ambr" target="_blank" className="flex items-center justify-center underline gap-3">
                  <Instagram className="h-5 w-5 text-muted-foreground" />
                  <span>@blue_ambr</span>
                </a>
                {/* <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Melbourne, Australia</span>
                </div> */}
              </div>
            </div>

            {/* Follow Me */}
            <div className="text-center space-y-6">
              <h3 className="text-xl">
                {t("follow_me")}
              </h3>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/Ti-nick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nick-c-8919131aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
