import { motion } from "motion/react";
import { socialLinks } from "./ContactData";

export default function ContactSection() {
    return(
        <div className="flex flex-col w-full h-auto">
            <motion.h2 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-4xl mt-5 text-white font-bold  ml-5 ">LET'S BUILD THE FUTURE TOGETHER</motion.h2>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-20 ">
                <div className="flex flex-col gap-2">
                    <motion.p initial={{opacity:0 , x:-100}} whileInView={{ opacity: 0.50, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="text-lg tracking-[0.3em] uppercase opacity-50 text-gray-600 ml-5"> Seif Venom </motion.p>
                    <motion.h2 initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:1}} className="text-4xl text-gray-600 font-bold tracking-tighter ml-5">Front-End Developer</motion.h2>
                </div>
                <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.8}} className="flex  gap-13 mr-5">
                    {socialLinks.map((link) => (
                        <a
                        key={link.name}
                        href={link.url}
                        className="group relative text-2xl font-bold tracking-tighter text-white/30 transition-all duration-500 hover:text-white"
                        >
                            <img src="" alt="" />
                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" 
                            style={{ backgroundColor: link.color, boxShadow: `0 0 10px ${link.color}` }} />
                            {link.name}
                        </a>
                    ))}    
                </motion.div>
            </div>
        </div>
    )
}