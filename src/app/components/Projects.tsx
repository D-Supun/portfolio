import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Soul of Lanka Travel Website',
      description: 'A modern travel website built using MERN stack with booking features, travel guides, and responsive UI design.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/HarshaHK21/soulOFLanka.git',
      live: '#'
    },
    {
      title: 'Notes App (MERN Stack)',
      description: 'A full-stack notes application with CRUD functionality, allowing users to create, edit, and delete notes with a clean UI.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/YOUR-NOTES-APP-LINK',
      live: '#'
    },
    {
      title: 'Pharmacy Management System',
      description: 'Responsive pharmacy system to manage medicine inventory, customer records, and orders using PHP and MySQL.',
      image: 'https://images.unsplash.com/photo-1588776814546-ec7e9c88c91c',
      techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/yosh0819/Pharmacy-Management-System-Medicare-Pharmacy.git',
      live: '#'
    },
     {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and contact form.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with product management, shopping cart, payment integration, and order tracking.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6',
      techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-[#00d4ff]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }}>
              
              <Card className="bg-[#0a0e27] border-[#00d4ff]/20 overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} className="bg-[#00d4ff]/10 text-[#00d4ff]">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3">
                    
                    <a href={project.github} target="_blank">
                      <Button 
                        size="sm"
                        variant="outline"
                        className="flex-1 border-[#00d4ff] text-[#00d4ff]"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>

                    <a href={project.live} target="_blank">
                      <Button 
                        size="sm"
                        className="flex-1 bg-[#00d4ff] text-black"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </a>

                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}