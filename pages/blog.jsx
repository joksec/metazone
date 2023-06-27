import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

    return (
        <>
            <Layout footerStyle={2} breadcrumbTitle="Blog" breadcrumbCls=" breadcrumb-area-three parallax pt-175 pb-120" blogSearch>
                <section className="inner-blog-area pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-70">
                                <BlogPost showItem={3} style={1} showPagination />
                            </div>
                            <div className="col-30">
                                <aside className="blog-sidebar">
                                    <div className="widget">
                                        <div className="rc-post-wrap">
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-dtails"><img src="/assets/img/blog/rc_post_img01.jpg" alt="" /></Link>
                                                </div>
                                                <div className="content">
                                                    <div className="blog-meta-two">
                                                        <ul className="list-wrap">
                                                            <li className="tag"><Link href="/blog">Sector</Link></li>
                                                            <li><i className="fal fa-clock" />5 Min</li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><Link href="/blog-details">Skello launches electronic signature</Link></h4>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-dtails"><img src="/assets/img/blog/rc_post_img02.jpg" alt="" /></Link>
                                                </div>
                                                <div className="content">
                                                    <div className="blog-meta-two">
                                                        <ul className="list-wrap">
                                                            <li className="tag"><Link href="/blog">Our Team</Link></li>
                                                            <li><i className="fal fa-clock" />5 Min</li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><Link href="/blog-details">Skello launches electronic signature</Link></h4>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="thumb">
                                                    <Link href="/blog-dtails"><img src="/assets/img/blog/rc_post_img03.jpg" alt="" /></Link>
                                                </div>
                                                <div className="content">
                                                    <div className="blog-meta-two">
                                                        <ul className="list-wrap">
                                                            <li className="tag"><Link href="/blog">Solution</Link></li>
                                                            <li><i className="fal fa-clock" />5 Min</li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="title"><Link href="/blog-details">Skello launches electronic signature</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h2 className="widget-title">Categories</h2>
                                        <div className="blog-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="#">Travel <span>(3)</span></Link></li>
                                                <li><Link href="#">Sport<span>(7)</span></Link></li>
                                                <li><Link href="#">Education<span>(12)</span></Link></li>
                                                <li><Link href="#">Business<span>(5)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h2 className="widget-title">Popular posts</h2>
                                        <div className="popular-post-list">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="popular-post-item big-post mb-40">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pu_post_img01.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title"><Link href="/blog-details">Five Quick Jaw Droppping Tips <br /> to Sell Your Vehicle Online</Link></h5>
                                                            <span>March 17, {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="popular-post-item mb-40">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pu_post_img02.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title"><Link href="/blog-details">Purchase advertising...</Link></h5>
                                                            <span>March 17, {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="popular-post-item mb-40">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pu_post_img03.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title"><Link href="/blog-details">Purchase advertising...</Link></h5>
                                                            <span>March 17, {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="popular-post-item">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pu_post_img04.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title"><Link href="/blog-details">Purchase advertising...</Link></h5>
                                                            <span>March 17, {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="popular-post-item">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pu_post_img05.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="title"><Link href="/blog-details">Purchase advertising...</Link></h5>
                                                            <span>March 17, {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget">
                                        <h2 className="widget-title">Tags</h2>
                                        <div className="tag-list">
                                            <ul className="list-wrap">
                                                <li><Link href="#">Design</Link></li>
                                                <li><Link href="#">Fashion</Link></li>
                                                <li><Link href="#">Looks</Link></li>
                                                <li><Link href="#">Men</Link></li>
                                                <li><Link href="#">Music</Link></li>
                                                <li><Link href="#">Style</Link></li>
                                                <li><Link href="#">Women</Link></li>
                                                <li><Link href="#">Fashion</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area-end */}
                {/* newsletter-area */}
                <section className="newsletter-area-two">
                    <div className="container">
                        <div className="newsletter-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="section-title title-style-two white-title text-center mb-30">
                                        <span className="sub-title">Get update</span>
                                        <h2 className="title">Get latest updates and deals</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email address" />
                                            <button type="submit" className="btn">Subscribe <span /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter-shape-wrap-two">
                                <img src="/assets/img/images/h3_newsletter_shape01.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape02.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape03.png" alt="" />
                                <img src="/assets/img/images/h3_newsletter_shape04.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}