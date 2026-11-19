import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  // {
  //   degree: "Master of Science in Computer Science",
  //   university: "Stanford University",
  //   location: "California, USA",
  //   year: "2020 - 2022",
  //   description:
  //     "Specialized in Human-Computer Interaction and Software Engineering. Thesis on adaptive user interfaces.",
  // },
  {
    degree: "Bachelor of Science in Computer Science",
    university: "Usha Martin University",
    location: "Ranchi, jharkhand",
    year: "2021 - 2025",
    description:
      "Focus on Full stack development ",
  },
  {
    degree: "Web Designer Certification",
    Company: "Anounz Future OPC Pvt. LTD",
    location: "Online",
    year: "2024",
    description:
      "Comprehensive program covering user research, prototyping, and design thinking methodologies.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A strong academic foundation combined with continuous learning keeps
            me at the forefront of design and technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-2.75 top-10 bottom-0 w-px bg-linear-to-b from-primary/50 to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Content card */}
              <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover-lift group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm truncate">
                        {item.university}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="font-mono">{item.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
