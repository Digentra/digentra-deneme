import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import BookCard from '../molecules/BookCard';
import SkeletonCard from '../molecules/SkeletonCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BookCarousel({ title, books }) {
  const isLoading = !books || books.length === 0;

  return (
    <div className="py-8">
      <h2 className="font-heading text-3xl font-bold text-primary-dark dark:text-white mb-6">{title}</h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={!isLoading ? {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          } : false}
          loop={!isLoading}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
          }}
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonCard />
                </SwiperSlide>
              ))
            : books.map((book) => (
                <SwiperSlide key={book.id}>
                  <BookCard book={book} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}