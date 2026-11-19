import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Akanksha | UI/UX Designer & Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Akanksha, a UI/UX Designer and Frontend developer Developer crafting beautiful digital experiences with React, TypeScript, and modern web technologies."
        />
        <meta
          property="og:title"
          content="Akanksha | UI/UX Designer & Frontend Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Akanksha, a UI/UX Designer and Frontend Developer crafting beautiful digital experiences."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://alexchen.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
