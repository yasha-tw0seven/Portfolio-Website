import { ArrowDown, Download, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl text-primary">
                Yashanjali Chavan
              </h1>
              <p className="mt-4 text-[15px] md:text-[18px] text-foreground tracking-wide font-light">
                Data Analysis | Business Intelligence
              </p>
            </div>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl">
              Specialized in statistical analysis, data visualization, and business intelligence, 
              I design solutions from automated pipelines and data warehouses to predictive models and interactive dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://raw.githubusercontent.com/yasha-tw0seven/Portfolio-Website/main/ychavan_resume.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group flex items-center bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded transition-colors">
                  <FileText className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  Resume
                </Button>
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon"
                onClick={() => window.open("https://www.linkedin.com/in/yashanjalichavan", "_blank")}
                className="text-primary hover:text-black transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon"
                onClick={() => window.open("https://github.com/yasha-tw0seven", "_blank")}
                className="text-primary hover:text-black transition-colors"> 
                <Github className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon"
                onClick={() => window.open("mailto:yashanjali.ch2602@outlook.com")}
                className="text-primary hover:text-black transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <ImageWithFallback
                  src="https://raw.githubusercontent.com/yasha-tw0seven/Portfolio-Website/refs/heads/main/ychavan.jpeg"
                  alt="Yashanjali Chavan - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div> 
              <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
                onClick={() => {
                  const section = document.getElementById("about"); // ID of the section to scroll to
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>
                <ArrowDown className="h-6 w-6 animate-bounce" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}