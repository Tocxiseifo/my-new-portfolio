import { motion } from "motion/react"
import { AboutMeData } from "./AboutMeData"

export default function AboutMeSection() {
    return(
        <>
            <section id="About" className="w-full h-200 flex gap-10 justify-evenly  text-center bg-white  font-seif ">
                {AboutMeData.map((data) =>(
                    <>
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} key={data.id} className="h-40 w-150 gap-5 mt-25 flex flex-col text-center rounded-md">
                            <motion.img initial={{opacity:0 , x:-100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} src={data.img}  alt="" className=" h-150 w-130 rounded-2xl object-cover" />
                            <motion.span initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{duration:1 , ease:'easeOut' ,delay:0.4}} className="text-gray-600 font-seif text-4xl relative right-10">{data.name}</motion.span>
                        </motion.div>
                        <motion.div initial={{opacity:0 , x:100}} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{duration:1 , ease:'easeOut' ,delay:0.6}} className="text-4xl tracking-[2.5px] w-280 h-auto text-main-color mt-38 font-seif text-left ">
                            <span>{data.content}</span>
                        </motion.div>
                    </>
                ))}
                
            </section>
        </>
    )
}