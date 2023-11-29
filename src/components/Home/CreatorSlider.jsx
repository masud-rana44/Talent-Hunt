import { FreeMode, Pagination, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const CreatorSlider = ({ creators }) => {
  console.log(creators);
  return (
    <div className="mt-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "blue",
        }}
        loop={true}
        autoplay={true}
        spaceBetween={10}
        pagination={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
        className="mySwiper2 max-h-screen"
      >
        {creators?.map((creator, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
              <img
                className="w-full object-cover h-[600px]"
                src={creator?.image}
              />
              <div className="absolute text-white bottom-10 right-10 font-bold">
                <div className="text-6xl">{creator?.creator}</div>
                <div className="text-2xl">
                  Total Spend: {creator?.totalPrizeMoney}$
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CreatorSlider;
