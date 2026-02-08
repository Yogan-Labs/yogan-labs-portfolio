import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Circle } from "lucide-react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Software Engineer — Production-ready APIs
            </h1>

            <p className="mt-4 text-zinc-300 max-w-3xl">
              I build secure, reusable backend APIs with NestJS, Express,
              MongoDB, and PostgreSQL — focused on real-world use, not demos.
            </p>
          </div>

          {/* Availability badge */}
          <div className="mt-6 md:mt-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <Circle className="h-3 w-3 fill-emerald-400 text-emerald-400" />
              Available for work
            </span>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Ready-to-use APIs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <div className="space-y-3 text-zinc-400">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              <span>yourmail@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/Yogan-Labs"
                target="_blank"
                className="hover:text-white transition"
              >
                github.com/Yogan-Labs
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                className="hover:text-white transition"
              >
                https://www.linkedin.com/in/sureshkumar-menon-75865a27b/
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
