import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
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
    pagination: {
        el: '.swiper-pagination2',
        clickable: true
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
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Audio visuel"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>Les applications mobiles sont de plus en plus populaires auprès des utilisateurs, car elles permettent de rester connecté en tout lieu et à tout moment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-details-shape">
                        <img src="/assets/img/images/services_details_shape.png" alt="" />
                    </div>
                </div>
                {/* services-details-area-end */}
                
                {/* company-area */}
                <section className="services-area pt-35 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon01.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Animation 3D</Link></h4>
                                    <p>Des visuels 3D époustouflants, qui ajoutent une dimension supplémentaire à vos projets</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon02.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Conception 2D</Link></h4>
                                    <p>Services de conception graphique 2D pour donner du dynamisme et de l'impact à vos projets</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon03.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Screencast</Link></h4>
                                    <p>Notre équipe de production vous accompagne dans la création de screencasts professionnels.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon04.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Social media Visuel</Link></h4>
                                    <p>Notre équipe produit des visuels percutants, tels que : images/vidéos adaptées aux spécifiques formats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                {/* company-area-end */}
                {/* services-area */}
                <section className="project-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="project-content">
                                <div className="section-title white-title mb-30">
                                    <span className="sub-title">Expertise audiovisuel</span>
                                    <h2 className="title">Solutions Audiovisuelles Complètes</h2>
                                </div>
                                <p>Nous offrons une gamme complète de solutions audiovisuelles pour répondre à tous vos besoins créatifs et visuels.</p>
                                <p>Que vous recherchiez des animations 3D époustouflantes, des conceptions graphiques percutantes, des screencasts professionnels ou du contenu visuel captivant pour les réseaux sociaux, notre équipe d'experts est là pour transformer votre vision en réalité.</p>
                                <div className="content-bottom">
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
                                    </Swiper>
                                </div>
                            </div>
                            <div className="mt-30">
                                        <div className="swiper-pagination2"></div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="project-shape-wrap">
                    <img src="/assets/img/project/project_shape01.png" alt="" className="shape-one ribbonRotate" />
                    <img src="/assets/img/project/project_shape02.png" alt="" className="shape-two ribbonRotate" />
                </div>
            </section>
                {/* services-area-end */}
                {/* project-area */}
                 
                {/* project-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-80">
                                    <span className="sub-title">Newsletter</span>
                                    <h2 className="title">Recevez les dernières offres</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="newsletter-form">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email address" />
                                        <button type="submit" className="btn">Abonnez-vous <span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-shape-wrap">
                        <img src="/assets/img/images/newsletter_bg_shape.png" alt="" className="bg-shape" />
                        <img src="/assets/img/images/newsletter_shape01.png" alt="" className="shape-one" />
                        <img src="/assets/img/images/newsletter_shape02.png" alt="" className="shape-two" />
                        <img src="/assets/img/images/newsletter_shape03.png" alt="" className="shape-three" />
                        <img src="/assets/img/images/newsletter_shape04.png" alt="" className="shape-four" />
                        <img src="/assets/img/images/newsletter_shape05.png" alt="" className="shape-five" />
                        <img src="/assets/img/images/newsletter_shape06.png" alt="" className="shape-six" />
                    </div>
                </section>
                {/* newsletter-area-end */}

            </Layout>
        </>
    )
}