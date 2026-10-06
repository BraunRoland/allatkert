import type { KepekProps } from "../types/kepekProps";

export function Kepek(props: KepekProps)
{
    return (
        <>
            <div className="col-sm-3 col-md-6 col-lg-3 kepKartya mb-3 h-100">
                <img src={props.src} className="img-fluid" alt={props.name} /> 
                <p className="mt-2">
                    {props.name}
                </p>
            </div>
        </>
    )
}
            
            