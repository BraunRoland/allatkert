import { BevezetoData } from "../data/bevezeto"

export function Bevezeto() {
    return (
        <>
        <div className="row mb-2">
            <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                Mit érdemes tudni az állatkerti állatokról?
                </div>

                <div className="card-body">
                    {BevezetoData.map((b: string) => (
                        <p>{b}</p>
                    ))}
                </div>
            </div>
            </div>
        </div>
        </>
    )
}