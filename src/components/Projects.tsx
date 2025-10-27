import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, ReferenceLine } from "recharts";

export function Projects() {
  const costData = [
    { category: 'young-adults', cost: 1900},
    { category: 'adults', cost: 3200},
    { category: 'middle-aged', cost: 5400},
    { category: 'older-adults', cost: 7400}
  ];

  const classSegments = [
    { name: 'Engineering', value: 38.04, color: '#808000' },
    { name: 'Maths', value: 27.17, color: '#556B2F' },
    { name: 'Econ', value: 21.74, color: '#6B8E23' },
    { name: 'English', value: 13.04, color: '#B5B35C' },
  ];

  const msftStockData = [
    { date: "Day 1", actual: 340.2, predicted: 342.5 },
    { date: "Day 2", actual: 345.6, predicted: 346.1 },
    { date: "Day 3", actual: 348.3, predicted: 349.8 },
    { date: "Day 4", actual: 352.1, predicted: 353.9 },
  ];

  const projects = [
    {
      id: "cost-analysis",
      title: "Healthcare Cost Analysis",
      tech: ["R", "Shiny R", "Machine Learning"],
      impact: "Enabled data-driven healthcare cost management by identifying key demographic segments with high medical expenditures",
      github: "https://github.com/yasha-tw0seven/Healthcare-Cost-Prediction",
      insights: [
        "Analyzed healthcare management data in R to identify key factors driving medical costs",
        "Built a Random Forest model that predicts healthcare expenses with 79.5% accuracy",
        "Created an interactive Shiny R application that combines predictive analytics with comprehensible visualizations, helping healthcare managers make better spending decisions",
      ],
      visualization: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Cost"]}
              labelFormatter={(label) => `Category: ${label}`}
            />
            <Legend />
            <Bar dataKey="cost">
              <Cell key="young-adults" fill="#f87171" />   {/* red-400 */}
              <Cell key="adults" fill="#fb923c" />         {/* orange-400 */}
              <Cell key="middle-aged" fill="#facc15" />    {/* yellow-400 */}
              <Cell key="older-adults" fill="#4ade80" />   {/* green-400 */}
            </Bar>
            <ReferenceLine
              y={4800}
              label={{
                value: "High Cost Threshold",
                position: "top",
                fill: "#ef4444",
                fontSize: 12,
              }}
              stroke="#ef4444"
              strokeDasharray="5 5"
            />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: "class-segmentation",
      title: "University Data Warehouse & Business Intelligence",
      tech: ["SQL", "Power BI", "Data Warehouse", "Snowflake", "Excel", "dbt Cloud"],
      impact: "Centralized academic and resource data into a unified warehouse, enabling self-service analytics and automation",
      github: "https://github.com/yasha-tw0seven/University-Data-Warehouse-Business-Intelligence",
      insights: [
        "Built a comprehensive data warehouse using fact and dimension modeling in Excel, creating 8 dimensional tables to better organize academic data",
        "Set up ETL pipelines with dbt Cloud, Snowflake, and SQL to automatically pull data from 3 different source systems into our warehouse",
        "Created Power BI dashboards tracking enrollment numbers, student performance, and resource usage for university departments",
      ],
      visualization: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              data={classSegments}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={({ name, value }) => ` ${name}: ${value}%`}
            >
              {classSegments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )
    },
    {
      id: "stock-analytics",
      title: "MSFT Forecasting",
      tech: ["Python", "Machine Learning", "Sentiment Analysis", "Matplotlib"],
      impact: "Improved short-term stock trend prediction accuracy, enhancing investment decisions",
      github: "https://github.com/yasha-tw0seven/Microsoft-Stock-Price-Forecasting",
      insights: [
        "Developed a sentiment analysis tool to process 5K+ Microsoft-related tweets daily, reaching 78% accuracy in classifying tweet sentiment",
        "Built classification models using 2 years of historical stock data combined with sentiment scores which performed 15% better than regression models for short term predictions",
        "Found that stock prices averaged 12% higher during periods of positive social media sentiment",
      ],
      visualization: (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={msftStockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
            <Tooltip />
            <Line type="monotone" dataKey="actual" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">PROJECTS</h2>
        </div>

        <Tabs defaultValue={projects[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            {projects.map((project) => (
              <TabsTrigger key={project.id} value={project.id} className="text-sm text-primary data-[state=active]:text-primary">
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-primary">{project.title}</CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary hover:bg-primary hover:text-white"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 text-primary">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-3 text-primary">Business Impact</h4>
                        <p className="text-muted-foreground">
                          {project.impact}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-primary">Key Insights</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {project.insights.map((insight, index) => (
                            <li key={index}>• {insight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-background p-4 rounded-lg border">
                      <h4 className="mb-4 text-center text-primary">Data Visualization</h4>
                      {project.visualization}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        </div>
      </div>
    </section>
  );
}