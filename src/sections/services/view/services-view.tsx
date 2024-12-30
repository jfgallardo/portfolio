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
        <div
            className={`flex flex-col items-center p-8 bg-cover bg-center bg-no-repeat w-full ${styles.background}`}
            id="services"
        >
            <div className="w-full max-w-[1400px]">
                {/* Título */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.2] text-center text-[#528BFD] mb-6">
                    {translations.services.title}
                </h1>

                {/* Contenedor de las tarjetas */}
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 w-full">
                    {cardsItems.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            buttonText={item.buttonText}
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={80}
                                height={80}
                                className="sm:w-[96px] sm:h-[96px] md:w-[128px] md:h-[128px]"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>

    )
}