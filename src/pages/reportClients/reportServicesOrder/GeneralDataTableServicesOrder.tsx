import jsreport from '@jsreport/browser-client'
import { useState } from 'react'
import { ReportServicesOrderModel } from '../../../models/reportServicesOrderModel'
import { ColDef } from 'ag-grid-community'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'

const GeneralDataTableServicesOrder = () => {
    const [dataRows, setDataRows] = useState<ReportServicesOrderModel[]>([
        {
            'NUM_ORDER': '3232132',
            'CLIENT': 'Juan',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'NUM_ORDER': '3232132',
            'CLIENT': 'Alberto',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'NUM_ORDER': '3232132',
            'CLIENT': 'Felipe',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'NUM_ORDER': '3232132',
            'CLIENT': 'Ana',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
            'DATE': '03/10/2024',
            'WORK_DONE': 'SI'
        },
        {
            'NUM_ORDER': '3232132',
            'CLIENT': 'Andrea',
            'DIRECTION': 'Ejemplo',
            'NUM_SERIE': '32131231',
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
                "dataOrdenesServicios": dataRows
            }
        })

        report.openInWindow({ title: 'Listado de ordenes de servicios' })
    }

    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Breadcrumb pageName='Reporte de listado de ordenes de servicios' />
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
            </div>
        </>
    )
}

export default GeneralDataTableServicesOrder