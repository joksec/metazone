
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
  ssr: false,
})

export default function Counter1() {
    return (
        <>
            <div className="counter-area">
                <div className="container">
                    <div className="counter-item-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={535} time={1} />
                                    <p>Project <span>Completed</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={922} time={1} />
                                    <p>Our Happy <span>Clients</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={954} time={1} />
                                    <p>Cup of <span>Coffee for Me</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={343} time={1} />
                                    <p>Clients Work <span>With Me</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
