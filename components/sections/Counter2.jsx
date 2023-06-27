import Link from "next/link"

import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Counter2() {
    return (
        <>
            <section className="counter-area-two pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="counter-item-wrap-two">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="counter-item-two">
                                            <div className="icon">
                                                <img src="/assets/img/icon/counter_icon01.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={252} time={1} /></h2>
                                                <p>Offices</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-two">
                                            <div className="icon">
                                                <img src="/assets/img/icon/counter_icon02.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={10} time={1} /></h2>
                                                <p>Workers</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-two">
                                            <div className="icon">
                                                <img src="/assets/img/icon/counter_icon03.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={15} time={1} />K</h2>
                                                <p>Customers</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-two">
                                            <div className="icon">
                                                <img src="/assets/img/icon/counter_icon04.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={1300} time={1} />+</h2>
                                                <p>Projects</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-content">
                                <div className="section-title title-style-two mb-20">
                                    <span className="sub-title">Our Success</span>
                                    <h2 className="title">Over 2000+ Completed Work  Still Counting.</h2>
                                </div>
                                <p className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <Link href="/about-us" className="btn">Learn More <span /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
