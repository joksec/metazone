import Link from "next/link"

export default function Contact1() {
    return (
        <>
            <section className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title title-style-two white-title text-center mb-75">
                                <span className="sub-title">Contact</span>
                                <h2 className="title">I Want to Hear from You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 order-0 order-lg-2">
                            <div className="contact-info-wrap">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/icon/loction_icon02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Address</h4>
                                            <span>UN82 Dhanmondi Dhaka - 1207</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/icon/mail_icon02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Email</h4>
                                            <Link href="mailto:your@email.com">your@email.com</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="/assets/img/icon/phone_icon02.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Phone</h4>
                                            <Link href="tel:0123456789">+12548789300</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form-wrap">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Your Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <textarea name="message" placeholder="Write your message here" />
                                    </div>
                                    <button type="submit" className="btn">Submit Now <span /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
