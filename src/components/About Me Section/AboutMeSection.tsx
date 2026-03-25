import { motion } from "motion/react"
import { AboutMeData } from "./AboutMeData"

export default function AboutMeSection() {
    return(
        <>
            <section id="About" className="w-full flex gap-10 justify-evenly items-center text-center bg-main-color  font-seif h-50">
                {AboutMeData.map((data) =>(
                    <>
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} key={data.id} className="h-40 w-150 mt-25 rounded-md">
                            <img src={data.img}  alt="" className=" h-170 w-160 rounded-2xl object-cover" />
                        </motion.div>
                        <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-4xl w-280 text-white mt-150 font-seif text-left ">
                            <span>{data.content}</span>
                        </motion.div>
                    </>
                ))}
                
            </section>
        </>
    )
}