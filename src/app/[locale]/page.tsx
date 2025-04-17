import Banner from '~/components/layout/home/banner';
import EventAndNew from '~/components/layout/home/event-news';

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
    <div className="container h-auto">
      <div className='mt-4 flex flex-col'>
        <Banner urls={urls} />
        <EventAndNew />
      </div>
    </div>
  );
}