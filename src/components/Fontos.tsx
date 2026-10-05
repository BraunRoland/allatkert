import { fontosData } from "../data/fontos";

export function Fontos() {
    return(
        <>
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                    <div className="card">
                        <div className="card-header">Amit érdemes megjegyezni</div>

                        <div className="card-body">
                            <ul>
                                {fontosData.map((sor) => (
                                    <li>{sor}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}