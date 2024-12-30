import Image from 'next/image'
import Telegram from '@/public/icons/telegram.svg'
import Whatsapp from '@/public/icons/whatsapp.svg'
import GitHub from '@/public/icons/github.svg'

export default function SocialMediaButtons() {


  const socialMedias = [
    { name: 'Telegram', value: 'telegram', src: Telegram, href: 'https://t.me/jfgallardo' },
    { name: 'Whatsapp', value: 'whatsapp', src: Whatsapp, href: 'https://api.whatsapp.com/send?phone=5562983441759' },
    { name: 'GitHub', value: 'github', src: GitHub, href: 'https://github.com/jfgallardo' },
  ];

  return (
    <div className='flex gap-8 w-[448px] h-[64px] pt-[151px] z-[1]'>
      {socialMedias.map((item) => (
        <a href={item.href} key={item.name} target="_blank" rel="noreferrer">
          <Image className='hover:cursor-pointer' src={item.src} alt="" width={64} height={64} />
        </a>
      ))}
    </div>
  );
}