import jsreport from '@jsreport/browser-client'

const GeneralDataTable = (props) => {

    const handleReport = async () => {
        jsreport.serverUrl = 'http://localhost:5488'
        const report = await jsreport.render({
            template: {
                name: '/ejemplo/Listado-Equipos/lista-empleados-main'
            },
            data: {
                "nombreEmpresa": "Demotors",
                "ejemplos":  [
                    {
                        "nombre": "Juan",
                        "direccion": "Ejemplo",
                        "noSerie": "32131231",
                        "fecha": "03/10/2024",
                        "trabajoRealizado": "SI"
                    },
                    {
                        "nombre": "Alberto",
                        "direccion": "Ejemplo",
                        "noSerie": "32131231",
                        "fecha": "03/10/2024",
                        "trabajoRealizado": "SI"
                    },
                    {
                        "nombre": "Felipe",
                        "direccion": "Ejemplo",
                        "noSerie": "32131231",
                        "fecha": "03/10/2024",
                        "trabajoRealizado": "SI"
                    },
                    {
                        "nombre": "Ana",
                        "direccion": "Ejemplo",
                        "noSerie": "32131231",
                        "fecha": "03/10/2024",
                        "trabajoRealizado": "SI"
                    },
                    {
                        "nombre": "Andrea",
                        "direccion": "Ejemplo",
                        "noSerie": "32131231",
                        "fecha": "03/10/2024",
                        "trabajoRealizado": "SI"
                    }
                ]
            }
        })

        report.openInWindow({ title: 'Mi reporte' })
    }

    return (
        <>
            <button
                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                onClick={() => handleReport()}
                type="button"
            >
                Imprimir PDF
            </button>
        </>
    )
}

export default GeneralDataTable