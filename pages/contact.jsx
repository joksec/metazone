import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout breadcrumbTitle="Contact Us" footerStyle={2} bShape breadcrumbCls="breadcrumb-area-four pt-175 pb-160">
                <section className="inner-contact-area">
                    <div className="container">
                        <div className="inner-contact-wrap">
                            <div className="row">
                                <div className="col-xl-9 col-lg-10">
                                    <div className="section-title title-style-two mb-50">
                                        <h2 className="title">Have a <span>Cool Project?</span> Get in touch!</h2>
                                    </div>
                                    <div className="inner-contact-form-wrap">
                                        <form action="#">
                                            <div className="form-grp">
                                                <label htmlFor="name"><i className="fas fa-user" /></label>
                                                <input type="text" id="name" placeholder="Name" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="phone"><i className="fas fa-phone" /></label>
                                                <input type="text" id="phone" placeholder="Phone" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                <input type="email" id="email" placeholder="Email Address" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="subject"><i className="fas fa-book-alt" /></label>
                                                <input type="text" id="subject" placeholder="Subject" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="comment"><i className="fas fa-user-edit" /></label>
                                                <textarea name="comment" id="comment" placeholder="How can we help you? Feel free to get in touch!" />
                                            </div>
                                            <button type="submit" className="btn">Send Message <span /></button>
                                        </form>
                                    </div>
                                    <div id="contact-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                    <div className="inner-contact-info">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/loction_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Address</h6>
                                                        <p>UN82 Dhanmondi Dhaka - 1207</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/mail_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Email</h6>
                                                        <Link href="mailto:your@email.com">your@email.com</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/phone_icon03.png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Phone</h6>
                                                        <Link href="tel:0123456789">+12548789300</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}