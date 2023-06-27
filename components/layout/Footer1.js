import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-social">
                                            <ul className="list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li className="active"><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-google-plus-g" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="footer-contact">
                                            <span>For Support</span>
                                            <h2 className="title"><Link href="/tel:0123456789">0123 - 567 - 7650</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Primary Pages</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about-us">About</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/services-details">Service</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Pages</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about-us">About</Link></li>
                                                <li><Link href="/contact">Pricing</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                <li><Link href="/contact">Request for Demo</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">About Store</h4>
                                        <div className="footer-about">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icon/phone_icon.svg" alt="" /><Link href="/tel:0123456789">8 (495) 989—20—11</Link></li>
                                                <li><img src="/assets/img/icon/mail_icon.svg" alt="" /><Link href="/mailto:company@gmail.com">company@gmail.com</Link></li>
                                                <li><img src="/assets/img/icon/loction_icon.svg" alt="" /><span>Ranelagh Place, Liverpool, L3 5UL, England</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="cart-img">
                                        <img src="/assets/img/images/cart_img.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="copyright-text text-end">
                                        <p>© {new Date().getFullYear()} Xolio - NextJS template by AliThemes</p>
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
