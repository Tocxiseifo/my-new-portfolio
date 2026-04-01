import { motion } from "motion/react"
import { AboutMeData } from "./AboutMeData"

export default function AboutMeSection() {
    return(
        <>
            <section id="About" className="mx-auto w-full min-h-auto lg:justify-center xl:justify-evenly lg:min-h-210 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 justify-evenly text-center bg-white font-seif px-4 sm:px-6 xl:px-10 2xl:px-12 py-10 sm:py-14 lg:py-12 xl:py-16 2xl:py-20 xl:max-w-[1440px] 2xl:max-w-full ">
                {AboutMeData.map((data) =>(
                    <div key={data.id} className="flex w-full max-w-full flex-col lg:flex-row items-center lg:items-start xl:items-center justify-center lg:justify-between gap-8 lg:gap-10 xl:gap-12">
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="h-auto shrink-0 w-full lg:w-190 2xl:max-w-md gap-5 mt-0 lg:mt-35 xl:mt-0 flex flex-col text-center rounded-md items-center lg:min-h-0">
                            <motion.img initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} src={data.img}  alt="" className="h-[320px] sm:h-[420px] xl:h-140 2xl:h-120 w-full sm:max-w-[420px] 2xl:max-w-md xl:w-120 lg:w-90 lg:h-100 lg:ml-140 xl:ml-0 rounded-2xl object-cover" />
                            <motion.span initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-gray-600 font-seif text-2xl sm:text-3xl text-center lg:text-left lg:text-4xl 2xl:text-5xl relative xl:right-10 lg:left-60 xl:left-0">{data.name}</motion.span>
                        </motion.div>
                        <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="min-w-0 flex-1 text-lg sm:text-2xl lg:text-4xl 2xl:text-[2.625rem] tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2.5px] w-full lg:w-280  h-auto relative right-0 lg:right-15 xl:right-0 text-main-color mt-0 lg:mt-38 xl:mt-0 font-seif text-left">
                            <span className="flex justify-center text-center lg:text-left lg:w-130 lg:text-xl lg:ml-35 xl:ml-0 xl:text-4xl 2xl:text-[2.625rem] xl:w-full">{data.content}</span>
                        </motion.div>
                    </div>
                ))}
            </section>
        </>
    )
}