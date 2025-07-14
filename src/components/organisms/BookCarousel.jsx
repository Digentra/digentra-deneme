import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import BookCard from '../molecules/BookCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BookCarousel({ title, books }) {
  return (
    <div className="py-8">
      <h2 className="font-heading text-3xl font-bold text-primary-dark dark:text-white mb-6">{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}