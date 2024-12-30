import { Testimonial } from "@/types/types";
import Avatar from "../avatar/avatar";

type Props = {
    content: Testimonial;
};

export default function CarouselSlide({ content }: Props) {
    return (
        <div className="w-full flex-shrink-0 flex flex-col items-center justify-center">
            <Avatar src={content.image} alt={content.name} className='mt-5' />
            <p className="text-white font-bold text-2xl text-center">{content.name}</p>
            <p className="font-normal text-xl text-[#7F7F7F] text-center">{content.subtitle}</p>
        </div>
    );
}