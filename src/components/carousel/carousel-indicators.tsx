import { Testimonial } from "@/types/types";

type Props = {
    slides: Testimonial[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
};

export default function CarouselIndicators({ slides, activeIndex, setActiveIndex }: Props) {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 text-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      );
}