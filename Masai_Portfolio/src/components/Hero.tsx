import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ThreeScene from './ThreeScene';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [25, -25]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-25, 25]), { stiffness: 150, damping: 30 });
  const translateZ = useSpring(useTransform(mouseX, [-400, 400], [0, 50]), { stiffness: 200, damping: 40 });
  const scale3d = useSpring(useTransform(mouseY, [-400, 400], [1, 1.05]), { stiffness: 200, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={ref} id="home" className="pb-20 relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(to right, #131313, #000000)' }}>
      <ThreeScene />
      
      {/* Background Image - Left Half - Hidden on mobile */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-center bg-no-repeat opacity-100 hidden md:block"
        style={{ 
          backgroundImage: 'url(/portfolioBackground.png)',
          filter: 'sepia(0.5) contrast(1.2) brightness(0.8) saturate(0.8) hue-rotate(15deg)',
          maskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 70%, transparent 100%)'
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10 flex"
        style={{ y, opacity, scale }}
      >
        {/* Left Half - Empty space for background image */}
        <div className="w-1/2 hidden md:block" />
        
        {/* Right Half - Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center min-h-screen py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-lg font-mono">Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 text-foreground tracking-tighter cursor-pointer select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              translateZ,
              scale: scale3d,
              transformStyle: 'preserve-3d',
              transformPerspective: 1200,
              textShadow: '0 0 20px rgba(200, 255, 0, 0.3), 0 0 40px rgba(200, 255, 0, 0.2)'
            }}
          >
            AMAAN<br/>
            <span className="text-primary">PATHAN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-bold uppercase tracking-wide"
          >
            MERN Stack Developer Building Modern Web Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider transition-all hover:translate-x-1 hover:translate-y-1"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-4 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all font-bold uppercase tracking-wider"
              onClick={() => {
                window.open('/Amaan_Pathan_Resume.pdf', '_blank');
                const link = document.createElement('a');
                link.href = '/Amaan_Pathan_Resume.pdf';
                link.download = 'Amaan_Pathan_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: Github, href: 'https://github.com/amaanpathan2313', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/amaan23/', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=amanpathan348@gmail.com', label: 'Gmail' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-4 border-foreground bg-background hover:bg-primary hover:border-primary transition-all"
                aria-label={label}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
