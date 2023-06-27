
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
                        <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All</button>
                        <button className={activeBtn("cat-one")} onClick={handleFilterKeyChange("cat-one")}>App</button>
                        <button className={activeBtn("cat-two")} onClick={handleFilterKeyChange("cat-two")}>Website</button>
                        <button className={activeBtn("cat-three")} onClick={handleFilterKeyChange("cat-three")}>Landing-page</button>
                        <button className={activeBtn("cat-four")} onClick={handleFilterKeyChange("cat-four")}>Branding-app</button>
                        <button className={activeBtn("cat-five")} onClick={handleFilterKeyChange("cat-five")}>Product Design</button>
                    </div>
                </div>
            </div>
            <div className="row project-active-two">
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-three cat-two">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img01.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four cat-five">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img02.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two cat-one">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img03.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-four cat-five">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img05.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-one cat-five">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img04.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grid-item grid-sizer cat-two cat-five">
                    <div className="project-item-two">
                        <div className="project-thumb-two">
                            <Link href="/project-details"><img src="/assets/img/project/h2_project_img06.jpg" alt="" /></Link>
                        </div>
                        <div className="project-content-two">
                            <h2 className="title"><Link href="/project-details">Motion Design</Link></h2>
                            <span>Lorem Ipsum is simply</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
