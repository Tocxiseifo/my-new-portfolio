/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion , useScroll } from "motion/react"

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
    {
        id:'#skills',
        text:'Skills'
    },
]

export default function NavBar() {
    const {scrollYProgress} = useScroll()
    const HoverStyle = "text-main-color font-seif text-[22px] cursor relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 gap-15  after:w-full after:h-[3px] after:bg-black  after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100 after:origin-left cursor-pointer mt-10"
    return (
        <>
            <motion.nav  initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:0.2}} className="w-full flex-col h-18 justify-center text-center  items-center flex gap-5   bg-white z-50 font-seif  sticky top-0">
              <div className="flex gap-8 justify-center items-center text-center">
                {NavBarList.map((nav , index) =>(
                    <motion.a href={nav.id}  initial={{opacity:0 , y:100}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1 , ease:'easeOut' ,delay:index * 0.6}}  className={HoverStyle} key={nav.id}>{nav.text}</motion.a>
                ))}
              </div>
                <motion.span style={{ scaleX: scrollYProgress, originX: 0 }} className="border-2 w-full "></motion.span>
            </motion.nav>
        </>
    )
}