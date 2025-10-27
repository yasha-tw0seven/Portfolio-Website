import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skills = [
    "Python", "SQL", "R", "Tableau", "Power BI", "Excel", 
    "Machine Learning", "Statistical Analysis", "DAX", "React", "Tailwind CSS", "Data Cleaning", "Data Modeling"
  ];

  const tools = [
    "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly",
    "PostgreSQL", "MySQL", "MongoDB", "Apache Spark", "Jupyter", "Git", "Looker Studio", "dbt",
    "Docker", "AWS", "Google Analytics", "Snowflake","Data Warehouse", "Snowflake", "MongoDB", "Neo4j", "Elasticsearch", "ETL"
  ];

  const certifications = [
    "Snowflake Essentials Data Warehouse",
    "AWS Certified Cloud Practitioner"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">SKILLS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-primary">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </section>
  );
}