import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Développement Mobile"breadcrumbCls=" breadcrumb-area-two pt-175">
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
                <section className="company-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="section-title white-title text-center mb-65">
                                    <span className="sub-title">MetaZ</span>
                                    <h2 className="title">Créez des applications mobiles innovantes</h2>
                                    <p>Transformez vos idées en applications mobiles performantes et engageantes pour stimuler votre croissance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="company-img">
                                    <img src="/assets/img/images/company_img01.png" alt="" />
                                    <img src="/assets/img/images/company_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="company-content">
                                    <h2 className="title">Expérience mobile optimale</h2>
                                    <div className="company-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Développement d'Applications Mobiles sur Mesure
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Optimisation de l'Expérience Utilisateur sur Mobile
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Support et Maintenance Continus

                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Applications mobiles compatibles avec différents systèmes d'exploitation
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company-shape-wrap">
                        <img src="/assets/img/images/company_shape.png" alt="" />
                    </div>
                </section>
                {/* company-area-end */}
                {/* services-area */}
                <section className="inner-services-area-two pt-110 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title text-center mb-65">
                                    <h2 className="title">Transformer vos Idées en Applications Mobiles Innovantes</h2>
                                    <p>Nous mettons en œuvre les dernières technologies et les meilleures pratiques pour concevoir des applications mobiles performantes</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-wrap-two">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon01.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Conception Intuitive</h2>
                                            <p>Créez une expérience utilisateur immersive grâce à une conception intuitive et ergonomique.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon02.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Fonctionnalités Avancées</h2>
                                            <p>Des fonctionnalités avancées telles que la géolocalisation, les paiements mobiles pour une expérience enrichie.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon03.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title">Design Esthétique </h2>
                                            <p>Donnez vie à votre vision avec un design esthétique et des interfaces élégantes qui captivent vos utilisateurs.</p>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
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