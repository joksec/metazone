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
                                            <span>Pour obtenir de l'aide</span>
                                            <h2 className="title"><Link href="/tel:0123456789">07 56 88 39 67</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Agence</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about-us">Qui sommes-nous ?</Link></li>
                                                <li><Link href="#">Recrute</Link></li>
                                                <li><Link href="#">Actualités</Link></li>
                                                <li><Link href="#">Blog</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Services</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/dev-web">Web Site</Link></li>
                                                <li><Link href="/services/maketing-digital">Marketing Digital</Link></li>
                                                <li><Link href="/services/seo-sea">Référencement</Link></li>
                                                <li><Link href="/services/identite-visuel">Identité visuel</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Contact</h4>
                                        <div className="footer-about">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icon/phone_icon.svg" alt="" /><Link href="/tel:0033756883967">+33 7 56 88 39 67</Link></li>
                                                <li><img src="/assets/img/icon/mail_icon.svg" alt="" /><Link href="/mailto:contact@metaz.fr">contact@metaz.fr</Link></li>
                                                <li><img src="/assets/img/icon/loction_icon.svg" alt="" /><span>59 rue de Ponthieu 75008 Paris - France</span></li>
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
                                        <p>© {new Date().getFullYear()} MetaZ - France Agency</p>
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
