
import Navbar from "~/components/layout/header/navbar"
import { getLocaleHeader } from "~/constants/getLocale";

export default async function Header() {
    const headerText = await getLocaleHeader();

    return (
        <header className="w-full border-blue-600 bg-background shadow-md text-foreground">
            <div className="w-full h-[35px] bg-[#0959ca]">
                <div className="container h-full flex justify-end items-center text-white dark:text-gray-200 font-medium text-sm px-9 2xl:px-0">
                    <span>Hội tụ và chia sẻ tri thức</span>
                </div>
            </div>
            <Navbar headerText={headerText} />
        </header>
    );
}
