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
            <section className="services-area-three mt-45">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title title-style-two text-center mb-45">
                                <span className="sub-title">Ce que nous faisons</span>
                                <h2 className="title">Codeurs de succés</h2>
                                <p>Des solutions digitales sur mesure pour propulser votre entreprise vers le sommet</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-item-wrap">
                        <Swiper {...swiperOptions} className="services-active">
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/ui.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">UI/UX Design</Link></h3>
                                        <p>Nous plaçons l'utilisateur au coeur de chaque projet, en créant des interfaces intuitives.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/web.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Site Web</Link></h3>
                                        <p>Nous concevons des sites web qui marient esthétique et performance par les derniéres téchnologies.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/md.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Marketing Digital</Link></h3>
                                        <p>Nous offrons une panoplie de solutions de marketing digital taillées pour répondre à vos objectifs.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/ui.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">SEO</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/web.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Social Media</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-item-three">
                                    <div className="services-icon-three">
                                        <img src="/assets/img/icon/md.png" alt="" />
                                    </div>
                                    <div className="services-content-three">
                                        <h3 className="title"><Link href="/services-details">Sécurité Informatique</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link href="/services-details" className="link-btn">Savoir plus <i className="fal fa-chevron-right" /></Link>
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
