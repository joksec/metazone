import Link from "next/link"

export default function Blog2() {
    return (
        <>
            <section className="blog-area-two pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title title-style-two white-title text-center mb-60">
                                <span className="sub-title">My Blog</span>
                                <h2 className="title">Recent blog post</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img01.jpg" alt="" /></Link>
                                    <h5 className="date">27 <span>Nov</span></h5>
                                </div>
                                <div className="blog-content-two">
                                    <Link href="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img02.jpg" alt="" /></Link>
                                    <h5 className="date">27 <span>Nov</span></h5>
                                </div>
                                <div className="blog-content-two">
                                    <Link href="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="blog-item-two">
                                <div className="blog-thumb-two">
                                    <Link href="/blog-details"><img src="/assets/img/blog/h2_blog_img03.jpg" alt="" /></Link>
                                    <h5 className="date">27 <span>Nov</span></h5>
                                </div>
                                <div className="blog-content-two">
                                    <Link href="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...<Link href="/blog-details">Read More</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
