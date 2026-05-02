import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { TechStack } from "@/sections/TechStack";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bernardo Rodrigues — Software Developer | Engineering" },
      {
        name: "description",
        content:
          "Portfolio of Bernardo Rodrigues, software developer focused on backend and fullstack — .NET, Laravel, Python, React. Software Engineering at PUC Minas.",
      },
      { property: "og:title", content: "Bernardo Rodrigues — Software Developer" },
      {
        property: "og:description",
        content:
          "Backend & fullstack developer building real solutions with .NET, Laravel, Python and React.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
