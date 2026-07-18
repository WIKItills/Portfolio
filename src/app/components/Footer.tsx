import { Heart } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          {/* Copyright */}
          <div className="text-gray-400">
            <p>© {currentYear} {portfolioData.footer.copyrightText}</p>
            <p className="text-sm mt-1 flex items-center justify-center gap-1.5">
              Built with <Heart size={14} className="text-cyan-400 fill-cyan-400" /> {portfolioData.footer.techStackText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
