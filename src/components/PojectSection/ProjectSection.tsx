//=================Imports===========
import { motion } from "motion/react"
import { ProjectLists } from "./projectListData"


export default function ProjectSection() {
    return(
        <section id="#Projects" className="w-full h-350 bg-white text-main-color font-seif text-[16px] ">
            {ProjectLists.map((project, index) =>{
                return(
                    <>
                        <motion.div key={project.id} initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}} className="flex flex-col w-full h-20 pt-10">
                            <div className="flex flex-col w-full h-4">
                                <div className="flex w-full items-center justify-between">
                                    <h1 className="ml-4 text-lg">{project.title}</h1>
                                    <a className="mr-4" href={project.Link}> Demo</a>
                                </div>
                                <span className="text-sm ml-4 text-gray-700 font-seif">{project.techStack}</span>
                            </div>
                        </motion.div>
                    </>
                )
            })}
        </section>
    )
}