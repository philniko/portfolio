import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Hero() {
  const { scrollY } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleViewWork = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('projects');
  };

  return (
    <motion.section
      id="home"
      ref={ref}
      className="pt-16 pb-20 flex flex-col items-center justify-center min-h-[80vh] text-center"
      style={{ y, opacity }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>Hi, I'm </span>
        <TypeAnimation
          sequence={[
            "",
            500,
            personalInfo.firstName + " " + personalInfo.lastName,
            1000,
            personalInfo.firstName,
            500,
            personalInfo.firstNameAbv,
            1000,
            personalInfo.firstNameAbv + " 👋"
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          className="inline-block text-primary"
        />
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {personalInfo.title}
      </motion.h2>

      <motion.p
        className="text-lg max-w-2xl mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {personalInfo.bio}
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <Button size="lg" onClick={handleViewWork}>
          View My Work
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
