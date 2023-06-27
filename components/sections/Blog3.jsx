import Link from "next/link"

export default function Blog3() {
    return (
        <>
            <section className="blog-area-two blog-area-three pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title title-style-two text-center mb-60">
                                <span className="sub-title">Blog  Article</span>
                                <h2 className="title">Recent blog post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two blog-item-three">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content-two">
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="fal fa-user" /><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fal fa-calendar" />February 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two blog-item-three">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content-two">
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="fal fa-user" /><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fal fa-calendar" />February 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two blog-item-three">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img03.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content-two">
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="fal fa-user" /><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fal fa-calendar" />February 10, 2022</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has een the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="read-more-btn text-center mt-30">
                        <Link href="/blog" className="btn">Read More <span /></Link>
                    </div>
                </div>
            </section>

        </>
    )
}
