import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../public/2_1612259923_t63XWicUCx.png"
import image2 from "../../public/online-shop.jpg"
import image3 from "../../public/Online-Shoppin.png"

import styles from "./HeaderSlider.module.css";

export default function HeaderSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={image1} alt="Slide 1" className={styles.image} />
            <div className={styles.overlay}>
              <h2>Shopping webSite</h2>
              <p>Developed By MrKhatibi</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={image2} alt="Slide 2" className={styles.image} />
            <div className={styles.overlay}>
              <h2>Shopping webSite</h2>
              <p>Developed By MrKhatibi</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={styles.slide}>
            <img src={image3} alt="Slide 3" className={styles.image} />
            <div className={styles.overlay}>
              <h2>Shopping webSite</h2>
              <p>Developed By MrKhatibi</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
