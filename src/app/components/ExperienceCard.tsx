import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
  index: number;
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  achievements,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 group-last:bg-gradient-to-b group-last:from-white/10 group-last:to-transparent"></div>
      
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-cyan-500 border-4 border-[#0a0a0f] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20"></div>
      </motion.div>

      {/* Content card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg transition-all"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl text-white mb-1">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-gray-400">
              <span className="text-cyan-400">{company}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
            <Briefcase size={14} />
            {period}
          </div>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3 text-gray-300">
              <span className="text-cyan-400 mt-1.5">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
