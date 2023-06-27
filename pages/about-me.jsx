import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function AboutMe() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout breadcrumbTitle="About Me" breadcrumbCls="about-me-breadcrumb pt-175 pb-110">
                <section className="developr-area pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                                <div className="developr-img">
                                    <img src="/assets/img/images/developer_img.png" alt="" />
                                    <div className="work-experience-wrap">
                                        <h2 className="count"><span className="odometer" data-count={18} />+</h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                    <div className="project-completed-wrap">
                                        <h2 className="count"><span className="odometer" data-count={5} />K+</h2>
                                        <p>Have Faithfully Completed Projects Till Date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="developr-content">
                                    <div className="section-title title-style-two mb-50">
                                        <span className="sub-title">I’m a Developer</span>
                                        <h2 className="title">I Develop Ideas <br /> That Help People</h2>
                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>My Details</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>My Awards</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>My Skils</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon01.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon02.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon03.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon04.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon05.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon06.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon01.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon02.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon03.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon04.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon05.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon06.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon01.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon02.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon03.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon04.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon05.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src="/assets/img/icon/developer_icon06.png" alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* developr-area-end */}
                {/* tools-area */}
                <section className="tools-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two white-title text-center mb-50">
                                    <span className="sub-title">My Tools</span>
                                    <h2 className="title">What Tools I Use</h2>
                                </div>
                            </div>
                        </div>
                        <div className="tools-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon01.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Photoshop</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon02.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Illustrator</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon03.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Figma</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon04.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Sketch</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon05.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Premiere Pro</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon06.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">After Effects</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon07.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">HTML 5</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="tools-item">
                                        <div className="tools-icon">
                                            <img src="/assets/img/icon/tools_icon08.png" alt="" />
                                        </div>
                                        <div className="tools-content">
                                            <h3 className="title">Blender</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* tools-area-end */}
                {/* faq-area */}
                <section className="faq-area pt-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-img">
                                    <img src="/assets/img/images/faq_img.png" alt="" />
                                    <img src="/assets/img/images/faq_img02.png" alt="" />
                                </div>
                                <div className="faq-content">
                                    <div className="section-title title-style-two mb-20">
                                        <h2 className="title">All Your Questions <br /> Are Here</h2>
                                    </div>
                                    <h3 className="title-two"> Knock Me Directly to Know More</h3>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="accordion faq-wrap" id="accordionExample">
                                    <div className="accordion-item" onClick={() => handleToggle(1)}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"}>
                                                What's the difference between Pro and Free?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item" onClick={() => handleToggle(2)}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"}>
                                                What's the difference between Pro and Free?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" onClick={() => handleToggle(3)}>
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"}>
                                                What's the difference between Pro and Free?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" onClick={() => handleToggle(4)}>
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                                What's the difference between Pro and Free?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                            <div className="accordion-body">
                                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-shape-wrap">
                        <img src="/assets/img/images/faq_shape.png" alt="" />
                    </div>
                </section>
                {/* faq-area-end */}
                {/* client-area */}
                <section className="client-area pt-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title title-style-two text-center mb-55">
                                    <span className="sub-title">My Clients</span>
                                    <h2 className="title">I Work With Over 175+ Happy Client</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row brand-active">
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2 col-sm-4">
                                <div className="brand-item">
                                    <img src="/assets/img/brand/h3_brand_img06.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* client-area-end */}
                {/* project-area */}
                <section className="inner-projcet-area-two pt-140 pb-125">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <div className="section-title title-style-two mb-70">
                                    <span className="sub-title">My Latest Project</span>
                                    <h2 className="title">Our Best Professional <br /> UI/UX Design</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="inner-project-nav" />
                            </div>
                        </div>
                    </div>
                    <div className="container-fulid p-0">
                        <div className="inner-projcet-wrap-two">
                            <Swiper {...swiperOptions} className="inner-project-active">
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project04.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project05.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project06.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project08.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project07.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project09.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project10.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project08.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project07.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project04.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="inner-project-item horizoital-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project05.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                    <div className="inner-project-item vertical-item">
                                        <div className="inner-project-thumb">
                                            <Link href="/project-details"><img src="/assets/img/project/inner_two_project06.jpg" alt="" /></Link>
                                        </div>
                                        <div className="inner-project-content">
                                            <h3 className="title"><Link href="/project-details">Motion Design</Link></h3>
                                            <p>Lorem Ipsum is simply</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>
                {/* project-area-end */}
                {/* testimonial-area */}
                <section className="testimonial-area-five pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-9">
                                <div className="testimonial-img">
                                    <img src="/assets/img/images/testimonial_img.jpg" alt="" />
                                    <VideoPopup cls="play-btn" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-content">
                                    <div className="section-title title-style-two mb-50">
                                        <span className="sub-title">Testimonal</span>
                                        <h2 className="title">Would be Happy to Here What <span>Clients</span> <span>Say’s</span> About Me</h2>
                                    </div>
                                    <div className="testimonial-item-five">
                                        <div className="testimonial-info">
                                            <div className="thumb">
                                                <img src="/assets/img/images/testimonial_avatar01.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">James Botosh</h2>
                                                <p>Product Designer</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-content-five">
                                            <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-area-end */}
                {/* blog-area */}
                <section className="blog-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">My Blog</span>
                                    <h2 className="title">News  Updates</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item">
                                    <div className="blog-post-thumb">
                                        <Link href="/blog-details"><img src="/assets/img/blog/blog_img01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog-post-content">
                                        <Link href="/blog" className="tag">Branding</Link>
                                        <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li className="avatar-img">
                                                    <Link href="/blog"><img src="/assets/img/blog/blog_avatar01.png" alt="" /></Link>
                                                </li>
                                                <li>By <Link href="/blog">Ataur</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item">
                                    <div className="blog-post-thumb">
                                        <Link href="/blog-details"><img src="/assets/img/blog/blog_img02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog-post-content">
                                        <Link href="/blog" className="tag">Branding</Link>
                                        <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li className="avatar-img">
                                                    <Link href="/blog"><img src="/assets/img/blog/blog_avatar02.png" alt="" /></Link>
                                                </li>
                                                <li>By <Link href="/blog">Ataur</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-post-item">
                                    <div className="blog-post-thumb">
                                        <Link href="/blog-details"><img src="/assets/img/blog/blog_img03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog-post-content">
                                        <Link href="/blog" className="tag">Branding</Link>
                                        <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart:
                                            Adding</Link></h2>
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li className="avatar-img">
                                                    <Link href="/blog"><img src="/assets/img/blog/blog_avatar03.png" alt="" /></Link>
                                                </li>
                                                <li>By <Link href="/blog">Ataur</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area-end */}


            </Layout>
        </>
    )
}