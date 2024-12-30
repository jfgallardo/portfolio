type Props = {
    onNext: () => void;
    onPrev: () => void;
};

export default function CarouselControls({ onNext, onPrev }: Props) {
    return (
        <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
                onClick={onPrev}
                className="bg-gray-800 text-white rounded-full hover:bg-gray-600 w-6 h-6 flex items-center justify-center p-5 text-2xl"
            >
                ‹
            </button>
            <button
                onClick={onNext}
                className="bg-gray-800 text-white rounded-full hover:bg-gray-600 w-6 h-6 flex items-center justify-center p-5 text-2xl"
            >
                ›
            </button>
        </div>
    );
}