import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Web Design"breadcrumbCls=" breadcrumb-area-two pt-175">
                {/* services-details-area */}
                <div className="services-details-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="services-details-img text-center">
                                    <img src="/assets/img/images/services_details_img.png" alt="" />
                                </div>
                                <div className="services-details-content text-center">
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-details-shape">
                        <img src="/assets/img/images/services_details_shape.png" alt="" />
                    </div>
                </div>
                {/* services-details-area-end */}
                {/* counter-area */}
                <section className="counter-area-four pt-100 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="counter-item-wrap-four">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={15} />K+</h2>
                                                <p>Entries in <span>Accunting</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={120} />+</h2>
                                                <p>International <span>Programs</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={46} />+</h2>
                                                <p>Countries in<span>The World</span></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-four">
                                                <h2 className="count"><CounterUp className="odometer" count={17} />+</h2>
                                                <p>Awards <span>Programs</span></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter-area-two */}
                {/* company-area */}
                <section className="company-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="section-title white-title text-center mb-65">
                                    <span className="sub-title">Our Company</span>
                                    <h2 className="title">We Create Creative Designs For Every Web Page</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="company-img">
                                    <img src="/assets/img/images/company_img01.png" alt="" />
                                    <img src="/assets/img/images/company_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="company-content">
                                    <h2 className="title">All Your Questions Are Here</h2>
                                    <div className="company-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Seo quotes to inspire your campaign
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Much easier to double your business
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Free page speed insights tool to find out exactly
                                            </li>
                                            <li>
                                                <img src="/assets/img/icon/check_icon.png" alt="" />
                                                Seo quotes to inspire your campaign
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/about-me" className="btn">Discover More <span /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="company-shape-wrap">
                        <img src="/assets/img/images/company_shape.png" alt="" />
                    </div>
                </section>
                {/* company-area-end */}
                {/* services-area */}
                <section className="inner-services-area-two pt-110 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-title text-center mb-65">
                                    <h2 className="title">We Create Creative Designs For Every Web Page</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-wrap-two">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon01.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title"><Link href="/services-details">User Interaction <span>Design</span></Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon02.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title"><Link href="/services-details">Production <span>Design</span></Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon03.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title"><Link href="/services-details">Branding <span>Design</span></Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                    <div className="services-item-five">
                                        <div className="services-icon-five">
                                            <img src="/assets/img/icon/inner_two_services_icon04.png" alt="" />
                                        </div>
                                        <div className="services-content-five">
                                            <h2 className="title"><Link href="/services-details">Product <span>Design</span></Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* project-area */}
                <section className="inner-project-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-65">
                                    <h2 className="title">Case Studies</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inner-project-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project04.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project05.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project06.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="inner-project-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_project07.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-btn text-center mt-45">
                                <Link href="/about-me" className="btn">Load More <span /></Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* project-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-80">
                                    <span className="sub-title">Get update</span>
                                    <h2 className="title">Get latest updates <br /> and dealsi</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="newsletter-form">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email address" />
                                        <button type="submit" className="btn">Subscribe <span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-shape-wrap">
                        <img src="/assets/img/images/newsletter_bg_shape.png" alt="" className="bg-shape" />
                        <img src="/assets/img/images/newsletter_shape01.png" alt="" className="shape-one" />
                        <img src="/assets/img/images/newsletter_shape02.png" alt="" className="shape-two" />
                        <img src="/assets/img/images/newsletter_shape03.png" alt="" className="shape-three" />
                        <img src="/assets/img/images/newsletter_shape04.png" alt="" className="shape-four" />
                        <img src="/assets/img/images/newsletter_shape05.png" alt="" className="shape-five" />
                        <img src="/assets/img/images/newsletter_shape06.png" alt="" className="shape-six" />
                    </div>
                </section>
                {/* newsletter-area-end */}

            </Layout>
        </>
    )
}