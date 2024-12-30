import Image from "next/image";
import type { StaticImageData } from "next/image";


type Props = {
    src: StaticImageData;
    alt: string;
    className?: string;
};

export default function Avatar({ src, alt, className }: Props) {
    return (
        <div className={`w-32 h-32 rounded-full overflow-hidden ${className}`}>
            <Image src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    )
}