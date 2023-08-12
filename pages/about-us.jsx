import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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


export default function AboutUs() {

    return (
        <>
            <Layout>
                <section className=" pt-175 pb-140 counter-area-three">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="counter-item-wrap-three">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon01.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={90} />+</h2>
                                                    <p>Clients <span>satisfaits</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon02.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={105} />+</h2>
                                                    <p>Projet <span>terminé</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon03.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={10} />+</h2>
                                                    <p>Nos <span>employés</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon04.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={21} />+</h2>
                                                    <p>Certificats <span>d'expertise</span></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="counter-content-three">
                                    <div className="section-title title-style-two mb-30">
                                        <h2 className="title">MetaZ <span>.</span> Un Pont entre l'idée et la Réalité Digitale</h2>
                                    </div>
                                    <p>Redéfinissez votre avenir numérique. Nous sommes une agence de développement passionnée, dévouée à créer des expériences numériques innovantes qui transcendent les attentes. Avec une équipe talentueuse d'experts en développement, nous explorons les frontières de la technologie pour façonner un monde numérique extraordinaire.</p>
                                    <img src="/assets/img/images/sine.png" alt="" />
                                    <div className="content-bottom">
                                        <h4 className="title-two">Ilyass Boukraa</h4>
                                        <span>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter-area-two */}
                {/* team-area */}
                <section className="team-area-two pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title title-style-two text-center mb-70">
                                    <h2 className="title">Rencontrez l'équipe</h2>
                                    <p>Notre équipe chez MetaZ est composée de passionnés du développement, créatifs et technologues, travaillant ensemble pour créer des solutions numériques innovantes et personnalisées.</p>
                                </div>
                            </div>
                        </div>
                        <Swiper {...swiperOptions} className="team-active">
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Alena Rosser</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Tiana Dokidis</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Ryan Vetrovs</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team04.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Emerson Saris</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team05.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Lindsey Schleifer</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/* team-area-end */}
                
                {/* services-area */}
                <section className="inner-services-area pt-110 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two text-center mb-60">
                                    <span className="sub-title">Nos Services</span>
                                    <h2 className="title">Des Solutions Numériques sur Mesure</h2>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon01.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Développement Web</Link></h2>
                                            <p>Des sites web modernes, interactifs et entièrement personnalisés, répondant à vos besoins spécifiques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon02.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Développment Mobile</Link></h2>
                                            <p>Crée des apps innovantes et conviviales, sur les plateformes iOS et Android.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon03.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Social Média</Link></h2>
                                            <p>Maximiser votre présence en ligne, à atteindre votre audience cible et à stimuler l'engagement...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon04.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Marketing digital</Link></h2>
                                            <p>Expertise stratégique et créative pour promouvoir votre entreprise, générer du trafic qualifié.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon05.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Sécurité informatique</Link></h2>
                                            <p>Assurer la protection de vos données sensibles, la prévention des attaques et la mise en place de mesures de sécurité.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon06.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Identité visuelle</Link></h2>
                                            <p>Crée des designs uniques et percutants qui captent l'essence de votre marque.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon07.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Consulting Digital</Link></h2>
                                            <p>Des conseils stratégiques personnalisés pour vous aider à naviguer dans le paysage numérique en constante évolution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon08.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">SEO</Link></h2>
                                            <p>Optimiser votre visibilité en ligne, et d'augmenter votre classement dans les moteurs de recherche.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                
                {/* history-area */}
                <section className="history-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title white-title text-center mb-45">
                                    <span className="sub-title">Notre Agence</span>
                                    <h2 className="title">MetaZ France</h2>
                                    <p>Une agence de développement créative et innovante, spécialisée dans la création de solutions numériques sur mesure qui propulsent les marques vers de nouveaux horizons numériques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="history-inner">
                            <div className="history-img">
                                <img src="/assets/img/images/history_img.jpg" alt="" />
                            </div>
                            <div className="row g-0 justify-content-end">
                                <div className="col-lg-6">
                                    <div className="history-content">
                                        <h2 className="title">L'Art de la Transformation Numérique</h2>
                                        <p>Nous sommes passionnés par la création de solutions technologiques qui transforment les idées en réalité. Notre approche axée sur l'innovation, associée à notre expertise technique et notre engagement envers l'excellence, nous permet de fournir des résultats exceptionnels à nos clients, en leur offrant une présence en ligne puissante et une expérience utilisateur immersive.</p>
                                        <ul className="list-wrap">
                                            <li><i className="far fa-check" />Expertise Technique</li>
                                            <li><i className="far fa-check" />Innovation et Créativité</li>
                                            <li><i className="far fa-check" />Engagement envers la Satisfaction Client</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-roadmap-wrap">
                            <div className="roadmap-line-shape">
                                <span className="dot-one pulse-one" />
                                <span className="dot-two pulse-two" />
                            </div>
                            <ul className="list-wrap">
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-three" />
                                    <div className="content">
                                        <h5 className="title">2020</h5>
                                        <p>La création</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-four" />
                                    <div className="content">
                                        <h5 className="title">2021</h5>
                                        <p>1ére award</p>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-five" />
                                    <div className="content">
                                        <h5 className="title">2022</h5>
                                        <p>100% satisfaction</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-six" />
                                    <div className="content">
                                        <h5 className="title">{new Date().getFullYear()}</h5>
                                        <p>+15 Nouvelle technologies</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="history-shape-wrap">
                        <img src="/assets/img/images/history_shape01.png" alt="" />
                        <img src="/assets/img/images/history_shape02.png" alt="" />
                    </div>
                </section>
                {/* history-area-end */}
                {/* testimonial-area */}
                <section className="testimonial-area-three testimonial-area-four">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title title-style-two mb-45">
                                    <h2 className="title">Ce que disent nos clients</h2>
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
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
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
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
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
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
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
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-area-end */}
                {/* brand-area */}
                <div className="brand-area pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="title">Nos clients à ce jour...</span>
                            </div>
                        </div>
                        <div className="row brand-active">
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img06.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand-area-end */}


            </Layout>
        </>
    )
}