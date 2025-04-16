import { FaHome } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0959ca] text-white py-6 px-4 md:px-10 2xl:px-0 shadow-lg md:text-base">
            <div className="container mx-auto">
                <div className="text-base md:text-md font-bold mb-4 flex items-center justify-center gap-2 text-center">
                    <FaHome className="text-xl md:text-2xl" />
                    THƯ VIỆN CAO ĐẰNG CÔNG THƯƠNG TP.HCM © 2024
                </div>

                <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-sm text-center">
                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <p className="text-gray-100 max-w-xs md:max-w-full">
                            Địa chỉ: Số 60 Tăng Nhơn Phú - Phường Phước Long B - Thành phố Thủ Đức - TP. Hồ Chí Minh
                        </p>
                    </div>

                    <span className="hidden md:inline text-gray-300">||</span>

                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.5 4.5l-6.5 4.5-6.5-4.5V6l6.5 4.5L18.5 6v2.5z" />
                        </svg>
                        <p className="text-gray-100 break-words">Email: thuviencongthuong@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
