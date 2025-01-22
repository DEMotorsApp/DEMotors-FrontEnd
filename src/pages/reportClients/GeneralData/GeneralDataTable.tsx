import { ColDef } from 'ag-grid-community'
import { ReportClientsModel } from '../../../models/reportClientsModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilePdf, faSearch } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb'
import { ReportDetailsEquipmentModel } from '../../../models/reportDetailsEquipmentModel'
import SelectClient from '../../../components/Forms/SelectGroup/SelectClient'
import { ClientsModel } from '../../../models/ClientsModel'
import DatePickerFour from '../../../components/Forms/DatePicker/DatePickerFour'
import { getClients } from '../../../services/clientService/clientService'
import { getDetailsEquipments } from '../../../services/reportsService/reportsService'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ReportClientPDF from '../../../components/ReportPDF/reportClientPDF'
import ReportEquipmentPDF from '../../../components/ReportPDF/ReportEquipmentPDF'

const GeneralDataTable = () => {

    const [details, setDetails] = useState({
        idClient: 0,
        noSerie: '',
        startDate: '',
        endDate: ''
    })

    const [reportDataClient, setReportDataClient] = useState(null)

    const [reportDataEquipmentPDF, setReportDataEquipmentPDF] = useState(null)

    const [clients, setClients] = useState<ClientsModel[]>([])

    const [loading, setLoading] = useState(false)

    const [reportData, setReportData] = useState<ReportClientsModel[]>([])

    const [reportDataEquipment, setReportDataEquipment] = useState<ReportDetailsEquipmentModel[]>([])

    const [reportImageClient, setReportImageClient] = useState([])

    const [reportImageEquipment, setReportImageEquipment] = useState([])


    const columnDefs: ColDef<ReportClientsModel>[] = [
        {
            field: 'NO_ORDER',
            headerName: 'No. Orden',
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
            field: 'ADDRESS',
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
            field: 'NO_ORDER',
            headerName: 'Orden de servicio',
            filter: true,
            wrapHeaderText: true
        },
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

    useEffect(() => {
        fetchClients()
    }, [])

    const onChangeTableReportClient = async (idClient: number) => {
        setDetails({
            ...details,
            idClient
        })
    }

    const onChangeTableReportDetailEquipment = async (noSerie: string) => {
        const { idClient, startDate, endDate } = details
        const result = await getDetailsEquipments(idClient, noSerie, startDate, endDate)
        setReportDataEquipmentPDF(result.info[0])
        setReportDataEquipment(result.info[0].cc)
        setReportImageEquipment(result.images)
        // setReportDataEquipment(dataRowsEquipment.filter(data => data.NO_SERIE === noSerie))
    }

    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <Breadcrumb pageName='Reporte de listado de equipos por clientes' />
                    <div className='mb-8 flex items-center justify-end gap-8'>
                        <PDFDownloadLink document={<ReportClientPDF data={reportDataClient} dataImages={reportImageClient} />} fileName='reporte-cliente-prueba.pdf'>
                            <button
                                className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                type="button"
                            >
                                Descargar PDF &nbsp;
                                <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                            </button>
                        </PDFDownloadLink>
                    </div>
                    <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                        <div className='w-full xl:w-1/2 flex items-end'>
                            <SelectClient
                                clients={clients}
                                onChangeTable={onChangeTableReportClient}
                                flag={false}
                            />
                        </div>
                    </div>
                    <div className='mb-4.5 flex flex-col gap-12 xl:flex-row'>
                        <div className='w-full xl:w-1/2 flex items-end'>
                            <DatePickerFour
                                details={details}
                                setReportData={setReportData}
                                setDetails={setDetails}
                                setReportDataEquipment={setReportDataEquipment}
                                setReportDataClient={setReportDataClient}
                                setReportImageClient={setReportImageClient}
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
                        <PDFDownloadLink document={<ReportEquipmentPDF data={reportDataEquipmentPDF} dataImages={reportImageEquipment} />} fileName='reporte-equipo-prueba.pdf'>
                            <button
                                className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                type="button"
                            >
                                Imprimir PDF &nbsp;
                                <FontAwesomeIcon icon={faFilePdf} style={{ marginTop: '5px' }} />
                            </button>
                        </PDFDownloadLink>
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