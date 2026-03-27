import javaScript from './assets/images/js.png'
import typescript from './assets/images/typescript.png'
import tailwind from './assets/images/tailwindcss-mark.96ee6a5a.svg'
import shadcnUi from './assets/images/shadcn-logo_svgstack_com_31341774532319.png'
import react from './assets/images/react.svg'
import nodejs from './assets/images/nodejs.png'
import materialui from './assets/images/icons8-material-ui-100.png'
import framermotion from './assets/images/Icon.png'
import reactrouter from './assets/images/rr_lockup_light.png'
import axiosApi from './assets/images/Azios.png'




interface MySkillsData {
    text:string,
    id:number,
    img:string,
    style:string
}

export const skillsData : MySkillsData[] = [
    {
        text:'JavaScript',
        id:1,
        img:javaScript,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#F7DF1E] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#F7DF1E] transition-all duration-500 hover:duration-500 p-6 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#F7DF1E] border-white/10 hover:translate-y-[-15px] '
    },
    {
        text:'TypeScript',
        id:2,
        img:typescript,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#3178C6] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#3178C6] transition-all duration-500 hover:duration-500 border-white/10 hover:shadow-[0px_0px_20px_2px_#3178C6] hover:translate-y-[-15px] '
    },
    {
        text:'React',
        id:3,
        img:react,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#61DAFB] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#61DAFB] transition-all duration-500 hover:duration-500 border-white/10 hover:shadow-[0px_0px_20px_2px_#61DAFB] hover:translate-y-[-15px]' 
    },
    {
        text:'Tailwind',
        id:4,
        img:tailwind,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#38BDF8] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#38BDF8] transition-all duration-500 hover:duration-500 border-white/10 p-6 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#38BDF8] hover:translate-y-[-15px] '
    },
    {
        text:'Framer Motion',
        id:5,
        img:framermotion,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#FF00C8] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#FF00C8] transition-all duration-500 hover:duration-500 border-white/10 p-6 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#FF00C8] hover:translate-y-[-15px] '
    },
    {
        text:'Axios Api',
        id:6,
        img:axiosApi,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#5A29E4] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#5A29E4] transition-all duration-500 hover:duration-500 p-6 border-white/10 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#5A29E4] hover:translate-y-[-15px] '
    },
    {
        text:'Shadcn UI',
        id:7,
        img:shadcnUi,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#CBD5E1] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#CBD5E1] transition-all duration-500 hover:duration-500 p-6 border-white/10 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#CBD5E1] hover:translate-y-[-15px] '
    },
    {
        text:'Material UI',
        id:8,
        img:materialui,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#007FFF] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#007FFF] transition-all duration-500 hover:duration-500 p-6 border-white/10 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#007FFF] hover:translate-y-[-15px] '
    },
    {
        text:'React Router',
        id:9,
        img:reactrouter,
        style:'flex flex-col gap-25 pt-25 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#CA4245] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#CA4245] transition-all duration-500 hover:duration-500 p-6 border-white/10 relative group overflow-hidden hover:shadow-[0px_0px_20px_2px_#CA4245] hover:translate-y-[-15px] '
    },
    {
        text:'Node.JS',
        id:10,
        img:nodejs,
        style:'flex flex-col gap-8 justify-center items-center  h-80 w-67 rounded-3xl hover:bg-linear-to-b hover:from-black hover:to-[#6cc24a] bg-neutral-900 grayscale hover:grayscale-0 border hover:border-[#6cc24a] transition-all duration-500 hover:duration-500  p-6 relative border-white/10 group overflow-hidden hover:shadow-[0px_0px_20px_2px_#6cc24a] hover:translate-y-[-15px] '
    },
]
