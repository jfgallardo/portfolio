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
    <div id="about" className='flex flex-col items-center p-8 bg-[#080922] w-full'>

      <div className="w-full max-w-[1400px]">
        <h1 className='text-[48px] font-semibold leading-[79px] text-center text-[#528BFD] mb-4'>
          {translations.about.title}</h1>

        <div className='flex items-center justify-center gap-8 w-full'>

          <div>
            <Image src={Photo} alt="" width={507} height={543} />
          </div>

          <div className='flex flex-col items-center w-[468px] h-[490px] 
                        text-[#528BFD] gap-3'>
            <p className='font-sans text-[32px] font-semibold 
                        text-left'>{translations.about.greeting}</p>
            <p className='font-sans text-[14px] leading-[25px] text-left'>
              {translations.about.description}
            </p>


            <div className='grid grid-cols-2 gap-5 w-full p-8 bg-[#060617]'>

              <div>
                <label className='font-sans text-sm font-bold 
                                leading-[10px] text-left  decoration-skip-ink-none 
                                text-custom-color"'>{translations.about.name}</label>
                <p className='font-sans text-sm font-normal text-left  
                           decoration-skip-ink-none 
              text-white'>Julio Fuentes Gallardo</p>
              </div>

              <div >
                <label className='font-sans text-sm font-bold 
                                leading-[10px] text-left  decoration-skip-ink-none 
                                text-custom-color"'>{translations.about.phone}</label>
                <p className='font-sans text-sm font-normal text-left  
                           decoration-skip-ink-none 
              text-white'>+55(62) 983441759</p>
              </div>

              <div >
                <label className='font-sans text-sm font-bold 
                                leading-[10px] text-left  decoration-skip-ink-none 
                                text-custom-color'>{translations.about.email}</label>
                <p className='font-sans text-sm font-normal text-left  
                           decoration-skip-ink-none 
                        text-white'>jfgallardo95@gmail.com</p>
              </div>

              <div>
                <label className='font-sans text-sm font-bold 
                                leading-[10px] text-left decoration-skip-ink-none 
                                text-custom-color'>{translations.about.linkedin}</label>
                <p className='font-sans text-sm font-normal text-left 
                           decoration-skip-ink-none 
                        text-white'>
                  julio-fuentes-gallardo-b06a0a221
                </p>
              </div>
            </div>
            <Button
              download
              className='w-[188px] h-[56px] rounded-md border-2 mt-8 text-black'
              variant='square'
              onClick={downloadCurriculum}
            > {translations.about.curriculum}
            </Button>
          </div>

        </div>

      </div>


    </div>
  );
}