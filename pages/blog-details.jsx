import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout footerStyle={2}>
                {/* blog-details-area */}
                <section className="blog-details-area pt-175 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="blog-details-wrap">
                                    <div className="bd-content-top text-center">
                                        <div className="blog-meta-two">
                                            <ul className="list-wrap">
                                                <li className="tag"><Link href="#">Sector</Link></li>
                                                <li><i className="fal fa-clock" />5 Min</li>
                                            </ul>
                                        </div>
                                        <h2 className="title">How to Post a Classified Ad Online or in Newspapers</h2>
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                        <div className="blog-meta-two bottom">
                                            <ul className="list-wrap">
                                                <li className="avatar">
                                                    <Link href="/blog-details">
                                                        <img src="/assets/img/blog/blog_avatar01.png" alt="" />
                                                        Victor Pacheco
                                                    </Link>
                                                </li>
                                                <li><i className="fal fa-calendar" />March 17, {new Date().getFullYear()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-details-img">
                                        <img src="/assets/img/blog/blog_details_img.jpg" alt="" />
                                    </div>
                                    <div className="bd-content-bottom">
                                        <h2 className="title">Pilotage de la performance : vos indicateurs <br /> dans le même viseur</h2>
                                        <p>Un tableau de bord est un outil de gestion et d'évaluation de l’organisation d'une entreprise. Il est généralement constitué de plusieurs indicateurs de performance à des moments ou des périodes données. Lepilotage de la performance permet ainsi de comparer différents indicateurs et de les mettre en perspective. Le tableau de bord est donc un outil précieux lorsqu’il s’agit de surveiller ses performances et de planifier ses ressources pour ainsi optimiser sa performance.</p>
                                        <p>Le pilotage de la performance par Skello est une interface développée spécialement pour nos clients. L’objectif ?  Obtenir une visibilité globale de la santé de son organisation et de ses établissements. Nous avons conçu cette solution de pilotage grâce à vos indicateurs de performance et les données du planning de nos clients.</p>
                                        <p>Voici le détail des indicateurs que les clients pourront analyser pour optimiser leur gestion et leur planification :</p>
                                        <ul className="list-wrap">
                                            <li><span>Chiffre d’affaires.</span>Il correspond à la somme des ventes de biens ou de services hors taxes réalisés par un établissement dans le cadre d’une activité professionnelle courante.</li>
                                            <li><span>Masse salariale chargée.</span>Cet indicateur correspond à la masse salariale additionnée aux
                                                cotisations patronales.</li>
                                            <li><span>Ratio de masse salariale chargée</span>/ CA. Cet indicateur indique le ratio entre le coût de la masse salariale chargée sur le revenu réalisé par l’établissement. Il est possible de le calculer en fonction du prévisionnel et du réalisé.</li>
                                            <li><span>Heures travaillées et heures d’absences.</span>Cet indicateur correspond à la somme des heures
                                                travaillées et à la somme des heures d’absences cumulées.</li>
                                            <li><span>Heures travaillées par poste.</span>Ce ratio indique le nombre d’heures travaillées en fonction</li>
                                        </ul>
                                        <p>Un tableau de bord est un outil de gestion et d'évaluation de l’organisation d'une entreprise. Il est  généralement constitué de plusieurs indicateurs de performance à des moments ou des périodes données. Le pilotage de la performance permet ainsi de comparer différents indicateurs et de les mettre en perspective. Le tableau de bord est donc un outil précieux lorsqu’il s’agit de surveiller ses performances et de planifier ses ressources pour ainsi optimiser sa performance.</p>
                                    </div>
                                </div>
                                <div className="comment-wrap">
                                    <h2 className="title">281 <span>Comments</span></h2>
                                    <div className="latest-comments">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="comments-box">
                                                    <div className="comments-avatar">
                                                        <img src="/assets/img/blog/comment_avatar01.png" alt="" />
                                                    </div>
                                                    <div className="comment-text">
                                                        <h4 className="title">Lincoln Culhane</h4>
                                                        <span><i className="fal fa-calendar-alt" />March 17, {new Date().getFullYear()}</span>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                                                        <Link href="#" className="comment-reply-link"><i className="fal fa-reply" />Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comments-box">
                                                    <div className="comments-avatar">
                                                        <img src="/assets/img/blog/comment_avatar02.png" alt="" />
                                                    </div>
                                                    <div className="comment-text">
                                                        <h4 className="title">Emerson Septimus</h4>
                                                        <span><i className="fal fa-calendar-alt" />March 17, {new Date().getFullYear()}</span>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                                                        <Link href="#" className="comment-reply-link"><i className="fal fa-reply" />Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="comments-box children">
                                                    <div className="comments-avatar">
                                                        <img src="/assets/img/blog/comment_avatar03.png" alt="" />
                                                    </div>
                                                    <div className="comment-text">
                                                        <h4 className="title">Emerson Septimus</h4>
                                                        <span><i className="fal fa-calendar-alt" />March 17, {new Date().getFullYear()}</span>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                                                        <Link href="#" className="comment-reply-link"><i className="fal fa-reply" />Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-comments-form">
                                    <div className="post-comments-title">
                                        <h2 className="title">I Leave Your Comment</h2>
                                    </div>
                                    <div className="comment-form">
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
                                            <button type="submit" className="btn">Send Message <span /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-details-area-end */}
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
                {/* newsletter-area-end */}
            </Layout>
        </>
    )
}