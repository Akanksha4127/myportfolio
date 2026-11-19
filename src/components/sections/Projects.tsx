import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
	{
		title: "CRM Platform |",
		description:
			"Built frontend interfaces for a CRM platform designed to centralise customer profiles, interactions, sales activities and team tasks.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
		techStack: ["React", "Tailwind CSS"],
		// liveUrl: "https://example.com",
		githubUrl: "https://github.com/Akanksha4187",
		featured: true,
	},
	{
		title: "Cute and Glow |",
		description:
			"Developed a responsive beauty and skincare frontend interface focused on product discovery and a smooth online shopping experience.",
		image:
			"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&h=500&fit=crop",
		techStack: ["React", "Tailwind CSS"],
		liveUrl: "https://example.com",
		githubUrl: "https://github.com/Akanksha4187",
		featured: true,
	},
	{
		title: "Bacteria Classification",
		description:
			" Developed an SVM-based machine learning application to classify bacterial images as Grampositive or Gram-negative.",
		image:
			"https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
		techStack: ["Python", "Flask", "CSS", "HTML", "Machine Learning"],
		// liveUrl: "https://example.com",
		githubUrl: "https://github.com/Akanksha4187",
		featured: false,
	},
	{
		title: "EMPOWERED, A LIVE ONLINE STUDY PLATFORM |",
		description:
			"Developed a full-stack MERN single-page web app connecting tutors and students with features like authentication, video calling, live whiteboard, real-time chat, and material sharing for a complete virtual classroom experience.",
		image:
			"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
		techStack: ["React", "Tailwind Css"],
		// liveUrl: "https://example.com",
		githubUrl: "https://github.com/Akanksha4187",
		featured: false,
	},
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in design and
            development, from concept to production.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover-lift ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project image */}
              <div className="relative h-40 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}

                {/* Quick links overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            <a href="https://github.com/Akanksha4127">View All Projects</a>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
