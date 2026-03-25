import { useState , useEffect } from "react";

export default function useMouseTracker() {
    const [mousePosition , setMousePosition] = useState<{
        x:number | null,
        y:number| null,
    }>({
        x:null,
        y:null,
    })

    useEffect(() => {
        const handle = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
    
        // نستخدم mousemove لحركة انسيابية
        window.addEventListener('mousemove', handle);
        
        // ننظف الـ listener مرة واحدة بس لما الـ component يتمسح
        return () => window.removeEventListener('mousemove', handle);
    }, []); // مصفوفة فاضية = أداء فائق
    
    return mousePosition
}
