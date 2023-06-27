import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('../elements/PortfolioFilter'), {
    ssr: false,
})

export default function Project2() {
    return (
        <>
            <section className="project-area-two pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title title-style-two white-title mb-60 text-center">
                                <span className="sub-title">Portfolio</span>
                                <h2 className="title">You Will Like These Design Made by Me</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrap">
                        <PortfolioFilter />
                    </div>
                </div>
                <div className="project-shape">
                    <img src="/assets/img/project/h2_project_shape.png" alt="" />
                </div>
            </section>

        </>
    )
}
