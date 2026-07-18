import { SectionHeader } from './SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { portfolioData } from '../portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={portfolioData.journey.label}
          title={portfolioData.journey.title}
          subtitle={portfolioData.journey.subtitle}
        />

        <div className="relative">
          {portfolioData.journey.timeline.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
