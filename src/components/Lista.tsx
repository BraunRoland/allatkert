import type { listaProps } from "../types/listaProps";

export function ListakUl(props: listaProps) {
    return(
        <>
            <div className="col-sm-4 kartya">
                <h2>{props.name}</h2>

                <ul className="list-group">
                    {props.list.map((row) => (
                        <li className="list-group-item">{row}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export function ListakOl(props: listaProps) {
    return (
        <>
            <div className="col-sm-4 kartya">
                <h2>{props.name}</h2>

                <ol className="list-group list-group-numbered">
                    {props.list.map((row) => (
                        <li className="list-group-item">{row}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}