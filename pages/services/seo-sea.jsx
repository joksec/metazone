import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ProjectDetails() {

    return (
        <>
            <Layout breadcrumbTitle="SEO/SEA"breadcrumbCls="breadcrumb-area-two pt-175">
                    {/* project-details-area */}
                    <section className="project-details-area pt-40 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-inner">
                                        <div className="project-details-img">
                                            <img src="/assets/img/images/figure-X.png" alt="" />
                                        </div>
                                        <div className="project-details-content">
                                            <p>Notre service de SEO/SEA est conçu pour vous aider à atteindre les sommets des résultats de recherche et à augmenter votre visibilité en ligne. Que vous soyez une petite entreprise ou une grande entreprise, notre équipe d'experts en référencement travaillera en étroite collaboration avec vous pour développer une stratégie personnalisée qui répond à vos objectifs commerciaux.</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-12">
                                                <div className="counter-item-wrap-four">
                                                    <ul className="list-wrap">
                                                        <li>
                                                            <div className="counter-item-four">
                                                                <h2 className="count"><CounterUp className="odometer" count={120} />+</h2>
                                                                <p>de Mots <span>Clés</span></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="counter-item-four">
                                                                <h2 className="count"><CounterUp className="odometer" count={15} />K+</h2>
                                                                <p>Backlinks <span>géneré</span></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="counter-item-four">
                                                                <h2 className="count"><CounterUp className="odometer" count={46} />+</h2>
                                                                <p>Site<span>Boosté</span></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="counter-item-four">
                                                                <h2 className="count"><CounterUp className="odometer" count={17} />+</h2>
                                                                <p>Stratégies <span>utilisé</span></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-shape-wrap">
                            <img src="/assets/img/images/services_details_shape.png" alt="" />
                        </div>
                    </section>
                    {/* project-details-area-end */}
                    {/* company-area */}
                    <section className="company-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="section-title white-title text-center mb-65">
                                        <span className="sub-title">SEO / SEA</span>
                                        <h2 className="title">Dominez les moteurs de recherche</h2>
                                        <p>Maximisez votre Présence en Ligne grâce à notre Expertise en Référencement</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="company-img">
                                        <img src="/assets/img/images/rocket-seo.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="company-content">
                                        <h2 className="title">Ce que nous offrons</h2>
                                        <div className="company-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Audit de Site Web Approfondi
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Recherche de Mots Clés
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Optimisation On-Page
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Création de Contenu Engageant
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Stratégie de Backlinks
                                                </li>
                                                <li>
                                                    <img src="/assets/img/icon/check_icon.png" alt="" />
                                                    Campagnes de Publicité Payante (SEA)
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
                                <p>Notre équipe possède une vaste expérience dans le domaine du référencement et a aidé de nombreuses entreprises à améliorer leur visibilité en ligne. Nous sommes constamment à jour avec les dernières tendances et les meilleures pratiques du SEO/SEA pour vous offrir des résultats durables.</p>
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
                                <h4 className="title">Accélérez votre visibilité</h4>
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