import { SectionHeader } from './SectionHeader';
import { SkillBadge } from './SkillBadge';
import { portfolioData } from '../portfolioData';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={portfolioData.skills.label}
          title={portfolioData.skills.title}
          subtitle={portfolioData.skills.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.categories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                <h3 className="text-xl text-cyan-400">{category.category}</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={skill.name}
                    {...skill}
                    index={categoryIndex * 6 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
