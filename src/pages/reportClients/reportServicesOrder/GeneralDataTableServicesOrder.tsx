import jsreport from '@jsreport/browser-client'
import { useState } from 'react'
import { ReportServicesOrderModel } from '../../../models/reportServicesOrderModel'
import { ColDef } from 'ag-grid-community'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { ClientsModel } from '../../../models/ClientsModel'
import SelectClient from '../../../components/Forms/SelectGroup/SelectClient'

const GeneralDataTableServicesOrder = () => {

    const [dataReportServicesOrder, setDataReportServicesOrder] = useState<ReportServicesOrderModel[]>([])

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

    const [dataRows, setDataRows] = useState<ReportServicesOrderModel[]>([
        {
            'ID_CLIENT': 1,
            'NUM_ORDER': '03124898',
            'CLIENT': 'Edgar Cabrera',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 1,
            'NUM_ORDER': '987567654',
            'CLIENT': 'Edgar Cabrera',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 1,
            'NUM_ORDER': '32131231',
            'CLIENT': 'Edgar Cabrera',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '26265489',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 1,
            'NUM_ORDER': '45687956',
            'CLIENT': 'Edgar Cabrera',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '26265489',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 2,
            'NUM_ORDER': '7845343',
            'CLIENT': 'Rodrigo Cardenas',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '423154',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 2,
            'NUM_ORDER': '6233132',
            'CLIENT': 'Rodrigo Cardenas',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '423154',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 2,
            'NUM_ORDER': '387421515',
            'CLIENT': 'Rodrigo Cardenas',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '432765346',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 2,
            'NUM_ORDER': '5467896654',
            'CLIENT': 'Rodrigo Cardenas',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '432765346',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 3,
            'NUM_ORDER': '32103477',
            'CLIENT': 'Fernando Tumax',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '56575765',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 3,
            'NUM_ORDER': '687540123',
            'CLIENT': 'Fernando Tumax',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '56575765',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 3,
            'NUM_ORDER': '5424532432',
            'CLIENT': 'Fernando Tumax',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '0980678',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'ID_CLIENT': 3,
            'NUM_ORDER': '6776547654',
            'CLIENT': 'Fernando Tumax',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '0980678',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        }
    ])

    const columnDefs: ColDef<ReportServicesOrderModel>[] = [
        {
            field: 'NUM_ORDER',
            headerName: 'Numero de orden',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'CLIENT',
            headerName: 'Cliente',
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
            field: 'NUM_SERIE',
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
                name: '/DEMotors/Reportes ordenes de servicios/lista-ordenes-servicios-main'
            },
            data: {
                "nombreEmpresa": "Demotors",
                "dataOrdenesServicios": dataReportServicesOrder
            }
        })

        report.openInWindow({ title: 'Listado de ordenes de servicios' })
    }

    const onChangeTableServicesOrder = async (idClient: number) => {
        setDataReportServicesOrder(dataRows.filter(data => data.ID_CLIENT === idClient))
    }

    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Breadcrumb pageName='Reporte de listado de ordenes de servicios' />
                    <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                        <div className='w-full xl:w-1/2 flex items-end'>
                            <SelectClient 
                                clients={clients}
                                onChangeTable={onChangeTableServicesOrder}
                            />
                        </div>
                    </div>
                    <div className='mb-8 flex items-center justify-end gap-8'>
                        <button
                            className='rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90'
                            onClick={() => handleReport()}
                            type='button'
                        >
                            Imprimir PDF &nbsp;
                            <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                        </button>
                    </div>
                    <div className='mt-5'>
                        <div className='ag-theme-quartz' style={{ height: 400 }}>
                            <AgGridReact
                                columnDefs={columnDefs}
                                rowData={dataReportServicesOrder}
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

export default GeneralDataTableServicesOrder