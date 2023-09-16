import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Développement Web"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>Créez une présence en ligne puissante et fonctionnelle grâce à notre service de développement web sur mesure,qui répondent aux besoins spécifiques de votre entreprise.</p>
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
                <section className="agency-area pt-80 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="agency-img text-center">
                                <img src="/assets/img/images/agency_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agency-content">
                                <div className="section-title title-style-two mb-20">
                                    <span className="sub-title">Développement de Sites Web</span>
                                    <h2 className="title">Donnez Vie à votre Présence en Ligne</h2>
                                </div>
                                <p className="info-one">Notre équipe de développeurs web expérimentés crée des sites web sur mesure qui répondent aux besoins spécifiques de votre entreprise.</p>
                                <p className="info-two">Nous combinons une conception attrayante avec une fonctionnalité avancée pour offrir une expérience utilisateur exceptionnelle.</p>
                                <p className="info-two">Que vous ayez besoin d'un site vitrine, d'un site e-commerce ou d'une plateforme web complexe, nous sommes là pour donner vie à votre vision.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agency-shape-wrap">
                    <img src="/assets/img/images/agency_shape01.png" alt="" />
                    <img src="/assets/img/images/agency_shape02.png" alt="" />
                    <img src="/assets/img/images/agency_shape03.png" alt="" />
                    <img src="/assets/img/images/agency_shape04.png" alt="" />
                </div>
            </section>
                {/* company-area-end */}
                {/* services-area */}
                <section className="tools-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two white-title text-center mb-50">
                                    <span className="sub-title">Nos types de sites web</span>
                                    <h2 className="title">Conception sites Web</h2>
                                </div>
                            </div>
                        </div>
                        <div className="tools-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon01.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Site vitrine</h3>
                                            <p>Présentez votre entreprise, vos produits ou vos services de manière attrayante et informative</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon02.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Site e-commerce</h3>
                                            <p>Boutique en ligne conviviale et sécurisée pour commercialiser vos produits ou services.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon03.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Site statique</h3>
                                            <p>Un site web simple et léger, idéal pour les informations de base ou les sites à contenu stable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon04.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Site sur mesure</h3>
                                            <p>Site web entièrement personnalisé, développé pour répondre aux vos besoins spécifiques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon05.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">CRM</h3>
                                            <p>Système de gestion de la relation client qui aide à organiser, automatiser et suivre les interactions avec vos clients.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon06.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">ERP</h3>
                                            <p>Plateforme intégrée qui permet de gérer les ressources, les processus et les données de votre entreprise.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* project-area */}
                <section className="success-area pb-120 mt-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="success-img">
                                    <img src="/assets/img/images/success_img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="success-content">
                                    <div className="section-title title-style-two mb-30">
                                        <span className="sub-title">Accompagnement Continu</span>
                                        <h2 className="title">Maintenance et Support Technique</h2>
                                    </div>
                                    <p>Notre équipe dévouée est là pour veiller à ce que votre site web fonctionne de manière optimale, en vous offrant une tranquillité d'esprit totale.</p>
                                    <ul className="list-wrap">
                                            <li><i className="far fa-check" /> Services de maintenance préventive</li>
                                            <li><i className="far fa-check" /> Support technique personnalisé</li>
                                            <li><i className="far fa-check" /> Contrats de maintenance adaptés à vos besoins</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="success-shape-wrap">
                        <img src="/assets/img/images/success_shape01.png" alt="" />
                        <img src="/assets/img/images/success_shape02.png" alt="" />
                    </div>
                </section>
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