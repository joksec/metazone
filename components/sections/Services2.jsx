import Link from "next/link"
import { useState } from "react"

export default function Services2() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="services-area-two">
                <div className="container">

                <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two white-title text-center mb-50">
                                    <span className="sub-title">Services</span>
                                    <h2 className="title">Notre expertise</h2>
                                </div>
                            </div>
                        </div>
                        <div className="tools-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon01.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Développement Web & Mobile</h3>
                                            <p>Création de sites web et d'applications mobiles sur mesure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon02.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Social Média</h3>
                                            <p>Gestion et optimisation des réseaux sociaux pour accroître la visibilité et l'engagement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon03.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Marketing digital</h3>
                                            <p>Stratégies de marketing en ligne pour atteindre une audience ciblée et générer des conversions.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon05.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Sécurité informatique</h3>
                                            <p> Protection des systèmes informatiques contre les menaces et les attaques externes et internes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon06.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Identité visuelle</h3>
                                            <p>Conception d'une image de marque cohérente et distinctive pour une entreprise.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon07.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Consulting Digital</h3>
                                            <p>Conseil et accompagnement pour la mise en place de stratégies digitales efficaces.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </section>

        </>
    )
}
