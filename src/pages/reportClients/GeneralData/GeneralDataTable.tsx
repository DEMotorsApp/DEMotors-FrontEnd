import jsreport from '@jsreport/browser-client'
import { ColDef } from 'ag-grid-community'
import { ReportClientsModel } from '../../../models/reportClientsModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const GeneralDataTable = () => {


    const columnDefs: ColDef<ReportClientsModel>[] = [
        {
            field: 'NAME',
            headerName: 'Nombre',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'DIRECTION',
            headerName: 'Direccion',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'NO_SERIE',
            headerName: 'No. Serie',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'DATE',
            headerName: 'Fecha',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'WORK_DONE',
            headerName: 'Trabajo realizado',
            filter: true,
            wrapHeaderText: true
        }
    ]

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
            <div className='mb-8 flex items-center justify-end gap-8'>
                <button
                    className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                    onClick={() => handleReport()}
                    type="button"
                >
                    Imprimir PDF &nbsp;
                    <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                </button>
            </div>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                <div className='w-full md:w-max flex gap-4 border-b-2 border-gray-200'>
                    
                </div>
            </div>
        </>
    )
}

export default GeneralDataTable