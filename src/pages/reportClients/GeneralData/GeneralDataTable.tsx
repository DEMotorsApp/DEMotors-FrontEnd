import jsreport from '@jsreport/browser-client'
import { ColDef } from 'ag-grid-community'
import { ReportClientsModel } from '../../../models/reportClientsModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faSearch } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { ReportDetailsEquipmentModel } from '../../../models/reportDetailsEquipmentModel'

const GeneralDataTable = () => {

    const [dataRows, setDataRows] = useState<ReportClientsModel[]>([
        {
            "NAME": "Juan",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "NAME": "Alberto",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "NAME": "Felipe",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "NAME": "Ana",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "NAME": "Andrea",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        }
    ])

    const [dataRowsEquipment, setDataRowsEquipment] = useState<ReportDetailsEquipmentModel[]>([
        {
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        },
        {
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        },
        {
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        },
        {
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        },
        {
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        }
    ])


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

    const columnDefsEquipo: ColDef<ReportDetailsEquipmentModel>[] = [
        {
            field: 'DIRECTION',
            headerName: 'Direccion',
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
        },
        {
            field: 'SERVICES_ORDER',
            headerName: 'Orden de servicio',
            filter: true,
            wrapHeaderText: true
        },
    ]

    const handleReport = async () => {
        jsreport.serverUrl = 'http://localhost:5488'
        const report = await jsreport.render({
            template: {
                name: '/DEMotors/Reportes equipos del cliente/lista-equipo-clientes-main'
            },
            data: {
                "nombreEmpresa": "Demotors",
                "dataEquipos": dataRows
            }
        })

        report.openInWindow({ title: 'Listado de equipos por cliente' })
    }

    const handleReportDetailsEquipment = async () => {
        jsreport.serverUrl = 'http://localhost:5488'
        const report = await jsreport.render({
            template: {
                name: '/DEMotors/Reportes detalles de los equipos/lista-detalles-equipos-main'
            },
            data: {
                "nombreEmpresa": "Demotors",
                "dataDetalles": dataRowsEquipment
            }
        })

        report.openInWindow({ title: 'Lista de detalles de los equipos' })
    }

    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Breadcrumb pageName='Reporte de listado de equipos por clientes' />
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
                        {/* <div className='w-full md:w-max flex gap-4 border-b-2 border-gray-200'>
                            
                        </div>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder='Buscar'
                                className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                            />
                            <FontAwesomeIcon icon={faSearch} className='absolute right-4 top-4' />
                        </div> */}
                    </div>
                    <div className='mt-5'>
                        <div className='ag-theme-quartz' style={{ height: 400 }}>
                            <AgGridReact
                                columnDefs={columnDefs}
                                rowData={dataRows}
                                pagination={true}
                                paginationPageSize={10}
                                defaultColDef={{
                                    sortable: true,
                                    resizable: false,
                                    flex: 1,
                                    minWidth: 100,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                <Breadcrumb pageName='Reporte de listado de detalles del equipo' />
                    <div className='mb-8 flex items-center justify-end gap-8'>
                        <button
                            className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                            onClick={() => handleReportDetailsEquipment()}
                            type="button"
                        >
                            Imprimir PDF &nbsp;
                            <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                        {/* <div className='w-full md:w-max flex gap-4 border-b-2 border-gray-200'>
                        
                    </div>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Buscar'
                            className='w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                        />
                        <FontAwesomeIcon icon={faSearch} className='absolute right-4 top-4' />
                    </div> */}
                    </div>
                    <div className='mt-5'>
                        <div className='ag-theme-quartz' style={{ height: 400 }}>
                            <AgGridReact
                                columnDefs={columnDefsEquipo}
                                rowData={dataRowsEquipment}
                                pagination={true}
                                paginationPageSize={10}
                                defaultColDef={{
                                    sortable: true,
                                    resizable: false,
                                    flex: 1,
                                    minWidth: 100,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralDataTable