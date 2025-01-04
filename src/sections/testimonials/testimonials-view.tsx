import { Dictionary } from "@/types/types";
import Image from "next/image";
import Comment from "@/public/icons/comment.svg"
import Client1 from "@/public/images/4.jpeg";
import Carousel from "@/components/carousel/carousel";
import { useEffect, useRef, useState } from "react";

type Props = {
    translations: Dictionary
};

export default function TestimonialsView({ translations }: Props) {

    const slides = [
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionTestimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 } // Detectar cuando el 20% del componente esté visible
        );

        if (sectionTestimonialsRef.current) {
            observer.observe(sectionTestimonialsRef.current);
        }

        return () => {
            if (sectionTestimonialsRef.current) {
                observer.unobserve(sectionTestimonialsRef.current);
            }
        };
    }, []);


    return (
        <div id="clients" className="bg-[#05061D] flex flex-col items-center p-6 sm:p-8 w-full">
            <div ref={sectionTestimonialsRef}
                className={`w-full max-w-[1400px] transition-transform duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "translate-y-16"
                    }`}>
                <h1 className="text-[32px] sm:text-[48px] font-semibold leading-[40px] sm:leading-[79px] text-center text-[#528BFD] mb-4">
                    {translations.clients.title}
                </h1>

                <div className="flex flex-col items-center w-full gap-4">
                    <Image alt="Comment" src={Comment} width={48} height={48} className="sm:w-[63px] sm:h-[63px]" />
                    <p className="text-[12px] sm:text-[14px] text-center text-[#528BFD] max-w-[600px]">
                        {translations.clients.subtitle}
                    </p>
                    <div className="w-full max-w-[1200px]">
                        <Carousel slides={slides} />
                    </div>
                </div>
            </div>
        </div>
    )
}