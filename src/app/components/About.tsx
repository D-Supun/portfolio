import { Code2, Database, Cpu, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '@/app/components/ui/card';

export function About() {
  const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable web applications using MERN stack and modern technologies'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Designing and developing efficient, maintainable, and real-world software solutions'
  },
  {
    icon: Cpu,
    title: 'Performance & Optimization',
    description: 'Focused on clean architecture, fast performance, and smooth user experience'
  }
];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-[#00d4ff]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a 3rd year Information Technology undergraduate at BCI Campus with a strong 
                passion for software development and modern web technologies. I have hands-on 
                experience in building applications using technologies like React.js, Node.js, 
                MongoDB, and MySQL.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I am mainly focused on Full Stack Development and enjoy creating real-world 
                solutions such as travel management systems, pharmacy systems, and AI-based projects. 
                My experience includes working with MERN stack, authentication systems, and 
                responsive UI design.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently, I am seeking an internship opportunity where I can enhance my technical 
                skills, gain industry experience, and contribute to real-world software projects 
                while growing as a professional developer.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-[#0a0e27] border-[#00d4ff]/20 p-6 hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}