import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-img wow fadeInLeft" data-wow-delay=".4s">
                                <img src="/assets/img/banner/banner_img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <span className="sub-title wow fadeInUp" data-wow-delay=".2s">Amazing <strong>Starts</strong> Here</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">Grow Your Business Using Our Services</h2>
                                <Link href="/contact" className="btn wow fadeInUp" data-wow-delay=".6s">Contact Us <span /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                    <img src="/assets/img/banner/banner_shape01.png" alt="" />
                    <img src="/assets/img/banner/banner_shape02.png" alt="" className="animationFramesOne" />
                    <img src="/assets/img/banner/banner_shape03.png" alt="" className="contactSwimmer" />
                    <img src="/assets/img/banner/banner_shape04.png" alt="" className="rotateme" />
                    <img src="/assets/img/banner/banner_shape05.png" alt="" className="animation1" />
                    <img src="/assets/img/banner/banner_shape06.png" alt="" className="ribbonRotate" />
                    <img src="/assets/img/banner/banner_shape07.png" alt="" className="float-bob-x" />
                </div>
            </section>
        </>
    )
}
