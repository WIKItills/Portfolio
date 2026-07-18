import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span>{portfolioData.hero.badgeText}</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              {portfolioData.hero.headingMain}
              <span className="block text-cyan-400 mt-2">{portfolioData.hero.headingSub}</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg">
              {portfolioData.hero.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href={portfolioData.personal.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            
            <motion.a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
            >
              {portfolioData.hero.ctaPrimary}
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-6">
            {portfolioData.socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-gray-400 hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Illustration/Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center"
        >
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-80 h-80 lg:w-96 lg:h-96"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/10"></div>
            <div className="absolute inset-8 rounded-full border border-cyan-500/5"></div>
            
            {/* Center avatar placeholder */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-50"></div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-sm"></div>
              <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-purple-400 rounded-full blur-sm"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
