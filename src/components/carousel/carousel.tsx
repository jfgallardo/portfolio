import { useState } from "react";
import CarouselSlide from "./carousel-slide";
import CarouselControls from "./carousel-controls";
import { Testimonial } from "@/types/types";

type Props = {
    slides: Testimonial[];
};

export default function Carousel({ slides }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-4/5 overflow-hidden bg-transparent shadow-lg rounded-lg">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={index} content={slide} />
        ))}
      </div>
      <CarouselControls onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
}
