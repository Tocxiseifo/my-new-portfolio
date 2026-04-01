import { motion } from "motion/react"
import { AboutMeData } from "./AboutMeData"

export default function AboutMeSection() {
    return(
        <>
            <section id="About" className="w-full min-h-auto lg:justify-center xl:justify-evenly lg:h-210 flex flex-col lg:flex-row gap-8 lg:gap-10 justify-evenly text-center bg-white font-seif px-4 sm:px-6  py-10 sm:py-14 lg:py-0">
                {AboutMeData.map((data) =>(
                    <div key={data.id} className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-10">
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="h-auto lg:h-180 w-full lg:w-190 gap-5 mt-0 lg:mt-35 flex flex-col text-center rounded-md items-center">
                            <motion.img initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} src={data.img}  alt="" className="h-[320px] sm:h-[420px] xl:h-140 w-full sm:max-w-[420px] xl:w-120 lg:w-90 lg:h-100   lg:ml-140 xl:ml-0 rounded-2xl object-cover" />
                            <motion.span initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-gray-600 font-seif text-2xl sm:text-3xl text-center lg:text-left lg:text-4xl relative xl:right-10 lg:left-60 xl:left-0">{data.name}</motion.span>
                        </motion.div>
                        <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-lg sm:text-2xl lg:text-4xl tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2.5px] w-full lg:w-280 h-auto relative right-0 lg:right-15 text-main-color mt-0 lg:mt-38 font-seif text-left">
                            <span className="flex justify-center text-center lg:text-left lg:w-130 lg:text-xl lg:ml-35 xl:ml-0 xl:text-4xl xl:w-full">{data.content}</span>
                        </motion.div>
                    </div>
                ))}
            </section>
        </>
    )
}