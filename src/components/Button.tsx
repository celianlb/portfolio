import Link from "next/link";

interface ButtonProps {
    link: string;
    text?: string;
    className?: string;
    children?: React.ReactNode;
    target?: string;
    onClick?: () => void;
  }

export default function Button({ link, text, className, children, target }: ButtonProps) {
    return(
        <div>
            <a href={link} target={target}>
                <button className={`${className} bg-secondary text-primary font-rnssanz font-semibold text-[16px] px-8 py-3 border-[1px] rounded-[100px] hover:bg-primary hover:text-secondary transition hover:duration-100 hover:ease-in`}>
                    {text}
                    {children}
                </button>
            </a>
        </div>
    );
}