import Link from "next/link"

export default function About2() {
    return (
        <>
            <section className="about-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="about-img-two text-center">
                                <img src="/assets/img/images/h2_about_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-two">
                                <div className="section-title white-title title-style-two mb-30">
                                    <span className="sub-title">MetaZone</span>
                                    <h2 className="title">Agence <br /> digitale 360</h2>
                                </div>
                                <p>MetaZ est une agence conseil en communication digitale et innovation technologique. Nous accompagnons des groupes leaders, start-ups, institutions privées et publiques dans les secteurs de la finance, la santé, le retail, les télécoms ainsi que des acteurs des arts et de la culture.</p>
                                <Link href="/contact">
                                    <span className="arrow"><img src="/assets/img/icon/right_arrow.svg" alt="" /></span>
                                    <span className="text">Plus d'infos</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-shape-wrap">
                    <img src="/assets/img/images/h2_about_shape01.png" alt="" className="shape-one" />
                    <img src="/assets/img/images/h2_about_shape02.png" alt="" className="shape-two" />
                    <img src="/assets/img/images/h2_about_shape03.png" alt="" className="shape-three" />
                </div>
            </section>

        </>
    )
}
