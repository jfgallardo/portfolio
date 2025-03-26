type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function CarouselControls({ onNext, onPrev }: Props) {
  return (
    <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-6 md:px-8">
      <button
        onClick={onPrev}
        className="bg-gray-800 text-white rounded-full hover:bg-gray-600 w-10 h-10 flex  justify-center text-lg sm:text-xl md:text-2xl transition-all duration-200 ease-in-out"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="bg-gray-800 text-white rounded-full hover:bg-gray-600 w-10 h-10 flex  justify-center text-lg sm:text-xl md:text-2xl transition-all duration-200 ease-in-out"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
