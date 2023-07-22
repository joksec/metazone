import Link from "next/link"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import VideoPopup from "../elements/VideoPopup"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,
}


export default function Slider1() {
    return (
        <>
            <section className="slider-area">
                <Swiper {...swiperOptions} className="slider-active">
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay="2.8s">
                                        <img src="/assets/img/slider/slider_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".8s">Nous sommes les artisans du digital.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <Link href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></Link>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/assets/img/slider/slider_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".8s">Des solutions qui <span>boostent</span> vos projets</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <a href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></a>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/assets/img/slider/px4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <a href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></a>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="slider-shape-wrap">
                    <img src="/assets/img/slider/slider_shape01.png" alt="" />
                    <img src="/assets/img/banner/h2_banner_shape04.png" alt="" />
                    <img src="/assets/img/slider/slider_shape03.png" alt="" />
                    <img src="assets/img/banner/h2_banner_shape03.png" alt="" />
                    <img src="/assets/img/slider/slider_shape05.png" alt="" />
                    <img src="/assets/img/banner/h2_banner_shape02.png" alt="" />
                </div>
            </section>

        </>
    )
}
