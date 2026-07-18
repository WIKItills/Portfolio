import { SectionHeader } from './SectionHeader';
import { TestimonialCard } from './TestimonialCard';
import { portfolioData } from '../portfolioData';

export function Testimonials() {
  if (!portfolioData.testimonials.show) return null;

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={portfolioData.testimonials.label}
          title={portfolioData.testimonials.title}
          subtitle={portfolioData.testimonials.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.testimonials.list.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
