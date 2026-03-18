import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#00d4ff]/20 bg-[#0a0e27]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* ✅ YOUR NAME */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Devaka Supun. All rights reserved.
            </p>
          </div>

          {/* ❤️ MADE WITH */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-[#00d4ff] fill-[#00d4ff] animate-pulse" />
            <span>and React</span>
          </div>

          {/* OPTIONAL LINKS */}
          <div className="flex gap-6 text-sm">
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}