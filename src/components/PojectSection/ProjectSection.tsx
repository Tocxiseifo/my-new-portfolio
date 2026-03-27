//=================Imports===========
import { motion , AnimatePresence } from "motion/react"
import { ProjectLists } from "./projectListData"
import { useState } from "react"
import useMouseTracker from "../../Hooks/useMouse"



export default function ProjectSection() {
    const [activeId , setActiveId] = useState<number | null>(null)
    const {x , y} = useMouseTracker()
    return(
        <section id="Projects" className="w-full h-250 bg-white  text-main-color font-seif text-[16px] ">
            {ProjectLists.map((project,index ) =>{
                return(
                    <>
                        <motion.div 
                        key={project.id} 
                        initial={{opacity:0 , y:100}} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true, amount: 0.3 }} 
                        onMouseEnter={() => setActiveId(project.id)}
                        onMouseLeave={() => setActiveId(null)}
                        transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}}  
                        className="flex flex-col w-full h-auto pt-20 "
                        >
                            <div className="flex flex-col h-18  ml-5 relative  border-2 border-transparent text-main-color rounded-md overflow-hidden group ">
                                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-0"></span>
                                <div className="relative flex flex-col z-10 ml-5 mt-2 h-37 group-hover:text-white transition-colors duration-400">
                                    <a href={project.Link} className="text-2xl cursor-pointer border-2 border-b-main-color border-t-transparent border-x-transparent ">{project.title}</a>
                                    <span className="text-gray-400 text-sm ">{project.techStack}</span>
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                                    animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    rotate: 0,
                                    x: x ?? 0 - 50, 
                                    y: y ?? 0 + 150  
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                                    className="absolute top-200 left-0 pointer-events-none z-50 w-[600px] h-[350px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
                                >
                                    <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover  transition-all  duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </>
                )
            })}
        </section>
    )
}