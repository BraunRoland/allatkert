import { tablazatData } from "../data/tablazat";


export function TablazatProps() {
    return( 
        <>
            <div className="row mb-1" id="allatok">
                <div className="col-sm-12 kartya mb-3">
                <h2>Az állatkert néhány lakója</h2>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Név</th>

                        <th>Életkor</th>

                        <th>Súly</th>

                        <th>Veszélyeztetett?</th>

                        <th>Kedvenc ételek</th>
                    </tr>
                    </thead>

                    <tbody>
                        {tablazatData.map((allat) => (
                            <tr>
                                <td>{allat.name}</td>
                                <td>{allat.age} év</td>
                                <td>{allat.weight} kg</td>
                                <td>{allat.endangered? "Igen": "Nem"}</td>
                                <td>{allat.food.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}