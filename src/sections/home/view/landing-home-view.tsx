import SocialMediaButtons from '@/components/social-media-buttons/social-media-buttons'
import Image from 'next/image'
import Photo from '@/public/images/1.png'
import { Dictionary } from '@/types/types';

type Props = {
  translations: Dictionary
};

export default function LandingHomeView({ translations }: Props) {

  return (
    <div id="home" className="flex justify-center items-center bg-[#080922] w-full px-4 py-10">
      <div className="w-full max-w-[1400px] relative">
        {/* Textos grandes de fondo */}
        <p className="absolute inset-0 text-white opacity-10 text-[100px] hidden md:block  md:text-[200px] lg:text-[250px] font-bold md:top-[200px] md:left-[50px] hover:opacity-20">
          Julio
        </p>
        <p className="absolute inset-0 text-white opacity-10 text-[100px] hidden md:block  md:text-[200px] lg:text-[250px] font-bold md:top-[400px] md:left-[100px]  hover:opacity-20">
          Gallardo
        </p>

        {/* Botones de redes sociales */}
        <SocialMediaButtons />

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white mt-10 md:mt-0">
          {/* Texto */}
          <div className="flex flex-col justify-evenly w-full md:w-[50%] h-auto md:h-[268px] text-center md:text-left">
            <p className="font-sans font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-10">
              {translations.home.title}
            </p>
            <p className="leading-6 text-sm sm:text-base">
              {translations.home.subtitle}
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full md:w-[50%] max-w-[400px] sm:max-w-[500px] md:max-w-[666.97px] h-auto md:h-[852px] mt-6 md:mt-0">
            <Image src={Photo} alt="Photo home" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

  )

}