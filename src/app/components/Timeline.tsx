import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Timeline() {
  const experiences = [
    {
      type: 'work',
      title: 'System Administrator & Networking Intern',
      organization: 'Star Garment',
      period: 'Mar 2026 - Present',
      description: 'Managing IT systems, network configuration, and ensuring smooth operations across the organization.',
      achievements: [
        'Maintaining internal network and server systems',
        'Troubleshooting hardware and software issues',
        'Implementing network security and backups'
      ]
    },
    {
      type: 'work',
      title: 'Web Development / Freelance Projects',
      organization: 'Self-initiated / Freelance',
      period: '2024 - 2026',
      description: 'Built and deployed responsive web applications using MERN stack. Focused on frontend design and backend integration.',
      achievements: [
        'Developed "Soul of Lanka" travel website with React & Tailwind CSS',
        'Created Pharmacy management system with PHP, MySQL, and JS',
        'Implemented dynamic product listings, cart, and checkout systems'
      ]
    },
    {
      type: 'education',
      title: 'BSc (Hons) in Information Technology',
      organization: 'Benedict XVI Catholic International Institute of Higher Education (BCI Campus)',
      period: '2023 - 2026',
      description: 'Specialized in software development, web technologies, and database systems.',
      achievements: [
        'GPA: Excellent / Dean’s list achievements',
        'Completed multiple web development projects',
        'Prepared for professional internships'
      ]
    },
    {
      type: 'education',
      title: 'Advanced Level',
      organization: 'UVA SCIENCE COLLEGE',
      period: '2019 - 2021',
      description: 'Combined Maths, Chemistry, Physics',
      achievements: [
        'Result: SSS'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#0a0e27]/30 to-transparent" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education & <span className="text-[#00d4ff]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] mx-auto mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#0066ff] to-[#00d4ff]" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-[#00d4ff] rounded-full ring-4 ring-[#0a0e27] shadow-[0_0_15px_rgba(0,212,255,0.6)]" />

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <div className="bg-[#0a0e27] border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {item.type === 'work' ? (
                        <Briefcase className="h-5 w-5 text-[#00d4ff]" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-[#00d4ff]" />
                      )}
                      <span className="text-sm text-[#00d4ff] font-semibold">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 mb-3">{item.organization}</p>
                    <p className="text-gray-300 mb-4">{item.description}</p>

                    <ul className={`space-y-2 text-sm text-gray-400 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 bg-[#00d4ff] rounded-full ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}