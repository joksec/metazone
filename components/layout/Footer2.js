import Link from "next/link"

export default function Footer2({ nf3 }) {
    return (
        <>
            <footer>
                <div className={`footer-area-two ${nf3 ? "" : "footer-area-three"}`}>
                    <div className="container">
                        <div className="footer-top-two">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="footer-content-two text-center">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <p>Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-two">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>© {new Date().getFullYear()}, Creative Agency.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-social-two">
                                        <ul className="list-wrap">
                                            <li className="title">Follow us</li>
                                            <li><Link href="#"><img src="/assets/img/icon/footer_icon01.png" alt="" /></Link></li>
                                            <li><Link href="#"><img src="/assets/img/icon/footer_icon02.png" alt="" /></Link></li>
                                            <li><Link href="#"><img src="/assets/img/icon/footer_icon03.png" alt="" /></Link></li>
                                            <li><Link href="#"><img src="/assets/img/icon/footer_icon04.png" alt="" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
