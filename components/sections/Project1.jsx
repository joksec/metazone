
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
}
export default function Project1() {
    return (
        <>
            <section className="project-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="project-content">
                                <div className="section-title white-title mb-30">
                                    <span className="sub-title">Our Complete Craft</span>
                                    <h2 className="title">Some of Our Work in Craft Digital Agency</h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="content-bottom">
                                    <Link href="/about-me" className="btn">View All Project <span /></Link>
                                    <div className="project-nav">
                                        <button className="swiper-button-prev" />
                                        <button className="swiper-button-next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="project-item-wrap">
                                <div className="swiper-container project-active">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link href="/project-details"><img src="/assets/img/project/project_img01.jpg" alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link href="/project-details"><img src="/assets/img/project/project_img02.jpg" alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link href="/project-details"><img src="/assets/img/project/project_img03.jpg" alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link href="/project-details" className="popup-image"><img src="/assets/img/project/project_img02.jpg" alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-shape-wrap">
                    <img src="/assets/img/project/project_shape01.png" alt="" className="shape-one ribbonRotate" />
                    <img src="/assets/img/project/project_shape02.png" alt="" className="shape-two ribbonRotate" />
                </div>
            </section>

        </>
    )
}
