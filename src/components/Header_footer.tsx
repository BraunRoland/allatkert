export function Header() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                    <div className="mt-2 mb-1 p-5 bg-success text-white rounded">
                        <h1 id="focim">🐾 Állatkert lakói</h1>

                        <p className="mb-0">Téma: Állatok az állatkertben</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Footer() {
    return (
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                <p className="text-center">
                    <b>Az oldalt készítette: </b>

                    <i>Braun Roland</i>
                </p>

                <p style={{textAlign: "center"}}>
                    <span style={{fontWeight: "bold"}}>Készítés dátuma: </span>

                    <span className="dolt">2026.10.05.</span>
                </p>
                </div>
            </div>
            </div>
        </>
    )
}