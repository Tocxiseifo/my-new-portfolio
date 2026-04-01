// import useMouseTracker from "../Hooks/useMouse";
import venomImg from '../assets/gemini-2.5-flash-image_Professional_studio_headshot_of_a_young_man_looking_directly_at_the_camera_with_-0-removebg-preview.png';
import normalImg from '../assets/gemini-2.5-flash-image_Professional_studio_headshot_of_a_young_man_looking_directly_at_the_camera_with_-0__1_-removebg-preview.png';
import { motion } from 'framer-motion';
export default function HeroSection() {
    // نصيحة: اتأكد إن الصور في فولدر public عشان الـ paths تكون أسهل
    const glitchVariants = {
      hover: {
        x: [0, -5, 5, -2, 2, 0],
        y: [0, 2, -2, 3, -3, 0],
        filter: [
          "contrast(100%) brightness(100%)",
          "contrast(200%) brightness(150%)",
          "contrast(150%) brightness(80%)",
          "contrast(100%) brightness(100%)",
        ],
        transition: {
          duration: 0.3,
          repeat: Infinity, // يفضل يرعش طول ما الماوس فوقه
          repeatType: "mirror" as const,
        },
      },
    };
      // إعدادات الرعشة (Glitch Animation)

  return (
    <section id='home' className="relative h-150 lg:h-130 xl:h-225 bg-[#050505] flex lg:mt-25 items-center justify-center overflow-hidden font-seif px-4 sm:px-6 lg:px-0">
      <motion.h1 initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="absolute text-[16vw]  font-black text-white/5 uppercase select-none  font-seif">
        Seif Venom
      </motion.h1>

      <motion.div initial={{opacity:0 , y:-100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.5}}  className="relative z-10 w-[260px] h-[390px] sm:w-[320px] sm:h-[480px] lg:w-[400px] lg:h-[600px] group cursor-pointer">
        
        {/* الصورة الأساسية (Normal) */}
        <motion.div
          className="absolute inset-0 z-20"
          variants={glitchVariants}
          whileHover="hover"
          initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}}
        >
          <img
            src={normalImg}
            alt="Normal"
            className="w-full h-full object-cover rounded-lg grayscale group-hover:opacity-0 transition-opacity duration-100"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10"
          variants={glitchVariants}
          whileHover="hover"
        >
          <img
            src={venomImg}
            alt="Venom"
            className="w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 scale-105"
          />
        </motion.div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-30 pointer-events-none" />
      </motion.div>

      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-20 left-4 sm:left-6 lg:left-10 z-40 text-white">
        <motion.p initial={{opacity:0 , x:-100}} whileInView={{ opacity: 0.50, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-xs sm:text-sm lg:text-sm tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase opacity-50"> Seif Venom </motion.p>
        <motion.h2 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter">Front-End Developer</motion.h2>
      </div>
    </section>
    )
}