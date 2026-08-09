import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InterestsAndSkills from "@/components/InterestsAndSkills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import ExperienceAndLeadership from "@/components/ExperienceAndLeadership";
import ProfessionalMemberships from "@/components/ProfessionalMemberships";
import Certifications from "@/components/Certifications";
import TestimonialsAndContact from "@/components/TestimonialsAndContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <InterestsAndSkills />
        <Projects />
        <Publications />
        <ExperienceAndLeadership />
        <ProfessionalMemberships />
        <Certifications />
        <TestimonialsAndContact />
      </main>
      <Footer />
    </>
  );
}

