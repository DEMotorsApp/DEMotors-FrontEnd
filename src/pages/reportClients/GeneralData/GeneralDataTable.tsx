import jsreport from '@jsreport/browser-client'
import { ColDef } from 'ag-grid-community'
import { ReportClientsModel } from '../../../models/reportClientsModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilePdf, faSearch } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { ReportDetailsEquipmentModel } from '../../../models/reportDetailsEquipmentModel'
import SelectClient from '../../../components/Forms/SelectGroup/SelectClient'
import { ClientsModel } from '../../../models/ClientsModel'

const GeneralDataTable = () => {

    const [clients, setClients] = useState<ClientsModel[]>([
        {
            ID_CLIENT: 1,
            NAME_CLIENT: 'Edgar Cabrera'
        },
        {
            ID_CLIENT: 2,
            NAME_CLIENT: 'Rodrigo Cardenas'
        },
        {
            ID_CLIENT: 3,
            NAME_CLIENT: 'Fernando Tumax'
        }
    ])

    const [reportData, setReportData] = useState<ReportClientsModel[]>([])

    const [reportDataEquipment, setReportDataEquipment] = useState<ReportDetailsEquipmentModel[]>([])

    const [dataRows, setDataRows] = useState<ReportClientsModel[]>([
        {
            "ID_CLIENT": 1,
            "NAME": "Edgar Cabrera",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "32131231",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "ID_CLIENT": 1,
            "NAME": "Edgar Cabrera",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "26265489",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "ID_CLIENT": 2,
            "NAME": "Rodrigo Cardenas",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "423154",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "ID_CLIENT": 2,
            "NAME": "Rodrigo Cardenas",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "432765346",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "ID_CLIENT": 3,
            "NAME": "Fernando Tumax",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "56575765",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        },
        {
            "ID_CLIENT": 3,
            "NAME": "Fernando Tumax",
            "DIRECTION": "Ejemplo",
            "NO_SERIE": "0980678",
            "DATE": "03/10/2024",
            "WORK_DONE": "SI"
        }
    ])

    const [dataRowsEquipment, setDataRowsEquipment] = useState<ReportDetailsEquipmentModel[]>([
        {
            "NO_SERIE": "32131231",
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "03124898",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "32131231",
            "DIRECTION": "Ejemplo 1",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "987567654",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "26265489",
            "DIRECTION": "Ejemplo",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32131231",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "26265489",
            "DIRECTION": "Ejemplo 2",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "45687956",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "423154",
            "DIRECTION": "Ejemplo 3",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "7845343",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "423154",
            "DIRECTION": "Ejemplo 4",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "6233132",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "432765346",
            "DIRECTION": "Ejemplo 9",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "387421515",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "432765346",
            "DIRECTION": "Ejemplo 5",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "5467896654",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "56575765",
            "DIRECTION": "Ejemplo 89",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "32103477",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "56575765",
            "DIRECTION": "Ejemplo 23",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "687540123",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "0980678",
            "DIRECTION": "Ejemplo 11",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "5424532432",
            "WORK_DONE": "SI"
        },
        {
            "NO_SERIE": "0980678",
            "DIRECTION": "Ejemplo 10",
            "DATE": "03/10/2024",
            "SERVICES_ORDER": "6776547654",
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
            headerName: 'No. Serie',
            cellRenderer: (params: { data: ReportClientsModel }) => (
                <div>
                    <p>
                        {params.data.NO_SERIE}
                        <button
                            title='Editar'
                            className='ml-2 rounded-md py-1 px-3 mr-2 text-sm bg-warning text-white bg-opacity-90'      
                            onClick={() => onChangeTableReportDetailEquipment(params.data.NO_SERIE)}
                        >
                            Cargar Info &nbsp;
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </p>
                </div>
            ),
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
                "dataEquipos": reportData
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
                "dataDetalles": reportDataEquipment
            }
        })

        report.openInWindow({ title: 'Lista de detalles de los equipos' })
    }

    const onChangeTableReportClient = async (idClient: number) => {
        setReportData(dataRows.filter(data => data.ID_CLIENT === idClient))
    }

    const onChangeTableReportDetailEquipment = async (noSerie: string) => {
        setReportDataEquipment(dataRowsEquipment.filter(data => data.NO_SERIE === noSerie))
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
                    <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                        <div className='w-full xl:w-1/2 flex items-end'>
                            <SelectClient 
                                clients={clients}
                                onChangeTable={onChangeTableReportClient}
                            />
                        </div>
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
                                rowData={reportData}
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
                                rowData={reportDataEquipment}
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