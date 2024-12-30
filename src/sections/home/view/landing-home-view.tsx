import SocialMediaButtons from '@/components/social-media-buttons/social-media-buttons'
import Image from 'next/image'
import Photo from '@/public/images/1.png'
import { Dictionary } from '@/types/types';

type Props = {
  translations: Dictionary
};

export default function LandingHomeView({ translations }: Props) {

  return (
    <div id='home' className='flex justify-end items-center bg-[#080922] w-full'>

      <div className="w-full max-w-[1400px]">
        <p className='absolute inset-0 text-white opacity-10 text-[250px] font-bold top-[254px] left-[130px] hover:opacity-20'>
          Julio
        </p>
        <p className='absolute inset-0 text-white opacity-10 text-[250px] font-bold top-[523px] left-[194px] hover:opacity-20'>
          Gallardo
        </p>
        <SocialMediaButtons />
        <div className='flex items-center justify-between text-white'>

          <div className='flex flex-col justify-evenly w-[586px] h-[268px]'>
            <p className='font-sans font-semibold text-[48px] leading-10'>{translations.home.title}
            </p>
            <p className='leading-6'>
              {translations.home.subtitle}
            </p>
          </div>

          <div className='w-[666.97px] h-[852px]'>
            <Image src={Photo} alt="Photo home" />
          </div>

        </div>
      </div>



    </div>
  )

}