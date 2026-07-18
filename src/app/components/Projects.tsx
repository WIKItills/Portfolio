import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { portfolioData } from '../portfolioData';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={portfolioData.projects.label}
          title={portfolioData.projects.title}
          subtitle={portfolioData.projects.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.list.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
