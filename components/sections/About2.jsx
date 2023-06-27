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
                                    <span className="sub-title">I'm a Designer</span>
                                    <h2 className="title">I Can Design per <br /> Your Requirement</h2>
                                </div>
                                <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a
                                    professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy
                                    every step of the design process, from discussion and collaboration.</p>
                                <Link href="/contact">
                                    <span className="arrow"><img src="/assets/img/icon/right_arrow.svg" alt="" /></span>
                                    <span className="text">Available jobs</span>
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
