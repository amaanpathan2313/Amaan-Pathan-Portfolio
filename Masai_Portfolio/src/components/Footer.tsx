import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 uppercase tracking-wider">
            AMAAN PATHAN
          </h3>
          <p className="text-foreground mb-6 font-bold uppercase tracking-wide">
            MERN Stack Developer passionate about creating innovative web solutions.
          </p>
          <div className="flex gap-4 justify-center">
            {[
             { icon: Github, href: 'https://github.com/amaanpathan2313', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/amaan23/', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=amanpathan348@gmail.com', label: 'Gmail' },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 border-4 border-foreground bg-background flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-background transition-all"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t-4 border-foreground text-center text-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="text-primary" size={16} fill="currentColor" /> by <span className="text-primary font-bold uppercase tracking-wide">AMAAN PATHAN</span>
          </p>
          <p className="mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
