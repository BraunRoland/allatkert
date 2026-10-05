import type { CardProps } from "../types/cardProps";


export function Card(props: CardProps) {
    return (
        <>
            <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
                <h2>{props.type}</h2>
                <div className="card">
                    <div className="card-body">
                        <h3>{props.name}</h3>
                        <p>
                            {props.name} egy {props.age} éves {props.type}. Súlya körülbelül {props.weight} kg.
                        </p>

                        <p>
                            <strong>Veszélyeztetett:</strong> {props.endangered? "Igen":"Nem"}
                        </p>

                        <p className="mb-0">
                            <strong>Kedvenc ételei:</strong> {props.food.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}