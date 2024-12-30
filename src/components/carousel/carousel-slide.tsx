import { Testimonial } from "@/types/types";
import Avatar from "../avatar/avatar";

type Props = {
    content: Testimonial;
};

export default function CarouselSlide({ content }: Props) {
    return (
        <div className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            <Avatar src={content.image} alt={content.name} className="mt-5 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg" />
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl text-center mt-4">{content.name}</p>
            <p className="font-normal text-sm sm:text-base md:text-lg text-[#7F7F7F] text-center mt-2">{content.subtitle}</p>
        </div>

    );
}