import Link from "next/link"

export default function Banner2() {
    return (
        <>
            <section className="banner-area-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5">
                            <div className="banner-img-two">
                                <img src="/assets/img/banner/h2_banner_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="banner-content-two">
                                <span className="sub-title">Hi, I am John William</span>
                                <h2 className="title">Professional Product <span>Designer</span> Based in USA</h2>
                                <div className="banner-content-bottom">
                                    <Link href="/contact" className="btn">Contact Us <span /></Link>
                                    <ul className="list-wrap">
                                        <li><Link href="#"><img src="/assets/img/icon/banner_icon01.svg" alt="" /></Link></li>
                                        <li><Link href="#"><img src="/assets/img/icon/banner_icon02.svg" alt="" /></Link></li>
                                        <li><Link href="#"><img src="/assets/img/icon/banner_icon03.svg" alt="" /></Link></li>
                                        <li><Link href="#"><img src="/assets/img/icon/banner_icon04.svg" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap-two">
                    <img src="/assets/img/banner/h2_banner_shape01.png" alt="" className="rotateme" />
                    <img src="/assets/img/banner/h2_banner_shape02.png" alt="" className="ribbonRotate" />
                    <img src="/assets/img/banner/h2_banner_shape03.png" alt="" className="ribbonRotate" />
                    <img src="/assets/img/banner/h2_banner_shape04.png" alt="" />
                </div>
            </section>

        </>
    )
}
