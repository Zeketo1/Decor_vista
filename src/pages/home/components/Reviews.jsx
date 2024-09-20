import Subheading from "./Subheading";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay, Mousewheel } from 'swiper/modules'; // Import Mousewheel
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import user_1 from "../../../assets/images/user_1.png";
import user_2 from "../../../assets/images/user_2.png";
import user_3 from "../../../assets/images/user_3.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import "../../../styles/home/Review.css";

const Reviews = () => {
  
  const reviews = [
    {
      name: "Johny Assloy",
      image: user_1,
      statement:
        "I am genuinely impressed with the quality of the recliner chair I bought. The comfort it provides is beyond compare, and the design perfectly complements our living room. What sets apart is not just their exceptional products but also their commitment to customer satisfaction. They went the extra mile to ensure I was completely satisfied with my purchase, which is a rarity in today's market.",
    },
    {
      name: "Michael Roberts",
      image: user_2,
      statement:
        "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire. The process from selection to delivery was smooth, and the customer support team was incredibly helpful throughout.",
    },
    {
      name: "Marta Brown",
      image: user_3,
      statement:
        "My experience has been consistently outstanding. I've furnished my entire home with their products, and every piece has exceeded my expectations. From the bedroom to the home office, they offer a wide range of stylish and well-crafted furniture. What truly sets them apart is their dedicated customer support.",
    },
    {
      name: "Johny Assloy",
      image: user_1,
      statement:
        "I am genuinely impressed with the quality of the recliner chair I bought. The comfort it provides is beyond compare, and the design perfectly complements our living room. What sets apart is not just their exceptional products but also their commitment to customer satisfaction. They went the extra mile to ensure I was completely satisfied with my purchase, which is a rarity in today's market.",
    },
    {
      name: "Michael Roberts",
      image: user_2,
      statement:
        "I recently purchased a beautiful dining table and it has completely transformed our dining area. The craftsmanship and attention to detail are truly remarkable. The table is not only a functional piece of furniture but also a work of art that our family and guests admire. The process from selection to delivery was smooth, and the customer support team was incredibly helpful throughout.",
    },
    {
      name: "Marta Brown",
      image: user_3,
      statement:
        "My experience has been consistently outstanding. I've furnished my entire home with their products, and every piece has exceeded my expectations. From the bedroom to the home office, they offer a wide range of stylish and well-crafted furniture. What truly sets them apart is their dedicated customer support.",
    },
  ];

  return (
    <section className="reviews-container">
      <div className="review-header">
        <Subheading title="Our Testimonials" />
        <h2>What Our Customers Say</h2>
        <p>Discover the Stories and Experiences of Our Delighted Customers</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        mousewheel={true}
        className="reviews-swiper"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="review">
              <RiDoubleQuotesL className="i" />
              <p>{review.statement.slice(0, 250) + "..."}</p>
              <div className="profile-n-rating">
                <div className="profile">
                  <img src={review.image} alt={review.name} />
                  <span className="name">{review.name}</span>
                </div>

                <div className="stars">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
