
export default function Consultation1() {
    return (
        <>
            <section className="consultation-area pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="consultation-content">
                                <div className="section-title mb-25">
                                    <img src="/assets/img/icon/consultation_icon01.png" alt="" />
                                    <span className="sub-title">95% Accuracy</span>
                                    <h2 className="title">Worldwide Best Digital Marketing Agency</h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                                <div className="consultation-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/consultation_icon02.png" alt="" />
                                                <span>12x</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Faster Order Processing</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/consultation_icon03.png" alt="" />
                                                <span>95%</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Processing Accuracy</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="consultation-form-wrap">
                                <h4 className="title">Free Consultation</h4>
                                <form action="#">
                                    <div className="form-grp">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-grp">
                                        <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                            <option value>Subject</option>
                                            <option>Subject One</option>
                                            <option>Subject Two</option>
                                            <option>Subject Three</option>
                                            <option>Subject Four</option>
                                        </select>
                                    </div>
                                    <button className="btn" type="submit">Consultation</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultation-shape-wrap">
                    <img src="/assets/img/images/consultation_shape01.png" alt="" className="shape-one ribbonRotate" />
                    <img src="/assets/img/images/consultation_shape02.png" alt="" className="shape-two float-bob-x" />
                </div>
            </section>

        </>
    )
}
