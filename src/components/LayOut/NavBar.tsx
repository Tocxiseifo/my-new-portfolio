/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react"

const NavBarList = [
    {
        id:'#home',
        text:'Home'
    },
    {
        id:'#Projects',
        text:'Projects'
    },
    {
        id:'#Contact',
        text:'Contact'
    },
    {
        id:'#About',
        text:'About Me'
    },
]

export default function NavBar() {
    const HoverStyle = "text-main-color font-seif text-[22px] cursor relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 gap-15  after:w-full after:h-[3px] after:bg-black  after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100 after:origin-left cursor-pointer"
    return (
        <>
            <motion.nav initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="w-full h-18 justify-center items-center flex gap-5 border-b-gray-500 border-x-transparent border-t-transparent  border-2 bg-white z-50 font-seif  sticky top-0">
              <div className="flex gap-8">
                {NavBarList.map((nav , index) =>(
                    <motion.a href={nav.id}  initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}}  className={HoverStyle} key={nav.id}>{nav.text}</motion.a>
                ))}
              </div>
            </motion.nav>
        </>
    )
}