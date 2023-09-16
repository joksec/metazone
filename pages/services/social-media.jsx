import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Réseaux sociaux"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>Le marketing sur les réseaux sociaux est un aspect essentiel de toute stratégie digitale réussie. Chez MetaZ, nous savons que les médias sociaux offrent un potentiel énorme pour atteindre et engager votre public cible.</p>
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
                                    <span className="sub-title">Amplifiez votre marque</span>
                                    <h2 className="title">Dominez les réseaux sociaux</h2>
                                </div>
                                <p className="info-one">Nous proposons des services de gestion des réseaux sociaux complets pour vous aider à maximiser votre présence en ligne et à développer votre marque de manière efficace.</p>
                                <p className="info-two">Notre équipe de spécialistes en médias sociaux crée un contenu attrayant, pertinent et engageant pour vos plateformes sociales. Nous planifions, rédigeons et publions des publications qui captent l'attention de votre public et renforcent votre présence en ligne.</p>
                                <p className="info-two">Nous surveillons votre réputation en ligne en suivant les mentions de votre marque et en gérant les commentaires négatifs.</p>
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
                                    <span className="sub-title">Optimisez votre impact</span>
                                    <h2 className="title">Nos Services de Médias Sociaux</h2>
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
                                            <h3 className="title">Gestion de Comptes</h3>
                                            <p>Nous gérons vos comptes de médias sociaux de A à Z, en créant et en optimisant les profils.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon02.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Surveillance de la Réputation</h3>
                                            <p>Nous surveillons votre réputation en ligne en suivant les mentions de votre marque.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon03.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Boost Audience</h3>
                                            <p>Augmenter votre audience sur les réseaux sociaux ( Facebook ,Instagram, TikTok ).</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon04.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Analyse des Données</h3>
                                            <p>Nous utilisons des outils d'analyse avancés pour suivre et mesurer les performances de vos campagnes de médias sociaux.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon05.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Création de Contenu Visuel</h3>
                                            <p>Nous créons des visuels percutants, tels que des images, des infographies et des vidéos, pour renforcer l'impact de votre contenu sur les réseaux sociaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon06.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Influencer Marketing</h3>
                                            <p>Nous établissons des partenariats avec des influenceurs pertinents de votre secteur pour promouvoir votre marque sur les réseaux sociaux.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* project-area */}
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
                                <p>N'oubliez pas d'adapter ces descriptions en fonction des services que vous proposez, de votre positionnement de marque et des besoins de votre public cible.</p>
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