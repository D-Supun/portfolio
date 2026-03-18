import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card } from '@/app/components/ui/card';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({ name: '', email: '', message: '' });
  };

  // ✅ YOUR DETAILS
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dsupunpehesara@gmail.com',
      href: 'mailto:dsupunpehesara@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0776874909',
      href: 'tel:+94776874909'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mahiyanganaya, Sri Lanka',
      href: '#'
    }
  ];

  // ✅ YOUR SOCIAL LINKS
  const socialLinks = [
    { icon: Github, href: 'https://github.com/D-Supun', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/devaka-supun-784742290', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-[#00d4ff]">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] mx-auto mb-4" />

          {/* ✅ UPDATED TEXT */}
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm a passionate IT undergraduate looking for internship opportunities and real-world experience. 
            Feel free to reach out for collaborations, projects, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-[#0a0e27] border-[#00d4ff]/20 p-8 hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-[#1a1f3a] border-[#00d4ff]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-[#1a1f3a] border-[#00d4ff]/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-[#1a1f3a] border-[#00d4ff]/30 resize-none"
                  />
                </div>

                <Button className="w-full bg-[#00d4ff] hover:bg-[#00b8e6] text-black">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

              </form>
            </Card>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <a key={index} href={item.href}>
                <Card className="bg-[#0a0e27] border-[#00d4ff]/20 p-6 hover:border-[#00d4ff]/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-lg font-medium">{item.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}

            {/* SOCIAL */}
            <Card className="bg-[#0a0e27] border-[#00d4ff]/20 p-6">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank">
                    <div className="p-3 bg-[#00d4ff]/10 rounded-lg hover:bg-[#00d4ff]/20">
                      <social.icon className="h-6 w-6 text-[#00d4ff]" />
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* CTA */}
           <Card className="bg-gradient-to-br from-[#00d4ff]/20 to-[#0066ff]/20 p-6">
  <h3 className="text-xl font-semibold mb-2">Looking for a developer?</h3>
  <p className="text-gray-300 mb-4">
    I'm currently available for internship and freelance opportunities.
  </p>

  <a href="/cv/devaka-supun-cv.pdf" download>
    <Button
      variant="outline"
      className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10"
    >
      Download Resume
    </Button>
  </a>
</Card>

          </motion.div>
        </div>
      </div>
    </section>
  );
}