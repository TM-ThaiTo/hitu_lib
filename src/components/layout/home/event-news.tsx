import Image from "next/image"
import Link from "next/link";
import TitleSlider from "~/components/ui/title-slider";

const newsData = [
    {
        title: 'Thông báo cuộc thi “Chia sẻ góc học tập” – Khoe góc học, rinh quà hot!',
        image: '/news/cuoc-thi-khoe-goc-hoc-300x128.png',
        link: '#',
    },
    {
        title: 'Danh mục sách mới bổ sung học kỳ 1 năm học 2024 – 2025',
        link: '#',
        image: '/news/DanhSachThamGiaTV2024-2025-01-300x246.jpg',
    },
    {
        title: 'Thông báo nghỉ lễ Giỗ tổ Hùng Vương 2025',
        link: '#',
        image: '/news/ResearchGate-300x229.jpg',
    },
    {
        title: 'ResearchGate – nền tảng kết nối dành cho cộng đồng nghiên cứu',
        link: '#',
        image: '/news/thong-bao-300x168.png',
    },
    {
        title: 'Thông báo về kết quả tham gia các phong trào thi đua “Xây dựng xã hội học tập suốt đời và Văn hóa đọc” năm học 2024 – 2025 tại Thư viện trường Cao đẳng Công Thương',
        link: '#',
        image: '/news/thong-bao-300x168.png',
    },
    {
        title: 'Thông báo sinh viên xét tốt nghiệp đợt 01 năm 2025 đang mượn sách Thư viện',
        link: '#',
        image: '/news/thong-bao-300x168.png',
    },
];

export default function EventAndNew() {
    return (
        <section className='w-full max-w-[1074px] mt-5'>
            <div className="relative rounded-md shadow-lg p-6 bg-white">
                <TitleSlider title="Tin tức & Sự kiện" />
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                    {newsData.map((item, index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 p-4 border border-gray-100 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative w-[120px] h-[80px] flex-shrink-0 rounded overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1">
                                <Link href={item.link}>
                                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
                                        {item.title}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}