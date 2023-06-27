import Link from "next/link"
import { useState } from "react"

export default function Pricing1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="pricing-area pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title title-style-two text-center white-title mb-50">
                                <h2 className="title">The Right Plan for Your Business</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-item-wrap">
                        <div className="pricing-tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item" onClick={() => handleOnClick(1)}>
                                    <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Monthly</button>
                                </li>
                                <li className="nav-item" onClick={() => handleOnClick(2)}>
                                    <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Yearly</button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className={activeIndex === 1 ? "tab-pane show active" : "tab-pane"}>
                                <div className="row g-0 align-items-center justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon01.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Professional</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span>49<strong>/mo</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item active">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon02.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Business</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span>69<strong>/mo</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon03.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Enterprise</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span>89<strong>/mo</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane show active" : "tab-pane"}>
                                <div className="row g-0 align-items-center justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon01.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Professional</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span> 249<strong>/yr</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item active">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon02.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Business</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span>329<strong>/yr</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="pricing-item">
                                            <div className="pricing-icon">
                                                <img src="/assets/img/icon/pricing_icon03.png" alt="" />
                                            </div>
                                            <div className="pricing-top">
                                                <h2 className="title">Enterprise</h2>
                                                <p>Do more with Dokan Using Powerful Advanced feat..</p>
                                            </div>
                                            <div className="pricing-price">
                                                <h2 className="price"><span>$</span>389<strong>/yr</strong></h2>
                                            </div>
                                            <div className="pricing-list">
                                                <h4 className="title">Everything in Starter</h4>
                                                <ul className="list-wrap">
                                                    <li><i className="far fa-check" />WC Product Addon Integration</li>
                                                    <li><i className="far fa-check" />Vendor Review</li>
                                                    <li><i className="far fa-check" />Store Support</li>
                                                    <li><i className="far fa-check" />Seller Verification</li>
                                                    <li><i className="far fa-check" />Stripe  Msip</li>
                                                </ul>
                                            </div>
                                            <div className="pricing-btn">
                                                <Link href="/contact" className="btn">Select This Plan</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
