import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/app/components/ui/button";
import profile from "../../assets/file_00000000be5861f88c1e4e14c2292cd6.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-[#0a0e27]/50" />

      {/* Animated orb 1 */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#00d4ff]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated orb 2 */}
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#0066ff]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left">

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#0066ff] bg-clip-text text-transparent">
              Devaka Supun
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            IT Undergraduate / Web Developer
          </motion.p>

          <motion.p
            className="text-gray-400 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building modern web experiences with cutting-edge technologies
            and creative solutions.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">

  <Button
    size="lg"
    className="bg-[#00d4ff] hover:bg-[#00b8e6] text-black px-8 py-6 text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)]"
    onClick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    View My Work
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>

  <a href="/cv/devaka-supun-cv.pdf" download>
    <Button
      size="lg"
      variant="outline"
      className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 px-8 py-6 text-lg"
    >
      <Download className="mr-2 h-5 w-5" />
      Download CV
    </Button>
  </a>

</div>
</div>

        {/* RIGHT SIDE PHOTO */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile}
            alt="Devaka Supun"
            className=" h-200 object-cover rounded-full border-4 border-[#00d4ff] shadow-[0_0_40px_rgba(0,212,255,0.5)]"
          />
        </motion.div>

      </div>
    </section>
  );
}