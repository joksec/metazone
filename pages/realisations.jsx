import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import Project2 from "@/components/sections/Project2"
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
                     {/* consultation-area */}
                <section className="consultation-area consultation-area-two pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="consultation-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">MetaZ</span>
                                        <h2 className="title">Redéfinissez votre avenir numérique. </h2>
                                    </div>
                                    <p>Nous croyons que chaque idée a le potentiel de devenir une réalité numérique puissante. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs objectifs uniques et créer des solutions sur mesure qui font briller leur marque.</p>
                                    <div className="consultation-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <h6 className="title">12X</h6>
                                                <p>Traitement plus <span>rapide</span></p>
                                            </li>
                                            <li>
                                                <h6 className="title">99%</h6>
                                                <p>Précision de <span>traitement</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="consultation-form-wrap">
                                    <h4 className="title">Devis gratuit</h4>
                                    <form action="#">
                                        <div className="form-grp">
                                            <input type="text" placeholder="Nom" />
                                        </div>
                                        <div className="form-grp">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="form-grp">
                                            <input type="text" placeholder="Téléphone" />
                                        </div>
                                        <div className="form-grp">
                                            <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                                <option value>Services</option>
                                                <option>Website</option>
                                                <option>SEO</option>
                                                <option>Marketing digital</option>
                                                <option>Securité informatique</option>
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
                {/* consultation-area-end */}
                <Project2 />
                {/* brand-area */}
                <div className="brand-area pb-120 pt-120">
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