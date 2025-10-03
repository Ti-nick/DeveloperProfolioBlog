import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </div>

          {/* Two equal blocks */}
          <div className="grid gap-12">
            {/* Contact Info */}
            <div className="text-center space-y-6">
              <h3 className="text-xl">Contact Information</h3>
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
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Melbourne, Australia</span>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div className="text-center space-y-6">
              <h3 className="text-xl">Follow Me</h3>
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
