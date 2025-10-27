import { BarChart3, Brain, Database, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Data Processing",
      description: "Expert in cleaning, transforming, and managing large datasets"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Visualization",
      description: "Creating compelling dashboards and interactive reports"
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Machine Learning",
      description: "Building predictive models and statistical analysis"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Business Impact",
      description: "Driving strategic decisions through data insights"
    }
  ];

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-4"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">ABOUT ME</h2>
        </div>

          <div className="flex flex-col items-center gap-8">
            <p className="text-muted-foreground mb-6 max-w-3xl">
              I’m a passionate and creative data enthusiast who’s danced with data in every form, from exploring research studies and training machine learning models to cleaning, organizing, and building data warehouses that make analytics effortless.
            </p>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              I’ve built smooth ETL pipelines, crunched data with Python, R, and SQL, and turned numbers into insightful dashboards with Power BI and Tableau. AWS Certified and endlessly curious, I love experimenting with tools like Docker, MongoDB, and Apache Drill to make data do cool, meaningful things.
            </p>

            <div className="grid md:grid-cols-2 gap-4 justify-items-center w-full max-w-4xl">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md bg-black transition-all duration-300 w-full h-full flex"
                >
                  <CardContent className="p-6 text-center flex flex-col justify-center items-center h-full">
                    <div className="flex flex-col items-center gap-2 mb-2">
                      <div>{highlight.icon}</div>
                      <h4
                        className="font-normal transition-colors duration-300"
                        style={{ color: "#8B0000" }}
                      >
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-sm text-white transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
