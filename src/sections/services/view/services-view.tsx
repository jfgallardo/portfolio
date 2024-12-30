import Card from '@/components/card/card.'
import IconApi from '@/public/icons/icon_services_api.svg'
import IconCoding from '@/public/icons/icon_services_coding.svg'
import IconWeb from '@/public/icons/icon_services_developing.svg'
import Image from 'next/image'
import { CardItem, Dictionary } from '@/types/types'
import styles from './styles.module.css'


type Props = {
    translations: Dictionary
};


export default function ServicesView({ translations }: Props) {


    const cardsItems: CardItem[] = [
        { title: translations.services.apiDeveloping, description: translations.services.description, buttonText: translations.services.button, icon: IconApi },
        { title: translations.services.webDeveloping, description: translations.services.description2, buttonText: translations.services.button, icon: IconWeb },
        { title: translations.services.coding, description: translations.services.description3, buttonText: translations.services.button, icon: IconCoding },
    ]

    return (
        <div className={`flex flex-col items-center p-8 bg-cover bg-center bg-no-repeat w-full ${styles.background}`} id='services'>

            <div className="w-full max-w-[1400px]">
                <h1 className='text-[48px] font-semibold leading-[79px] text-center text-[#528BFD] mb-4'>{translations.services.title}</h1>

                <div className=''>
                    <div className='flex justify-center items-center gap-8 w-full'>
                        {cardsItems.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                buttonText={item.buttonText}
                            >
                                <Image src={item.icon} alt="" width={128} height={128} />
                            </Card>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}