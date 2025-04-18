import Banner from '~/components/layout/home/banner';
import BookGrid from '~/components/layout/home/book-grid';
import EventAndNew from '~/components/layout/home/event-news';
import LibraryFeatures from '~/components/layout/home/library-features';

const urls = [
  {
    url: '/banner/banner-tuyen-sinh-2025.jpg',
    link: '#',
  },
  {
    url: '/banner/cuoc-thi-khoe-goc-hoc.png',
    link: '#',
  },
  {
    url: '/banner/DiemRenLuyenWebsite.jpg',
    link: '#',
  },
  {
    url: '/banner/NgayMoiTruong2024-1.jpg',
    link: '#',
  },
  {
    url: '/banner/nha-gio-viet-nam-2024.jpg',
    link: '#',
  },
  {
    url: '/banner/plvn-2024-update.jpg',
    link: '#',
  },
  {
    url: '/banner/tu-sach-tong-bi-thu-nguyen-phu-trong.jpg',
    link: '#',
  }
];

export default function Home() {
  return (
    <div className="container flex flex-col px-9 2xl:px-0 mt-10">
      <div className='w-full flex flex-col lg:flex-row '>
        <div className="w-full max-w-[1100px]">
          <Banner urls={urls} />
          <EventAndNew />
        </div>
        <LibraryFeatures />
      </div>
      <BookGrid />
    </div>
  );
}