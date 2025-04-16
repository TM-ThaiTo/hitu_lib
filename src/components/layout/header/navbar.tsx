'use client';
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { cn } from "~/lib/utils";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "~/components/ui/dropdown-menu"
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import Icons from "~/components/share/icons";
import { LocaleHeaderTypes } from "~/types/locale";
import ActionIcon from "~/components/layout/header/action-icon";

const styles = cn(
    "relative inline-block text-gray-800 text-sm font-bold uppercase cursor-pointer flex items-center text-foreground whitespace-nowrap",
    "hover:text-blue-600",
    "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
    "after:scale-x-0 after:origin-left after:bg-blue-600",
    "after:transition-transform after:duration-300 after:ease-out",
    "hover:after:scale-x-100"
);

export default function Navbar({ headerText }: { headerText: LocaleHeaderTypes }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const actions = [
        { label: headerText.home, type: 1, href: '/' },
        {
            label: headerText.intro, type: 2, child: [
                { label: 'Giới thiệu chung', href: '#' },
                { label: 'Quy trình làm việc', href: '#' },
                { label: 'Thông báo', href: '#' },
                { label: 'Thư cảm ơn', href: '#' },
                { label: 'Tin tức sự kiện', href: '#' },
                { label: 'Hình ảnh hoạt động', href: '#' },
                { label: 'Văn bản pháp quy thư viện', href: '#' },
            ]
        },
        { label: headerText.guide, type: 1, href: '#' },
        {
            label: headerText.service, type: 2, child: [
                { label: 'Đọc mượn giáo trình, tài liệu', href: '#' },
                { label: 'Phát hành giáo trình, tài liệu nội bộ', href: '#' },
                { label: 'Cung cấp không gian và tiện ích học tập', href: '#' },
                { label: 'Mượn tài liệu thư viện', href: '#' },
                { label: 'Tư vấn và hướng dẫn tìm tín chỉ theo yêu cầu', href: '#' },
            ]
        },
        {
            label: headerText.product, type: 2, child: [
                { label: 'Danh mục sách mới', href: '#' },
                { label: 'Giới thiệu sách hay', href: '#' },
            ]
        },
        {
            label: headerText.resources, type: 2, child: [
                { label: 'Tài liệu giấy', href: '#' },
                { label: 'Tài liệu số', href: '#' },
                { label: 'Tài liệu nội bộ', href: '#' },
                { label: 'Cơ sở dữ liệu', href: '#' },
            ]
        },
    ];

    function renderAction() {
        return (
            <>
                {actions.map((action, index) =>
                    action.type === 1 ? (
                        <Link key={index} href={action.href!} className={styles}>
                            {action.label}
                        </Link>
                    ) : (
                        <div
                            key={index}
                            onMouseEnter={() => setOpenIndex(index)}
                            onMouseLeave={() => setOpenIndex(null)}
                            className="relative h-full"
                        >
                            <DropdownMenu open={openIndex === index} onOpenChange={(open) => !open && setOpenIndex(null)}>
                                <div className="h-full flex items-center">
                                    <DropdownMenuTrigger asChild>
                                        <span className={styles}>
                                            <span className="inline-flex items-center gap-1">
                                                {action.label}
                                                <Icons.chevronDown className="w-4 h-4 transition-colors duration-200" />
                                            </span>
                                        </span>
                                    </DropdownMenuTrigger>
                                </div>
                                <DropdownMenuContent align="start" sideOffset={26}>
                                    {action.child?.map((item, idx) => (
                                        <DropdownMenuItem asChild key={idx} className="h-10">
                                            <Link href={item.href} className="text-lg font-medium px-4">{item.label}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )
                )}
            </>
        )
    }

    function renderSheet() {
        return (
            <>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="text-foreground">
                            <Menu className="w-6 h-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col gap-4 mt-8">
                            {actions.map((action, index) => (
                                action.type === 1 ? (
                                    <Link key={index} href={action.href!} className="text-sm font-semibold text-foreground">
                                        {action.label}
                                    </Link>
                                ) : (
                                    <div key={index}>
                                        <p className="text-sm font-semibold text-foreground mb-1">{action.label}</p>
                                        <div className="pl-2 flex flex-col gap-1">
                                            {action.child?.map((item, idx) => (
                                                <Link key={idx} href={item.href} className="text-sm text-muted-foreground">
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </>
        )
    }

    return (
        <div className="container flex flex-col lg:flex-row lg:items-center lg:justify-between h-auto lg:h-[81px] mx-auto bg-background px-9 2xl:px-0">
            <div className="flex items-center justify-between py-4 lg:py-0 w-full">
                <Link href="/">
                    <Image src="/logo-lib-hitu.png" alt="HITU Library Logo" width={200} height={41} className="object-contain w-[317px]" />
                </Link>

                {/* với màn > 1024px thì ẩn chỉ hiện khi nhỏ hơn */}
                <div className="lg:hidden flex">
                    <div className="hidden md:block pr-3">
                        <ActionIcon />
                    </div>
                    {renderSheet()}
                </div>
            </div>
            <div className="hidden lg:flex flex-row items-center w-auto gap-4 h-full">
                <nav className="flex space-x-6 items-center h-full">
                    {renderAction()}
                </nav>
                <div className="hidden lg:flex items-center">
                    <ActionIcon />
                </div>
            </div>
        </div>
    );
}
