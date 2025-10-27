import { Mail, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const darkRed = "#8B0000";

  const contactInfo = [
    {
      icon: <Mail className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" style={{ color: darkRed }} />,
      label: "Email",
      href: "mailto:yashanjali.ch2602@outlook.com",
    },
    {
      icon: <Linkedin className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" style={{ color: darkRed }} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yashanjalichavan",
    },
    {
      icon: <Github className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" style={{ color: darkRed }} />,
      label: "GitHub",
      href: "https://github.com/yasha-tw0seven",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 text-primary" style={{ color: darkRed }}>
          CONTACT
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to chatting about data, new opportunities, or exciting projects.
          <br />Feel free to reach out or connect with me below!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-transparent shadow-none border-none flex-1 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,0,0,0.6)]"
              style={{ boxShadow: "none", border: "none" }}
            >
              <CardContent className="p-8 flex flex-col items-center justify-center group">
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4"
                >
                  {info.icon}
                  <span
                    className="text-lg font-medium transition-colors duration-300"
                    style={{ color: darkRed }}
                  >
                    {info.label}
                  </span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
