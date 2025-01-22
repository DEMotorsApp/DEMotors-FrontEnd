import { useEffect, useState } from 'react'
import { ReportServicesOrderModel } from '../../../models/reportServicesOrderModel'
import { ColDef } from 'ag-grid-community'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { ClientsModel } from '../../../models/ClientsModel'
import SelectClient from '../../../components/Forms/SelectGroup/SelectClient'
import { getClients } from '../../../services/clientService/clientService'
import DatePickerThree from '../../../components/Forms/DatePicker/DatePickerThree'
import { pdf, PDFDownloadLink } from '@react-pdf/renderer'
import ReportServicesOrderPDF from '../../../components/ReportPDF/ReportServicesOrderPDF'

const GeneralDataTableServicesOrder = () => {

    const [dataReportServicesOrderPDF, setDataReportServicesOrderPDF] = useState(null)

    const [dataReportServicesOrder, setDataReportServicesOrder] = useState<ReportServicesOrderModel[]>([])
    
    const [dataReportImage, setDataReportImage] = useState([])

    const [clients, setClients] = useState<ClientsModel[]>([])

    const [client, setClient] = useState(0)

    const [loading, setLoading] = useState(true)

    const columnDefs: ColDef<ReportServicesOrderModel>[] = [
        {
            field: 'NO_ORDER',
            headerName: 'Numero de orden',
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

    const fetchClients = async () => {
        try {
            const result = await getClients()
            setClients(result)
        } catch (error) {
            console.log('Error al obtener los clientes; ', error)
        } finally {
            setLoading(false)
        }
    }

    console.log('dataReport => ', dataReportServicesOrderPDF)

    useEffect(() => {
        fetchClients()
    }, [])

    const onChangeTableServicesOrder = async (idClient: number) => {
        setClient(idClient)
        // const result = await getServicesOrders(idClient)
        // setDataReportServicesOrder(result)
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
                                flag={false}
                            />
                        </div>
                    </div>
                    <div className='mb-4.5 flex flex-col gap-12 xl:flex-row'>
                        <div className='w-full xl:w-1/2 flex items-end'>
                            <DatePickerThree
                                client={client}
                                setDataReportServicesOrder={setDataReportServicesOrder}
                                setDataReportServicesOrderPDF={setDataReportServicesOrderPDF}
                                setDataReportImage={setDataReportImage}
                            />
                        </div>
                    </div>
                    <div className='mb-8 flex items-center justify-end gap-8'>
                        <PDFDownloadLink document={<ReportServicesOrderPDF data={dataReportServicesOrderPDF} dataImages={dataReportImage} />} fileName='reporte-orden-servicio.pdf'>
                            <button
                                className='rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90'
                                type='button'
                            >
                                Descargar PDF &nbsp;
                                <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                            </button>
                        </PDFDownloadLink>
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