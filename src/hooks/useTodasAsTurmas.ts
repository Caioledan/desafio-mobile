import { useEffect, useState } from "react";
import { Turma } from "../interfaces/escola.interface";
import { getTodasAsTurmas } from "../database";



export function useTodasAsTurmas(){
    const [turmas, setTurmas] = useState<Turma[]>([]);
    
    useEffect(() => {
        const todasAsTurmas = getTodasAsTurmas();
        setTurmas(todasAsTurmas);  
    }, [])

    return turmas;
}