
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
                                    <CounterUp className="count odometer" count={35} time={1} />
                                    <p>Projet <span>terminé</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={42} time={1} />
                                    <p>Nos clients <span>satisfaits</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={954} time={1} />
                                    <p>Tasse <span>de caffé</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item">
                                    <CounterUp className="count odometer" count={23} time={1} />
                                    <p>Téchnologies<span>utilisés</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
