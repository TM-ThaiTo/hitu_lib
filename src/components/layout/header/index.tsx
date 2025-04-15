import Image from "next/image"
import Navbar from "~/components/layout/header/navbar"
import ActionIcon from "~/components/layout/header/actionIcon"

export default function Header() {
    return (
        <header className="w-full border-blue-600 bg-white shadow-md">
            <div className="w-full h-[35px] bg-[#0959ca]">
                <div className="container h-full flex justify-end items-center text-white font-">
                    <span>Hội tụ và chia sẻ tri thức</span>
                </div>
            </div>
            <div className="container flex items-center justify-between h-[81px] mx-auto bg-white ">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/logo-lib-hitu.png"
                        alt="HITU Library Logo"
                        width={317}
                        height={65}
                        className="object-contain"
                    />
                </div>
                <Navbar />
                <ActionIcon />
            </div>
        </header>
    )
}