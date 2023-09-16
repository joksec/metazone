import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
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




export default function Project3() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="project-area-three">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-10">
                            <div className="section-title title-style-two mb-90">
                                <span className="sub-title">Nos projets</span>
                                <h2 className="title">Galerie des réalisations <span>.</span></h2>
                                <p className="info-one">Découvrez nos projets accomplis qui ont marqué le monde numérique.</p>

                            </div>
                        </div>
                    </div>
                    <div className="project-nav-wrap">
                        <div className="row">
                            <div className="col-xl-2">
                                <div className="project-tab-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Identité visuel</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>UI/UX Design</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>Site Web</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex === 4 ? "nav-link active" : "nav-link"}>Audio Visuel</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-10">
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane show active" : "tab-pane"}>
                                        <div className="swiper-container project-active-three">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Logo</h2>
                                                        </div>
                                                        <div className="project-thumb-three">
                                                                 <img src="/assets/img/project/identite-visuel/logo-Finderz.jpg" alt="" />
                                                         </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Logo</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/Logo@4x.png" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Logo</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/visuel-logo-lybertyx.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Logo</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/visuel-logo-Nina.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Logo</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/visuel-logo-W-Health.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Carte visite</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/carte-visite.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Carte visite</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/carte-visite-1.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Brochure</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/Brochure-visuel.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Flyer</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/flyer2A.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Illustration</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/illustration-2.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Illustartion</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/identite-visuel/Illustration-trocmer-visuel2.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane show active" : "tab-pane"}>
                                        <div className="swiper-container project-active-three">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Mobile App</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/mobile/App_Finderz.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Mobile App</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Mobile App</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/mobile/App_Amitigo2.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Mobile App</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/mobile/App_GuideDuGolfe.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Mobile App</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane show active" : "tab-pane"}>
                                        <div className="swiper-container project-active-three">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Web Site</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/web/Awakearth-visuel.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Web Site</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                        <img src="/assets/img/project/web/Finderz visuel.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Web Site</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                        <img src="/assets/img/project/web/Page-guyanes.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Web Site</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                        <img src="/assets/img/project/web/Vitefait-visuel.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir plus</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 4 ? "tab-pane show active" : "tab-pane"}>
                                        <div className="swiper-container project-active-three">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">3D Visuel</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                           <img src="/assets/img/project/audio-visuel/3D-visuel.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">3D Visuel</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/audio-visuel/Visuel_3D.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="project-item-three">
                                                        <div className="project-content-three">
                                                            <h2 className="title">Social Media</h2>
                                                         </div>
                                                        <div className="project-thumb-three">
                                                            <img src="/assets/img/project/audio-visuel/social-media.jpg" alt="" />
                                                        </div>
                                                        <div className="project-details-btn">
                                                            <Link href="/realisations">Voir</Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-shape-wrap-two">
                    <img src="/assets/img/images/h3_project_shape.png" alt="" />
                </div>
            </section>

        </>
    )
}
