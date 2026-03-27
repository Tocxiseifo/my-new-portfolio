import { motion } from "motion/react";
import { socialLinks } from "./ContactData";

export default function ContactSection() {
    return(
        <section id="Contact" className="flex flex-col w-full h-auto px-4 sm:px-6 lg:px-0">
            <motion.h2 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-2xl sm:text-3xl lg:text-4xl mt-5 text-white font-bold lg:ml-5">LET'S BUILD THE FUTURE TOGETHER</motion.h2>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-start lg:items-center justify-between py-10 sm:py-14 lg:py-20">
                <div className="flex flex-col gap-2">
                    <motion.p initial={{opacity:0 , x:-100}} whileInView={{ opacity: 0.50, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-50 text-white/50 lg:ml-5"> Seif Venom </motion.p>
                    <motion.h2 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-bold tracking-tighter lg:ml-5">Front-End Developer</motion.h2>
                </div>
                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="flex flex-wrap gap-6 sm:gap-8 lg:gap-13 lg:mr-5">
                    {socialLinks.map((link) => (
                        <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        className="group relative text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter text-white/30 transition-all duration-500 hover:text-white"
                        >
                            <img src="" alt="" />
                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" 
                            style={{ backgroundColor: link.color, boxShadow: `0 0 10px ${link.color}` }} />
                            {link.name}
                        </a>
                    ))}    
                </motion.div>
            </div>
        </section>
    )
}