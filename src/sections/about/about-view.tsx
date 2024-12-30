import Image from 'next/image';
import Photo from '@/public/images/3.png'
import Button from '@/components/button/button';
import { Dictionary } from '@/types/types';


type Props = {
  translations: Dictionary
};

export default function AboutView({ translations }: Props) {

  const downloadCurriculum = () => {
    window.open('https://drive.google.com/file/d/1bFsJWfaguWMmWTyYWI5AbzTVajnPSFFp/view?usp=drivesdk', '_blank');
  }

  return (
    <div
      id="about"
      className="flex flex-col items-center p-8 bg-[#080922] w-full"
    >
      <div className="w-full max-w-[1400px]">
        {/* Título */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.2] text-center text-[#528BFD] mb-6">
          {translations.about.title}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Imagen */}
          <div className="flex-shrink-0">
            <Image
              src={Photo}
              alt="Profile photo"
              width={507}
              height={543}
              className="w-[250px] sm:w-[350px] md:w-[507px] h-auto"
            />
          </div>

          {/* Información de contacto */}
          <div
            className="flex flex-col items-center md:items-start w-full md:w-[468px] text-[#528BFD] gap-6"
          >
            <p className="font-sans text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-left">
              {translations.about.greeting}
            </p>
            <p className="font-sans text-sm sm:text-base leading-[25px] text-left text-white">
              {translations.about.description}
            </p>

            {/* Contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full p-4 sm:p-8 bg-[#060617]">
              <div>
                <label className="font-sans text-sm font-bold text-left text-[#528BFD]">
                  {translations.about.name}
                </label>
                <p className="font-sans text-sm text-left text-white">
                  Julio Fuentes Gallardo
                </p>
              </div>

              <div>
                <label className="font-sans text-sm font-bold text-left text-[#528BFD]">
                  {translations.about.phone}
                </label>
                <p className="font-sans text-sm text-left text-white">
                  +55(62) 983441759
                </p>
              </div>

              <div>
                <label className="font-sans text-sm font-bold text-left text-[#528BFD]">
                  {translations.about.email}
                </label>
                <p className="font-sans text-sm text-left text-white">
                  jfgallardo95@gmail.com
                </p>
              </div>

              <div>
                <label className="font-sans text-sm font-bold text-left text-[#528BFD]">
                  {translations.about.linkedin}
                </label>
                <p className="font-sans text-sm text-left text-white">
                  julio-fuentes-gallardo-b06a0a221
                </p>
              </div>
            </div>

            {/* Botón de descarga */}
            <Button
              download
              className="w-[160px] sm:w-[188px] h-[48px] sm:h-[56px] rounded-md border-2 mt-8 text-black bg-[#528BFD]"
              variant="square"
              onClick={downloadCurriculum}
            >
              {translations.about.curriculum}
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}