import Link from "next/link"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import VideoPopup from "../elements/VideoPopup"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 844500,
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
                                <div className="banner-content-three">
                                         <p class="title" data-animation="fadeInUp" data-delay=".4s">Explorez les derniéres tendances du web et du digital pour transformer votre expérience en ligne.</p>
                                        <div className="slider-btn">
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="pl-20 fal fa-chevron-right" /></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-content-two">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".8s">Expérience Digitale Inégalée-Construisez votre présence en ligne</h2>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                <div className="banner-content-three">
                                         <p class="title" data-animation="fadeInUp" data-delay=".4s">Explorez les derniéres tendances du web et du digital pour transformer votre expérience en ligne.</p>
                                        <div className="slider-btn">
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="pl-20 fal fa-chevron-right" /></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-content-two">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".8s">Des solutions qui <span>boostent</span> vos projets</h2>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                <div className="banner-content-three">
                                         <p class="title" data-animation="fadeInUp" data-delay=".4s">Explorez les derniéres tendances du web et du digital pour transformer votre expérience en ligne.</p>
                                        <div className="slider-btn">
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="pl-20 fal fa-chevron-right" /></Link>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-content-two">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".8s">Des solutions qui <span>boostent</span> vos projets</h2>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="container mt-50">
    <div class="row justify-content-center">
        <div class="col-xl-1 col-lg-7">
            <div class="text-center">
            <div className="slider-btn">
               
                                            <VideoPopup/>
                                        </div>
        </div>
        </div>
        </div>
        </div>
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
