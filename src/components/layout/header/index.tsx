
import Image from "next/image"
import Navbar from "~/components/layout/header/navbar"
import ActionIcon from "~/components/layout/header/actionIcon"
import SearchAndTheme from "~/components/layout/header/search_theme"
import { getScopedI18n } from "~/locales/server";

export default async function Header() {
    const scopedT = await getScopedI18n("header");
    const headerText = {
        home: scopedT('home'),
        intro: scopedT('intro'),
        guide: scopedT('guide'),
        product: scopedT('product'),
        service: scopedT('service'),
        resources: scopedT('resources'),
    };

    return (
        <header className="w-full border-blue-600 bg-background shadow-md text-foreground">
            <div className="w-full h-[35px] bg-[#0959ca]">
                <div className="container h-full flex justify-end items-center text-white dark:text-gray-200 font-medium text-sm px-4">
                    <span>Hội tụ và chia sẻ tri thức</span>
                </div>
            </div>
            <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between h-auto lg:h-[81px] mx-auto bg-background px-4">
                <div className="flex items-center justify-between py-4 lg:py-0">
                    <Image
                        src="/logo-lib-hitu.png"
                        alt="HITU Library Logo"
                        width={200}
                        height={41}
                        className="object-contain w-[200px] lg:w-[317px]"
                    />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto">
                    <div className="w-full lg:ml-2">
                        <Navbar headerText={headerText} />
                    </div>
                    <div className="flex justify-between lg:justify-end items-center gap-4 pb-4 lg:pb-0">
                        <ActionIcon />
                        <SearchAndTheme />
                    </div>
                </div>
            </div>
        </header>
    );
}
