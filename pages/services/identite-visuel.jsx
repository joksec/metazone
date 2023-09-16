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
            <Layout breadcrumbTitle="Identité visuel"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>L'identité visuelle est l'élément clé de votre marque. Elle représente votre entreprise, ses valeurs, sa personnalité et crée une connexion durable avec votre public cible.</p>
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
                                    <h4 className="title"><Link href="/services-details">Logotype</Link></h4>
                                    <p>Créez un logo unique et mémorable qui représente parfaitement votre marque</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon02.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Cartes de visite</Link></h4>
                                    <p>Obtenez des cartes de visite professionnelles et élégantes qui laissent une impression durable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon03.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Charte graphique</Link></h4>
                                    <p>Développez une charte graphique complète pour maintenir la cohérence visuelle de votre marque.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon04.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Animation de logo</Link></h4>
                                    <p>Donnez vie à votre logo avec des animations captivantes qui ajoutent une touche dynamique à votre marque.</p>
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
                                    <span className="sub-title">L'art du design</span>
                                    <h2 className="title">Construisez une empreinte visuelle unique</h2>
                                </div>
                                <p>L'identité visuelle est l'élément clé de votre marque. Elle représente votre entreprise, ses valeurs, sa personnalité et crée une connexion durable avec votre public cible.</p>
                                <p>Notre équipe est composée de designers expérimentés et passionnés qui maîtrisent les dernières tendances du design.</p>
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
                <section className="consultation-area pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="consultation-content">
                                <div className="section-title mb-25">
                                    <img src="/assets/img/icon/consultation_icon01.png" alt="" />
                                    <span className="sub-title">Engagement envers la Qualité</span>
                                    <h2 className="title">Pourquoi Choisir MetaZ ?</h2>
                                </div>
                                <p>Notre équipe est composée de designers expérimentés et passionnés qui maîtrisent les dernières tendances du design. Nous allions expertise technique et créativité pour donner vie à votre identité visuelle.</p>
                                <div className="consultation-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/consultation_icon02.png" alt="" />
                                                <span>12x</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Expertise et Créativité</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/consultation_icon03.png" alt="" />
                                                <span>95%</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Cohérence et Durabilité</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="consultation-form-wrap">
                                <h4 className="title">Prêt à Faire Briller Votre Marque ?</h4>
                                <form action="#">
                                    <div className="form-grp">
                                        <input type="text" placeholder="Nom" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Télephone" />
                                    </div>
                                    <div className="form-grp">
                                        <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                            <option value>Subject</option>
                                            <option>Subject One</option>
                                            <option>Subject Two</option>
                                            <option>Subject Three</option>
                                            <option>Subject Four</option>
                                        </select>
                                    </div>
                                    <button className="btn" type="submit">Consultation</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultation-shape-wrap">
                    <img src="/assets/img/images/consultation_shape01.png" alt="" className="shape-one ribbonRotate" />
                    <img src="/assets/img/images/consultation_shape02.png" alt="" className="shape-two float-bob-x" />
                </div>
            </section>
                {/* newsletter-area-end */}

            </Layout>
        </>
    )
}