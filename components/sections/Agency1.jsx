import Link from "next/link"

export default function Agency1() {
    return (
        <>
            <section className="agency-area pt-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="agency-img text-center">
                                <img src="/assets/img/images/53.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="agency-content">
                                <div className="section-title title-style-two mb-20">
                                    <span className="sub-title">Notre agence</span>
                                    <h2 className="title">MetaZ <span>.</span> Révélez le pouvoir du digital</h2>
                                </div>
                                <p className="info-one">Explorez un monde d'opportunités numériques avec notre agence innovante.</p>
                                <p className="info-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <p className="info-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <Link href="/about-us" className="btn2">Lire plus <span /></Link>
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

        </>
    )
}
