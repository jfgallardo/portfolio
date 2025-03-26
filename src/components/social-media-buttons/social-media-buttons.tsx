import Image from "next/image";
import Telegram from "@/public/icons/telegram.svg";
import Whatsapp from "@/public/icons/whatsapp.svg";
import GitHub from "@/public/icons/github.svg";

export default function SocialMediaButtons() {
  const socialMedias = [
    {
      name: "Telegram",
      value: "telegram",
      src: Telegram,
      href: "https://t.me/jfgallardo",
    },
    {
      name: "Whatsapp",
      value: "whatsapp",
      src: Whatsapp,
      href: "https://api.whatsapp.com/send?phone=5561991727146",
    },
    {
      name: "GitHub",
      value: "github",
      src: GitHub,
      href: "https://github.com/jfgallardo",
    },
  ];

  return (
    <div className="flex justify-center md:justify-normal gap-8 md:w-[448px] md:h-[64px] pt-8 md:pt-[151px] z-[1] ">
      {socialMedias.map((item) => (
        <a href={item.href} key={item.name} target="_blank" rel="noreferrer">
          <Image
            className="hover:cursor-pointer w-12 h-12 md:w-[64px] md:h-[64px]"
            src={item.src}
            alt=""
          />
        </a>
      ))}
    </div>
  );
}
