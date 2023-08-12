import dynamic from 'next/dynamic'
const PortfolioFilter = dynamic(() => import('../elements/PortfolioFilter'), {
    ssr: false,
})

export default function Project2() {
    return (
        <>
            <section className="project-area-one pt-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title title-style-one mb-60 text-center">
                                <span className="sub-title">Réalisations</span>
                                <h2 className="title">Dernières créations</h2>
                                <p>Nous avons eu le plaisir de nous associer à un large éventail de marques, allant des startups technologiques aux entreprises de renommée. Notre approche Data-Driven a contribué au succès dans divers secteurs d’activités.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-item-wrap">
                        <PortfolioFilter />
                    </div>
                </div>
              
            </section>

        </>
    )
}
