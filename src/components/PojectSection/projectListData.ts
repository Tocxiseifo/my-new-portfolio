interface projectList {
    id:number, 
    techStack:string[] | string,
    title:string, 
    Link:string,
    gitHub:string
}


export const ProjectLists : projectList[]  = [
    {
        id:0 ,
        techStack: ['TypeScript' , 'React' , 'React Router' , 'Shadcn UI' , 'React Icons', 'Tailwind Css' , 'Axios Api' ].join('  -  ') ,
        title: 'Youtube Clone',
        Link: 'https://youtube-clone-5t5svbn6n-1871s-projects.vercel.app/',
        gitHub:'https://github.com/Tocxiseifo/YouTube-Clone' ,
    },
    {
        id:1 ,
        techStack: ['TypeScript' , 'React' , 'React Router' , 'Material UI' , 'Tailwind Css' , 'Axios Api' ,' Framer Motion'].join('  -  ') ,
        title: 'E-Commerce',
        Link: 'https://e-commerce-sigma-snowy.vercel.app/',
        gitHub: 'https://github.com/Tocxiseifo/E-Commerce',
    },
    {
        id: 2 ,
        techStack: ['JavaScript' , 'React' , 'Tailwind Css' , 'Material UI' , 'Framer Motion'].join('  -  '),
        title: 'Landing Page',
        Link: 'https://landing-page-react-test.netlify.app/',
        gitHub:'https://github.com/Tocxiseifo/My-react-test',
    },
    {
        id: 3 ,
        techStack: ['TypeScript' , 'React' , 'Tailwind Css' , 'Material UI' , 'Framer Motion'].join('  -  ') ,
        title: 'Mersh Store',
        Link: 'https://boltx-store-website-g1nluwbvp-1871s-projects.vercel.app/',
        gitHub: 'https://github.com/Tocxiseifo/boltx-store-website'
    },
]