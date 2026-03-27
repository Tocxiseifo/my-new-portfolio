//==================Hooks==================
import { useState , useEffect } from "react";

export default function useMouseTracker() {
    //================states=============================
    const [mousePosition , setMousePosition] = useState<{
        x:number | null,
        y:number| null,
    }>({
        x:null,
        y:null,
    })
    //======================Effects=================
    useEffect(() => {
        const handle = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handle);
        
        // ننظف الـ listener مرة واحدة بس لما الـ component يتمسح
        return () => window.removeEventListener('mousemove', handle);
    }, []);
    
    return mousePosition
}
