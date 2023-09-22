
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".project-active-two", {
                itemSelector: ".grid-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "active" : "")
    return (
        <>

            <div className="row">
                <div className="col-lg-12">
                    <div className="project-menu-nav">
                        <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>Voir tout</button>
                        <button className={activeBtn("cat-one")} onClick={handleFilterKeyChange("cat-one")}>Website</button>
                        <button className={activeBtn("cat-two")} onClick={handleFilterKeyChange("cat-two")}>Identité visuél</button>
                        <button className={activeBtn("cat-three")} onClick={handleFilterKeyChange("cat-three")}>Mobile</button>
                        <button className={activeBtn("cat-four")} onClick={handleFilterKeyChange("cat-four")}>Audio Visuel</button>
                    </div>
                </div>
            </div>
            <div className="row project-active-two">
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/Brochure-visuel.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Brochure</h2>
                            <span>Brochure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/3D-visuel.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">3D</h2>
                            <span>Visuel 3D</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/App_Finderz.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/Visuel_3D.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">3D</h2>
                            <span>Visuel en 3D</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/web/Awakearth-visuel.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                        <h2 className="title">Site Web</h2>
                            <span>Site web sur mesure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/App_Amitigo2.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/social-media.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Social Media</h2>
                            <span>Social Media Poster</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                           <img src="/assets/img/project/web/Finderz visuel.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                        <h2 className="title">Site Web</h2>
                            <span>Site web sur mesure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/b8oblwyt8a7375h3himfdgdl5xp5.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">3D</h2>
                            <span>3D Bus</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/i5hxscbv38qhs9fddtzrw2km4j2g.png" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">3D</h2>
                            <span>Rooms 3D</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/audio-visuel/sc1ppflt9d47e3dtt0yw3f60ax4a.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">3D</h2>
                            <span>Object 3D</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/carte-visite.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Carte Visite</h2>
                            <span>Carte visite pour IsiTek</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/3r3u6jzpxgvtz19zf7zvilb3y7g1.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Illustration</h2>
                            <span>Tableau</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/10rw5rxvtdmwemjutc7xytsrkzze.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>Conception Logo</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/9wd591eqiclesqwk9v2a5cgarzy3.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Product </h2>
                            <span>Design emballage</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/rl8wn7i8s7ihlcfatraebtbhfy6s.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Carte Visite</h2>
                            <span>Carte visite</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Carte Visite</h2>
                            <span>Carte visite pour IsiTek</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/441d9k5181ngdmvi1y81duaus9q3.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Conception</h2>
                            <span>Sac </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/n4973uk3j7b7agh27kq63fu67y72.png" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Brochure</h2>
                            <span>Brochure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/App_GuideDuGolfe.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/2q7sqfdbhvx1km7pnb7s91p59ah6.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/7exuik9ac031rnvt8r81u1qvk1gc.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/mobile/lfnsd1r4wgpieu9k8e91w3mqvy6m.jpeg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Mobile App</h2>
                            <span>Conception Application mobile</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/carte-visite-1.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Carte Visite</h2>
                            <span>Conception Carte visite</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/web/Page-guyanes.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Site Web</h2>
                            <span>Site web sur mesure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/flyer2A.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Flyer</h2>
                            <span>Conception Flyer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/FLYER-ENFANT.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Flyer</h2>
                            <span>Fiche publicitaire</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/illustration-2.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Illustation</h2>
                            <span>Gaming illustration</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/Illustration-trocmer-visuel2.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Illustration</h2>
                            <span>Trocmer illustration</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/Logo@4x.png" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>logo design</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/web/Vitefait-visuel.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Site Web</h2>
                            <span>Site web sur mesure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/logo-Finderz.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>logo Finderz</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/visuel-logo-lybertyx.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>Logo Design</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/web/website_GuideDuGolfe.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Site Web</h2>
                            <span>Site web sur mesure</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/visuel-logo-Nina.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>Logo Nina</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <img src="/assets/img/project/identite-visuel/visuel-logo-W-Health.jpg" alt="" />
                        </div>
                        <div className="project-content-two">
                            <h2 className="title">Logo</h2>
                            <span>Visuel Logo</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
