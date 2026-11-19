import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Server,
  Figma,
  Layers,
  Paintbrush,
  Layout,
  FileCode,
  Database,
  Cloud,
  Workflow,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", icon: Figma, level: 95 },
      { name: "Wireframing", icon: Layout, level: 90 },
      { name: "Prototyping", icon: Layers, level: 88 },
      { name: "Design Systems", icon: Paintbrush, level: 92 },
    ],
  },
  {
    title: "Frontend",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", icon: FileCode, level: 95 },
      { name: "HTML", icon: Zap, level: 90 },
      // { name: "TypeScript", icon: FileCode, level: 88 },
      { name: "Tailwind CSS", icon: Paintbrush, level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      // { name: "Node.js", icon: Server, level: 85 },
      // { name: "Firebase", icon: Cloud, level: 88 },
      // { name: "APIs", icon: Workflow, level: 50 },
      { name: "SQL", icon: Database, level: 82 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning design to deployment, enabling
            end-to-end product development.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />

              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
