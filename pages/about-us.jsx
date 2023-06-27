import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}


export default function AboutUs() {

    return (
        <>
            <Layout breadcrumbTitle="About Us" breadcrumbCls="pt-175 pb-140">
                <section className="counter-area-three">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="counter-item-wrap-three">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon01.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={210} />+</h2>
                                                    <p>Satisfied <span>Customers</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon02.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={15} />k+</h2>
                                                    <p>Project <span>Finished</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon03.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={110} />+</h2>
                                                    <p>Our <span>Employees</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="counter-item-three">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/inner_counter_icon04.png" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h2 className="count"><CounterUp className="odometer" count={12} />+</h2>
                                                    <p>International <span>Awards</span></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="counter-content-three">
                                    <div className="section-title title-style-two mb-30">
                                        <h2 className="title">Content Has to Be More That Just Brilliant</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
                                        scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                    <img src="/assets/img/images/sine.png" alt="" />
                                    <div className="content-bottom">
                                        <h4 className="title-two">Davis Levin</h4>
                                        <span>Director Company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter-area-two */}
                {/* team-area */}
                <section className="team-area-two pt-110 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title title-style-two text-center mb-70">
                                    <h2 className="title">Meet The Squad</h2>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores</p>
                                </div>
                            </div>
                        </div>
                        <Swiper {...swiperOptions} className="team-active">
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Alena Rosser</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Tiana Dokidis</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Ryan Vetrovs</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team04.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Emerson Saris</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="/team-details"><img src="/assets/img/team/inner_team05.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h2 className="title"><Link href="/team-details">Lindsey Schleifer</Link></h2>
                                        <span>CEO Kawasaki Inc.</span>
                                        <div className="team-social">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/* team-area-end */}
                {/* consultation-area */}
                <section className="consultation-area consultation-area-two pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="consultation-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">95% Accuracy</span>
                                        <h2 className="title">Worldwide Best Digital Marketing Agency</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
                                        scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                    <div className="consultation-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <h6 className="title">12X</h6>
                                                <p>Faster Order <span>Processing</span></p>
                                            </li>
                                            <li>
                                                <h6 className="title">99%</h6>
                                                <p>Processing <span>Accuracy</span></p>
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
                {/* consultation-area-end */}
                {/* services-area */}
                <section className="inner-services-area pt-110 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two text-center mb-60">
                                    <span className="sub-title">Graphic Service</span>
                                    <h2 className="title">Creative  Branding Design</h2>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon01.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Advertising</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon02.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Development</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon03.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Branding</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon04.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Product Design</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon05.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Software</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon06.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Marketing</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon07.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Cinematography</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src="/assets/img/icon/inner_services_icon08.png" alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Strategy Services</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* success-area */}
                <section className="success-area pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="success-img">
                                    <img src="/assets/img/images/success_img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="success-content">
                                    <div className="section-title title-style-two mb-30">
                                        <span className="sub-title">Company Success</span>
                                        <h2 className="title">A Company’s Success is An Ongoing Stream of Happiness</h2>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <div className="success-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="content">
                                                    <img src="/assets/img/icon/success_icon01.png" alt="" />
                                                    <span>App Design 85%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src="/assets/img/icon/success_icon02.png" alt="" />
                                                    <span>Website Design 75%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src="/assets/img/icon/success_icon03.png" alt="" />
                                                    <span>Product Design 95%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src="/assets/img/icon/success_icon04.png" alt="" />
                                                    <span>Development 99%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="success-shape-wrap">
                        <img src="/assets/img/images/success_shape01.png" alt="" />
                        <img src="/assets/img/images/success_shape02.png" alt="" />
                    </div>
                </section>
                {/* success-area-end */}
                {/* history-area */}
                <section className="history-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title white-title text-center mb-45">
                                    <span className="sub-title">Our Company</span>
                                    <h2 className="title">Company History</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="history-inner">
                            <div className="history-img">
                                <img src="/assets/img/images/history_img.jpg" alt="" />
                            </div>
                            <div className="row g-0 justify-content-end">
                                <div className="col-lg-6">
                                    <div className="history-content">
                                        <h2 className="title">The Intention was to Establish The Company</h2>
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet.
                                            Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi,</p>
                                        <ul className="list-wrap">
                                            <li><i className="far fa-check" />Everyone can design at low cost</li>
                                            <li><i className="far fa-check" />Designing in a different way</li>
                                            <li><i className="far fa-check" />Our designs sill be world wide best designs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-roadmap-wrap">
                            <div className="roadmap-line-shape">
                                <span className="dot-one pulse-one" />
                                <span className="dot-two pulse-two" />
                            </div>
                            <ul className="list-wrap">
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-three" />
                                    <div className="content">
                                        <h5 className="title">2020</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-four" />
                                    <div className="content">
                                        <h5 className="title">2021</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-five" />
                                    <div className="content">
                                        <h5 className="title">2022</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-six" />
                                    <div className="content">
                                        <h5 className="title">{new Date().getFullYear()}</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="history-shape-wrap">
                        <img src="/assets/img/images/history_shape01.png" alt="" />
                        <img src="/assets/img/images/history_shape02.png" alt="" />
                    </div>
                </section>
                {/* history-area-end */}
                {/* testimonial-area */}
                <section className="testimonial-area-three testimonial-area-four">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title title-style-two mb-45">
                                    <h2 className="title">What Our Client’s Say</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-nav">
                                    <button className="swiper-button-prev" />
                                    <button className="swiper-button-next" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="swiper-container testimonial-active-three">
                                    <Swiper {...swiperOptions}>
                                        <SwiperSlide>
                                            <div className="testimonial-item-three">
                                                <div className="testimonial-thumb-three">
                                                    <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-three">
                                                    <h4 className="title">James Botosh</h4>
                                                    <span>Product Designer</span>
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item-three">
                                                <div className="testimonial-thumb-three">
                                                    <img src="/assets/img/images/testimonial_avatar02.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-three">
                                                    <h4 className="title">James Botosh</h4>
                                                    <span>Product Designer</span>
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item-three">
                                                <div className="testimonial-thumb-three">
                                                    <img src="/assets/img/images/testimonial_avatar03.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-three">
                                                    <h4 className="title">James Botosh</h4>
                                                    <span>Product Designer</span>
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial-item-three">
                                                <div className="testimonial-thumb-three">
                                                    <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                                </div>
                                                <div className="testimonial-content-three">
                                                    <h4 className="title">James Botosh</h4>
                                                    <span>Product Designer</span>
                                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-area-end */}
                {/* brand-area */}
                <div className="brand-area pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="title">We are Already Build Solution for...</span>
                            </div>
                        </div>
                        <div className="row brand-active">
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4 my-3">
                                <div className="brand-item-two">
                                    <img src="/assets/img/brand/h3_brand_img06.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand-area-end */}


            </Layout>
        </>
    )
}