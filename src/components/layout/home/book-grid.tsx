import React from 'react';
import TitleSlider from '~/components/ui/title-slider';

const books = [
    { title: "Giáo trình về kỹ thuật 1", category: "Giáo trình về kỹ thuật 1", url: "/books/giao-trinh-ve-ky-thuat-1-2024.png" },
    { title: "Giáo trình công nghệ chế biến rau củ quả và các món chả", category: "Giáo trình công nghệ chế biến...", url: "/books/gt-giao-cncb-rau-cu-qua-2023-1.jpg" },
    { title: "Giáo trình thiết kế ráp công nghiệp", category: "Giáo trình thiết kế ráp công...", url: "/books/gt-thiet-ke-rap-cong-nghiep-20241-1.jpg" },
    { title: "Giáo trình toán ứng dụng C", category: "Giáo trình toán ứng dụng C", url: "/books/toan-ung-dung-c-2024.jpg" },
    { title: "Giáo trình nghề thuật lãnh đạo", category: "Giáo trình nghề thuật lãnh đạo", url: "/books/giao-trinh-nghe-thuat-lanh-dao-2023.jpg" },
    { title: "Giáo trình quản trị bán hàng", category: "Giáo trình quản trị bán hàng", url: "/books/gt-quan-tri-ban-hang-vu-nhat-tan-2023.png" },
    { title: "Giáo trình kỹ thuật lập trình", category: "Giáo trình kỹ thuật lập trình", url: "/books/gt-ky-thuat-lap-trinh-2022.png" },
    { title: "English for Mechanical Engineering", category: "English for Mechanical...", url: "/books/english-for-mechanical-engineering-2022.png" },
];

const BookCard: React.FC<{ title: string; category: string; url: string }> = ({ title, category, url }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-[160px] border border-gray-200 p-2 rounded-md bg-white hover:shadow-md transition-shadow duration-300">
            <img src={url} alt={title} className="w-full h-[180px] object-cover rounded" />
            <p className="text-sm mt-2 text-center hover:text-blue-600 cursor-pointer">{category}</p>
        </div>
    );
};

const BookGrid: React.FC = () => {
    return (
        <div className="p-4 rounded-md bg-white shadow-lg mt-5">
            <TitleSlider title={'Giáo trình nổi bộ'} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 justify-items-center">
                {books.map((book, index) => (
                    <BookCard
                        key={index}
                        title={book.title}
                        category={book.category}
                        url={book.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookGrid;