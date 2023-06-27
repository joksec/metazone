
import { Autoplay, Pagination,Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination,Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Pagination
    pagination: {
        el: '.testimonial-swiper-pagination',
        clickable: true,
    },

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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function Testimonial3() {
    return (
        <>
            <section className="testimonial-area-three">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="section-title title-style-two white-title mb-45">
                                <h2 className="title">Some Words From <br /> Our Customers</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-nav">
                                <button className="swiper-button-prev" />
                                <button className="swiper-button-next" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container testimonial-active-three">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more
                                                    efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more
                                                    efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more
                                                    efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more
                                                    efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-swiper-pagination" />
                </div>
                <div className="testimonial-shape-wrap">
                    <img src="/assets/img/images/testimonial_shape01.png" alt="" />
                    <img src="/assets/img/images/testimonial_shape02.png" alt="" />
                    <img src="/assets/img/images/testimonial_shape03.png" alt="" />
                    <img src="/assets/img/images/testimonial_shape04.png" alt="" />
                </div>
            </section>

        </>
    )
}
