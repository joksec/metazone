import Link from "next/link"

import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
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

export default function Services3() {
    return (
        <>
            <section className="services-area-three">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title title-style-two text-center mb-45">
                                <span className="sub-title">What We Do</span>
                                <h2 className="title">We Make <span>Designs</span> <br /> that Lead and Inpire.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-item-wrap">
                        <Swiper {...swiperOptions} className="services-active">
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon01.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">UI/UX Design</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon02.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Website Design</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon03.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Branding</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon01.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">UI/UX Design</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon02.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Website Design</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/h3_services_icon03.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Branding</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Learn More <i className="fal fa-long-arrow-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="services-shape">
                    <img src="/assets/img/images/h3_services_shape.png" alt="" />
                </div>
            </section>

        </>
    )
}
