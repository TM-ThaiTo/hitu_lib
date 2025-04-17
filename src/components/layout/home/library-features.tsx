import Image from 'next/image';

const features = [
    {
        title: 'TRA CỨU TÀI LIỆU',
        image: '/feature/banner-book-hitu.png',
        link: '#',
    },
    {
        title: 'PHÁT HÀNH TÀI LIỆU',
        image: '/feature/banner-khao-sat-ban-doc.png',
        link: '#',
    },
    {
        title: 'THƯ VIỆN LIÊN KẾT',
        image: '/feature/banner-tra-cuu-opac.png',
        link: '#',
    },
    {
        title: 'CỘNG TÁC VIÊN THƯ VIỆN',
        image: '/feature/cong-tac-vien-thu-vien-2024.png',
        link: '#',
    },
    {
        title: 'KHẢO SÁT BẠN ĐỌC VỀ HOẠT ĐỘNG THƯ VIỆN',
        image: '/feature/thu-vien-lien-ket.png',
        link: '#',
    },
];

export default function LibraryFeatures() {
    return (
        <div className="lg:ml-6 mt-6 lg:mt-0 hidden sm:block">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 w-full lg:w-[290px]">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[275px] h-full max-h-[170px] mx-auto"
                    >
                        <Image
                            src={feature.image}
                            alt={feature.title}
                            width={275}
                            height={170}
                            className="w-full h-auto object-fill"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
