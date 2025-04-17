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
        <>
            <section className='max-w-[1074px] w-full bg-white mt-5'>
                <div className="relative rounded-[5px] shadow-lg p-6">
                    <div className="max-w-screen-xl mx-auto">
                        <TitleSlider title={'Tin tức & Sự kiện'} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                            {newsData?.map((item, index) => (
                                <div key={index} className="group flex items-start space-x-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm transition" >
                                    <div className="max-w-[118px] w-full h-[80px] relative rounded overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt="News"
                                            fill
                                            className="object-fill transition-transform duration-300 group-hover:scale-105 w-[118px] h-[60px]"
                                        />
                                    </div>

                                    <p className="text-sm font-medium text-gray-800 transition-colors duration-300 group-hover:text-blue-600 line-clamp-4 pl-4">
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}