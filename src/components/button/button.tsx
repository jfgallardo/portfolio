import Image from 'next/image';
import Download from '@/public/icons/download.svg'

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string,
  size?: string,
  isDisabled?: boolean,
  download?: boolean,
  className?: string,
};

export default function Button({ children, onClick, variant = "primary", size = "md", isDisabled = false, download = false, className = "", ...props }: Props) {

  const baseStyles = "inline-flex items-center justify-center font-medium focus:outline-none focus:ring transition gap-2";

  const variants: any = {
    primary: "bg-[#2970FF] hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-[#528BFD] hover:bg-blue-700 focus:ring-gray-500",
    outline: "bg-transparent focus:ring-gray-500",
    square: "bg-white ",
  };

  const sizes: any = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${isDisabled ? disabledStyles : ""} ${className}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonStyles}
      disabled={isDisabled}
      {...props}
    >
      {download && <Image src={Download} alt=""  />}
      {children}
    </button>
  );
}
