import { Dictionary } from "@/types/types";
import Image from "next/image";
import Comment from "@/public/icons/comment.svg"
import Client1 from "@/public/images/4.jpeg";
import Carousel from "@/components/carousel/carousel";

type Props = {
    translations: Dictionary
};

export default function TestimonialsView({ translations }: Props) {

    const slides = [
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
        { image: Client1, name: 'Caio Pontes', subtitle: translations.clients.testimonial_1 },
    ];


    return (
        <div id="clients" className='bg-[#05061D] flex flex-col items-center p-8 w-full'>

            <div className="w-full max-w-[1400px]">
                <h1 className='text-[48px] font-semibold leading-[79px] text-center text-[#528BFD] mb-4'>{translations.clients.title}</h1>

                <div className='flex flex-col items-center w-full'>
                    <Image alt="Comment" src={Comment} width={63} height={63} />
                    <p className='text-[14px] text-center text-[#528BFD] ' >
                        {translations.clients.subtitle}
                    </p>
                    <Carousel slides={slides} />
                </div>



            </div>
        </div>)
}