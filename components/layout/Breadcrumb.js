import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, bShape, breadcrumbCls, blogSearch }) {
    return (
        <>
            <section className={`breadcrumb-area ${breadcrumbCls ? breadcrumbCls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">{breadcrumbTitle}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {blogSearch &&
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="breadcrumb-search">
                                    <form action="#">
                                        <label htmlFor="serch"><i className="far fa-search" /></label>
                                        <input type="text" id="serch" placeholder="Search for..." />
                                        <button type="submit" className="btn">Search <span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                </div>

                {bShape ?
                    <>
                        <div className="breadcrumb-shape-wrap-three">
                            <img src="/assets/img/images/breadcrumb_shape04.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                            <img src="/assets/img/images/breadcrumb_shape05.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                            <img src="/assets/img/images/breadcrumb_shape06.png" alt="" className="wow zoomIn" data-wow-delay=".2s" />
                        </div>

                    </> :
                    <>
                        <div className="breadcrumb-shape-wrap">
                            <img src="/assets/img/images/breadcrumb_shape01.png" alt="" />
                            <img src="/assets/img/images/breadcrumb_shape02.png" alt="" />
                        </div>
                    </>
                }

            </section>

        </>
    )
}
