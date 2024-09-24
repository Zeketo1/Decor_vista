import "../../../styles/about/Comment.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { commentImgs } from "../../../data/about";

const Comment = () => {
  return (
    <div className="customer-reviews-section">
      <div className="customer-reviews-header">
        <h1 className="reviews-title">This is What Our Customers Say</h1>
        <p className="reviews-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper-container"
      >
        {commentImgs.map(({ image, name, job, comment, star }, i) => (
          <SwiperSlide className="swiper-slide-custom" key={i}>
            <div className="review-card">
              <img src={image} alt="" className="review-image" />
              <div className="review-content">
                <h1 className="review-name">{name}</h1>
                {/* <p className="review-job">{job}</p> */}
                <p className="review-comment">{comment}</p>
                <div className="review-divider"></div>
                <img src={star} alt="" className="review-star" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
