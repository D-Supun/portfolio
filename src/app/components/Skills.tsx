import { motion } from 'motion/react';
import { Progress } from '@/app/components/ui/progress';
import { Code, Database, Server, Smartphone, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React / Next.js', level: 70 },
        { name: 'TypeScript', level: 60 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'HTML5 / CSS3', level: 80 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
        { name: 'REST APIs', level: 70 },
        { name: 'GraphQL', level: 50 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'Git / GitHub', level: 75 },
        { name: 'Docker', level: 45 }
      ]
    },
    {
      icon: Terminal,
      title: 'IT & Software Development',
      skills: [
        { name: 'C# / Java', level: 55 },
        { name: 'Python', level: 60 },
        { name: 'JavaScript', level: 70 },
        { name: 'Problem Solving', level: 75 }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#0a0e27]/30 to-transparent" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-[#00d4ff]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[#0a0e27] border border-[#00d4ff]/20 rounded-lg p-6 hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#00d4ff]/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-[#00d4ff] text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-[#1a1f3a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full relative"
                        style={{
                          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}