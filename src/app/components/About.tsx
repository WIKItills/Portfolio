import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={portfolioData.about.label}
          title={portfolioData.about.title}
          subtitle={portfolioData.about.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {portfolioData.about.paragraphs.map((p, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-cyan-500/30">
                  <p className="text-gray-300 leading-relaxed">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.about.highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  <item.icon className="text-cyan-400 mb-3" size={24} />
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
