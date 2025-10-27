import { useState } from "react";
import { Calendar, MapPin, TrendingUp, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";

interface TimelineItem {
  type: 'experience' | 'education';
  title: string;
  company?: string;
  school?: string;
  location?: string;
  period: string;
  description?: string;
  achievements?: string[];
  skills?: string[];
  details?: string;
}

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      type: 'education' as const,
      title: "Bachelor of Technology in Electronics and Telecommunication Engineering",
      school: "Cummins College of Engineering for Women",
      period: "2018 - 2022",
      gpa: "3.2/4.0"
    },
    {
      type: 'experience' as const,
      title: "Graduate Research Assistant",
      company: "Syracuse University School of Information Studies",
      location: "Syracuse, NY",
      period: "March 2023 - August 2023",
      achievements: [
        "Compared UMAP and CNN techniques for reducing data dimensions on 10K data points, successfully cutting dimensions by 40% while maintaining data quality",
        "Created autoencoder models in Python to handle high dimensional datasets, which improved our processing speed by 15%"
      ],
      skills: ["Excel", "Python", "Data Cleaning", "Research", "Machine Learning"]
    },
    {
      type: 'education' as const,
      title: "Master of Science in Applied Data Science",
      school: "Syracuse University",
      period: "2022 - 2024",
      gpa: "3.8/4.0"
    },
    {
      type: 'experience' as const,
      title: "Research Data Analyst",
      company: "Syracuse University",
      location: "Syracuse, NY",
      period: "2024 - 2025",
      achievements: [
        "Built a complete data pipeline to collect 20,000+ Reddit posts and comments from specific subreddits using Python APIs, tracking sentiment patterns and user behavior across different online communities",
        "Cut data processing time significantly by cleaning text data through normalization, tokenization, and lemmatization which reduced overall data size by 35% and organized everything in SQL databases for easier analysis"
      ],
      skills: ["SQL", "Python", "Tableau", "Data Cleaning", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">EDUCATION & EXPERIENCE</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-500 to-red-400 -translate-x-1/2 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <motion.div
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="inline-block cursor-pointer"
                      >
                        <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:flex-row-reverse md:justify-start' : 'md:flex-row'} flex-row`}>
                          <span className="text-white/60 text-sm">{item.period}</span>
                          {item.type === 'experience' ? (
                            <Briefcase className="h-4 w-4 text-red-400" />
                          ) : (
                            <GraduationCap className="h-4 w-4 text-red-400" />
                          )}
                        </div>
                        <h3 className="text-xl text-white mb-1">{item.title}</h3>
                        <p className="text-white/80">
                          {item.type === 'experience' ? item.company : item.school}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Node */}
                    <div className="relative z-10 hidden md:block">
                      <motion.div
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-400 border-4 border-black shadow-lg shadow-red-500/50 cursor-pointer"
                      />
                    </div>

                    {/* Empty Side (for spacing) */}
                    <div className="flex-1 hidden md:block" />
                  </div>

                  {/* Hover Card - Desktop */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full mt-4 w-full md:w-[500px] z-20 hidden md:block ${
                          isLeft ? 'md:left-0' : 'md:right-0'
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <Card className="bg-black/90 border-white/20 backdrop-blur-sm shadow-2xl">
                          <CardContent className="p-6">
                            {item.type === 'experience' ? (
                              <>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                  <div>
                                    <h4 className="text-xl text-white mb-1">{item.title}</h4>
                                    <p className="text-lg text-white/80 mb-2">{item.company}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                                      <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {item.period}
                                      </div>
                                      {item.location && (
                                        <div className="flex items-center gap-1">
                                          <MapPin className="h-4 w-4" />
                                          {item.location}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <TrendingUp className="h-6 w-6 text-red-400" />
                                </div>
                                
                                
                                {item.achievements && item.achievements.length > 0 && (
                                  <div className="mb-4">
                                    <h5 className="mb-2 text-white">Key Achievements:</h5>
                                    <ul className="space-y-1">
                                      {item.achievements.map((achievement, idx) => (
                                        <li key={idx} className="text-sm text-white/70 flex items-start gap-2">
                                          <span className="text-red-400 mt-1">•</span>
                                          {achievement}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {item.skills && item.skills.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs border-white/30 text-white/80">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <div className="flex items-start justify-between gap-4 mb-4">
                                  <div>
                                    <h4 className="text-xl text-white mb-1">{item.title}</h4>
                                    <p className="text-lg text-white/80 mb-1">{item.school}</p>
                                    <p className="text-sm text-white/60">{item.period}</p>
                                  </div>
                                  <GraduationCap className="h-6 w-6 text-red-400" />
                                </div>
                                <p className="text-sm text-white/70">{item.gpa}</p>
                              </>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Cards - Always Visible */}
          <div className="mt-12 space-y-6 md:hidden">
            {experiences.map((item, index) => (
              <Card key={index} className="bg-black/80 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  {item.type === 'experience' ? (
                    <>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl text-white mb-1">{item.title}</h4>
                          <p className="text-lg text-white/80 mb-2">{item.company}</p>
                          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {item.period}
                            </div>
                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {item.location}
                              </div>
                            )}
                          </div>
                        </div>
                        <Briefcase className="h-6 w-6 text-red-400" />
                      </div>
                      
                      
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="mb-4">
                          <h5 className="mb-2 text-white">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-white/70 flex items-start gap-2">
                                <span className="text-red-400 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-white/30 text-white/80">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl text-white mb-1">{item.title}</h4>
                          <p className="text-lg text-white/80 mb-1">{item.school}</p>
                          <p className="text-sm text-white/60">{item.period}</p>
                        </div>
                        <GraduationCap className="h-6 w-6 text-red-400" />
                      </div>
                      <p className="text-sm text-white/70">{item.gpa}</p>
                    </>
                  )}
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
