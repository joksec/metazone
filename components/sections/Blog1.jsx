import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">My Blog</span>
                                <h2 className="title">News  Updates</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
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
                                    <h2 className="title"><Link href="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
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

        </>
    )
}
