import Link from "next/link";
import { AiOutlineX } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import LocaleToggler from "~/components/share/locale-toggler";
import SearchButton from "~/components/share/search-button";
import ThemeToggle from "~/components/share/theme-toggle";

export default function ActionIcon() {
    const icons = [
        {
            blackIcon: <BiLogoFacebook size={20} className="text-foreground" />,
            blueIcon: <BiLogoFacebook size={20} color="#3B82F6" />,
            href: 'https://facebook.com/',
        },
        {
            blackIcon: <AiOutlineX size={20} className="text-foreground" />,
            blueIcon: <AiOutlineX size={20} color="#3B82F6" />,
            href: 'https://x.com/',
        },
        {
            blackIcon: <BiLogoYoutube size={20} className="text-foreground" />,
            blueIcon: <BiLogoYoutube size={20} color="#3B82F6" />,
            href: 'https://youtube.com/',
        },
    ];

    const IconButton = ({
        blackIcon,
        blueIcon,
        href,
    }: {
        blackIcon: React.ReactNode;
        blueIcon: React.ReactNode;
        href: string;
    }) => {
        return (
            <Link href={href} className="relative w-9 h-9 flex items-center justify-center bg-background rounded-full border border-gray-300 overflow-hidden group">
                <div className="absolute transition-all duration-300 transform group-hover:-translate-y-full group-hover:opacity-0">
                    {blackIcon}
                </div>
                <div className="absolute transition-all duration-300 transform translate-y-[200%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    {blueIcon}
                </div>
            </Link>
        );
    };

    return (
        <div className="flex items-center space-x-4">
            <div className="flex gap-2 pl-2 justify-center">
                {icons.map((icon, index) => (
                    <IconButton
                        key={index}
                        href={icon.href}
                        blackIcon={icon.blackIcon}
                        blueIcon={icon.blueIcon}
                    />
                ))}
            </div>
            <div className="flex gap-2 justify-center">
                <ThemeToggle />
                <LocaleToggler />
                <SearchButton />
            </div>
        </div>
    );
}
