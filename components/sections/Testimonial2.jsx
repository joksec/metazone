import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area-two pt-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-title title-style-two white-title text-center mb-60">
                                <span className="sub-title">Testimonial</span>
                                <h2 className="title">What People Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <Swiper {...swiperOptions} className="testimonial-active-two">
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the standard dummy text”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Alfredo Bator</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Abram Gouse</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the standard dummy text”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Kadin Lubin</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar04.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Emerson Mango</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the standard dummy text”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Kadin Lubin</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item-two">
                                <div className="testimonial-content-two">
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                    <p>‘’Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
                                </div>
                                <div className="testimonial-info-two">
                                    <div className="thumb">
                                        <img src="/assets/img/images/testimonial_avatar04.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Emerson Mango</h5>
                                        <span>Director of Marketing</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
