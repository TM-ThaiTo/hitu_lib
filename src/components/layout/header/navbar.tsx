'use client';

import Link from "next/link";
import { useState } from "react";
import { cn } from "~/lib/utils";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "~/components/ui/dropdown-menu"
import Icons from "~/components/share/icons";

const styles = cn(
    "relative inline-block text-gray-800 text-sm font-bold uppercase cursor-pointer flex items-center text-foreground",
    "hover:text-blue-600",
    "after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-full",
    "after:scale-x-0 after:origin-left after:bg-blue-600",
    "after:transition-transform after:duration-300 after:ease-out",
    "hover:after:scale-x-100"
);

export default function Navbar({
    headerText
}: {
    headerText: {
        home: string,
        intro: string,
        guide: string,
        service: string,
        product: string,
        resources: string,
        [key: string]: string;
    };
}) {
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

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <nav className="flex space-x-6 items-center h-full justify-center">
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
                        <DropdownMenu open={openIndex === index} onOpenChange={(open) => {
                            if (!open) setOpenIndex(null);
                        }}>
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
                                    <DropdownMenuItem asChild key={idx}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
            )}
        </nav>
    );
}
