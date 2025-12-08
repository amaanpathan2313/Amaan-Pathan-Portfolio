import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const projects = [
    {
      title: '💊 Wellness Forever Online Medicines',
      description: 'Wellness Forever Online Medicines is a full-stack web application for browsing, searching, and purchasing medicines online. It includes features like user authentication, product listings, cart management, and order handling using React, Node.js, Express, and MongoDB..',
      tags: ['REACT.JS', 'express.js', 'jwt-token', 'node-js', 'jwt-authentication', 'mongoDB', 'online pharmacy'],
      image: 'https://media.istockphoto.com/id/1215516053/photo/mobile-service-or-app-for-purchasing-medicines-in-online-pharmacy-drugstore-smartphone-and.jpg?s=612x612&w=0&k=20&c=7kff3mr9_MM7GKJXLFmVr9V4HlmP6eAxngX9VKh6L58=',
      github: 'https://github.com/amaanpathan2313/Wellness-Forever-Online-Medicines-',
      demo: 'https://wellnessroute01.netlify.app/',
    },
    {
      title: '✈️ Travel Inspiration',
      description: 'Travel Inspiration Platform is a modern, full-stack web application built to help users discover and plan their perfect vacations. The platform offers curated travel destinations, detailed itineraries, reviews, and the ability to save favorite locations. It solves the challenge of overwhelming travel choices by providing personalized suggestions and a clean.. intuitive interface.',
      tags: ['react.js', 'Firebase', 'Firebase-Auth', 'frontend' , 'travel-website'],
      image: 'https://www.plannthat.com/wp-content/uploads/2017/06/MAP-1.jpg',
      github: 'https://github.com/amaanpathan2313/Travel-Inspiration-Platforms',
      demo: 'https://mytravelinspirations.netlify.app/',
    },
    {
      title: '📝 Note Keeper',
      description: 'A full-stack note-taking application built using the MERN stack, allowing users to create, edit, and manage notes with ease. It features secure user authentication and a smooth, responsive UI for an efficient writing experience.',
      tags: ['Full Stack', 'react.js' ,'node.js' ,'express.js' ,'tokens' ,'mongoDB','JWT',],
      image: 'https://media.istockphoto.com/id/1461537129/photo/close-up-woman-hand-writing-on-notebook.jpg?s=612x612&w=0&k=20&c=1UPcoOpmYSCzeHAyOB92X4tgSIybR6p7m-yUqIjAlaA=',
      github: 'https://github.com/amaanpathan2313/Notes_App_Frontend-?tab=readme-ov-file',
      demo: 'https://notekeep01.netlify.app/',
    },
    {
      title: '🚛 Logistics & Transportation Management System',
      description: 'A modern, responsive web application for managing logistics and transportation operations with driver information management, and revenue analytics.',
      tags: ['logistics', 'frontend','react.js','analytics', 'firebase'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/493164010/XK/SQ/ZE/6348033/international-freight-forwarders-services-500x500.jpg',
      github: 'https://github.com/amaanpathan2313/truck',
      demo: 'https://logistics-transportation.netlify.app/',
    },
    {
      title: '👨‍🎓 Static website for class',
      description: 'A modern, responsive online learning platform that connects students with Indian best teachers for comprehensive educational experiences',
      tags: ['css', 'html', 'landing-page', 'frontend', 'responsive-design', 'online-learning', 'course-website'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9Ct4bZcuNTyrIFJV6OaTCU7s-NJmqkw41AU3wt_eNI2ZskeX',
      github: 'https://github.com/amaanpathan2313/onlineclasses.io',
      demo: 'https://e-tuitions.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="pb-7  relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter uppercase"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              className="h-2 w-40 bg-primary mx-auto border-4 border-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0.3, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 1.2, 
                  ease: [0.25, 0.1, 0.25, 1] 
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden group apple-card w-full max-w-sm h-[600px] flex flex-col rounded-xl"
                style={{ y: useTransform(scrollYProgress, [0, 1], [index * 5, index * -5]) }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>

                <div className="p-6 bg-card flex-1 flex flex-col">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm flex-1 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-muted text-foreground border-2 border-foreground font-bold uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-3 border-foreground hover:bg-foreground hover:text-background font-bold uppercase"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-3 border-foreground font-bold uppercase"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
