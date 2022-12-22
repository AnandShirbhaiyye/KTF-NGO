import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Testimonial.css";

import { EffectCoverflow, Pagination } from "swiper";

function Testimonial() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonailBox">
                  <img src="" className="quote" alt="" />
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages,
                    </p>
                    <div className="details">
                      <div className="imgBx">
                        <img src="" alt="" />
                      </div>
                      <h3>
                        Someone famous
                        <br />
                        <span>Creative DEsigner</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonial;
