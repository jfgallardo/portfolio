import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type Props = {
    value: string
    skill: string
}

export default function Skill({ value, skill }: Props) {

    const [currentValue, setCurrentValue] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animar el progreso desde 0 hasta el valor indicado
                        let startValue = 0;
                        const interval = setInterval(() => {
                            startValue += 1;
                            setCurrentValue(startValue);
                            if (startValue >= +value) {
                                clearInterval(interval);
                            }
                        }, 15); // Velocidad de la animación
                    }
                });
            },
            { threshold: 0.5 } // Detectar cuando el 50% del componente esté en pantalla
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, [value]);

    return (
        <div ref={progressRef} className='flex flex-col items-center text-white w-full max-w-[468px] gap-4 sm:gap-6 md:gap-8'>
            <div className='flex items-center justify-between gap-4 w-full text-center'>
                <p className='text-sm sm:text-base md:text-lg'>{skill}</p>
                <p className='text-sm sm:text-base md:text-lg'>{value}%</p>
            </div>
            <progress
                className={`w-full h-2 sm:h-3 md:h-4 bg-gray-700 rounded-md ${styles.progress}`}
                value={currentValue}
                max="100">
            </progress>
        </div>

    )
}