import { motion } from "motion/react";
import { skillsData } from "./SkillsData";


export default function MySkillsSection() {
    return(
        <motion.section initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.3}} id="skills" className="h-auto lg:h-250 w-full flex justify-center items-center flex-wrap gap-8 sm:gap-12 lg:gap-30 px-4 sm:px-6 lg:px-0 py-10 sm:py-14 lg:py-0 overflow-visible">
            {skillsData.map((skill,index) => (
                <motion.div initial={{opacity:0 , x:0}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}} key={skill.id} className={skill.style}>
                    <img src={skill.img} alt="" className="w-24 sm:w-28 lg:w-35" />
                    <span className="font-seif text-base sm:text-lg lg:text-[20px] text-white">{skill.text}</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[url('/noise.png')] pointer-events-none" />
                </motion.div>
            ))}
        </motion.section>
    )

}