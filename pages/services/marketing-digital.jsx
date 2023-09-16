import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Marketing Digital"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>Notre équipe expérimentée en marketing digital conçoit des stratégies sur mesure pour répondre aux besoins spécifiques de votre entreprise.</p>
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
                
                <section className="work-area pt-110 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-img text-center">
                                <img src="/assets/img/images/work_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="work-content"> 
                                <div className="section-title title-style-two white-title mb-30">
                                    <span className="sub-title">MetaZ</span>
                                    <h2 className="title">Marketing Digital</h2>
                                </div>
                                <div className="work-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">E-mailing</h4>
                                                <p>Engagez votre Audience avec des Campagnes Ciblées.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon02.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Media Buying & Data</h4>
                                                <p>Maximisez l'Impact de Vos Campagnes Publicitaires.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon03.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Expérience Utilisateur</h4>
                                                <p>Créez des Interactions Mémorables.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-shape-wrap">
                    <img src="/assets/img/images/work_shape01.png" alt="" />
                    <img src="/assets/img/images/work_shape02.png" alt="" />
                    <img src="/assets/img/images/work_shape03.png" alt="" />
                    <img src="/assets/img/images/work_shape04.png" alt="" />
                    <img src="/assets/img/images/work_shape05.png" alt="" />
                </div>
            </section>
                {/* company-area-end */}
                {/* services-area */}
                <section className="team-area pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-img-wrap">
                                <img src="/assets/img/team/team_img_shape.png" alt="" className="img-shape" />
                                <img src="/assets/img/team/team_img01.png" alt="" className="img-one" />
                                <img src="/assets/img/team/team_img02.png" alt="" className="img-two" />
                                <img src="/assets/img/team/team_img03.png" alt="" className="img-three" />
                                <img src="/assets/img/team/team_img04.png" alt="" className="img-four" />
                                <img src="/assets/img/team/team_img05.png" alt="" className="img-five" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-content">
                                <div className="section-title mb-25">
                                    <span className="sub-title">MetaZ</span>
                                    <h2 className="title">Stratégies de Marketing Digital Sur Mesure</h2>
                                </div>
                                <p>Notre équipe expérimentée en marketing digital conçoit des stratégies sur mesure pour répondre aux besoins spécifiques de votre entreprise.</p>
                                <p>Nous analysons votre marché cible, étudions vos concurrents et identifions les opportunités clés pour développer une stratégie marketing qui maximise votre visibilité en ligne et génère des résultats tangibles.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-shape-wrap">
                    <img src="/assets/img/images/team_shape01.png" alt="" className="ribbonRotate" />
                    <img src="/assets/img/images/team_shape02.png" alt="" className="float-bob-x" />
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