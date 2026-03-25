//=============Images================
import eCommerce from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.42.58.81.png'
import youtubeClone from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.44.30.15.png'
import landingPage from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.44.57.20.png'
import marshStore from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.47.36.79.png'
import TodoList from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.48.53.07.png'
import StorageSystem from '../PojectSection/Images/Desktop Screenshot 2026.03.24 - 13.51.57.56.png'

interface projectList {
    id:number, 
    techStack:string[] | string,
    title:string, 
    Link:string,
    gitHub?:string,
    image:string
}


export const ProjectLists : projectList[]  = [
    {
        id:0 ,
        techStack: ['TypeScript' , 'React' , 'React Router' , 'Shadcn UI' , 'React Icons', 'Tailwind Css' , 'Axios Api' ].join('  -  ') ,
        title: 'Youtube Clone',
        Link: 'https://youtube-clone-5t5svbn6n-1871s-projects.vercel.app/',
        gitHub:'https://github.com/Tocxiseifo/YouTube-Clone' ,
        image: youtubeClone
    },
    {
        id:1 ,
        techStack: ['TypeScript' , 'React' , 'React Router' , 'Material UI' , 'Tailwind Css' , 'Axios Api' ,' Framer Motion'].join('  -  ') ,
        title: 'E-Commerce',
        Link: 'https://e-commerce-sigma-snowy.vercel.app/',
        gitHub: 'https://github.com/Tocxiseifo/E-Commerce',
        image:eCommerce
    },
    {
        id: 2 ,
        techStack: ['JavaScript' , 'React' , 'Tailwind Css' , 'Material UI' , 'Framer Motion'].join('  -  '),
        title: 'Landing Page',
        Link: 'https://landing-page-react-test.netlify.app/',
        gitHub:'https://github.com/Tocxiseifo/My-react-test',
        image:marshStore
    },
    {
        id: 3 ,
        techStack: ['TypeScript' , 'React' , 'Tailwind Css' , 'Material UI' , 'Framer Motion'].join('  -  ') ,
        title: 'Marsh Store',
        Link: 'https://boltx-store-website-g1nluwbvp-1871s-projects.vercel.app/',
        gitHub: 'https://github.com/Tocxiseifo/boltx-store-website',
        image:landingPage
    },
    {
        id: 4 ,
        techStack: ['JavaScript' , 'HTML' , 'Css'].join('  -  ') ,
        title: 'Storage System',
        Link: 'https://storage-system18.netlify.app/',
        gitHub: 'https://github.com/Tocxiseifo/storage',
        image:StorageSystem
    },
    {
        id: 5 ,
        techStack: ['JavaScript' , 'React' , 'Css' , 'Material UI' , 'Redux'].join('  -  ') ,
        title: 'Todo List',
        Link: 'https://todo-list-react172008.netlify.app/',
        image:TodoList
    },
]