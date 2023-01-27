import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonials.css";
import { EffectCards } from "swiper";

import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">
            Testimonials
          </h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01"><img src={avatar01} alt="avatar01s" /></div>
                <h2>Jesica Fernandes</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A corrupti totam ea accusamus quae dolore accusantium, inventore asperiores, itaque ad beatae minus dignissimos expedita eveniet! Itaque nihil delectus sapiente cupiditate!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02"><img src={avatar02} alt="avatar01s" /></div>
                <h2>Jesica Fernandes</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A corrupti totam ea accusamus quae dolore accusantium, inventore asperiores, itaque ad beatae minus dignissimos expedita eveniet! Itaque nihil delectus sapiente cupiditate!</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
