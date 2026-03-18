import { Toaster } from '@/app/components/ui/sonner';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Timeline } from '@/app/components/Timeline';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0a0e27',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            color: '#ffffff',
          },
        }}
      />
    </div>
  );
}