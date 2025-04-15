import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="flex space-x-6">
                <Link href="/" className="text-gray-800 hover:text-blue-600">
                    TRANG CHỦ
                </Link>
                <Link href="/gioi-thieu" className="text-gray-800 hover:text-blue-600">
                    GIỚI THIỆU
                </Link>
                <Link href="/huong-dan" className="text-gray-800 hover:text-blue-600">
                    HƯỚNG DẪN
                </Link>
                <Link href="/dich-vu" className="text-gray-800 hover:text-blue-600">
                    DỊCH VỤ
                </Link>
                <Link href="/san-pham" className="text-gray-800 hover:text-blue-600">
                    SẢN PHẨM
                </Link>
                <Link href="/tai-nguyen" className="text-gray-800 hover:text-blue-600">
                    TÀI NGUYÊN
                </Link>
            </nav>
        </>
    )
}