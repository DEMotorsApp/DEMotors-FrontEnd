import { ColDef } from "ag-grid-community"
import { ClientModel } from "../../../models/clientModel"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faSave, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons"
import { AgGridReact } from "ag-grid-react"
import { useNavigate } from "react-router-dom"
import { deleteClient, getClientsServices } from "../../../services/clientService/clientService"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import { toast } from "react-toastify"

const TABS = [
  {
    label: 'Todos', value: 'all'
  },
  {
    label: 'Activos', value: 'active'
  },
  {
    label: 'Inactivos', value: 'inactive'
  }
]

const Clients = () => {

  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('all')
  const [searchText, setSearchText] = useState('')
  const [clients, setClients] = useState<ClientModel[]>([])
  const [loading, setLoading] = useState(true)

  const fetchClients = async () => {
    try {
      const result = await getClientsServices();
      setClients(result);
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const onClickUpdateClient = (idClient: number) => {
    navigate(`/configuracion/add-client/${idClient}`)
  }

  const onClickDeleteClient = async (idClient: number) => {
    console.log(idClient)
    const responseApi = await deleteClient(idClient)
    const { response } = responseApi
    const { message } = response
    toast.success(message, {
      autoClose: 3000,
      className: "dark:bg-boxdark dark:text-white"
    })
    await fetchClients()
  }

  const columnDefs: ColDef<ClientModel>[] = [
    {
      field: 'FULL_NAME',
      headerName: 'NOMBRE COMPLETO',
      resizable: true,
      filter: true,
      wrapHeaderText: true,
      autoHeight: true,
      cellStyle: {
        whiteSpace: 'break-spaces'
      }
    },
    {
      field: 'NIT',
      headerName: 'NIT',
      filter: true,
      wrapHeaderText: true
    },
    {
      field: 'EMAIL',
      headerName: 'CORREO',
      filter: true,
      wrapHeaderText: true
    },
    {
      field: 'ADDRESS_CLIENT',
      headerName: 'DIRECCION',
      filter: true,
      wrapHeaderText: true
    },
    {
      field: 'ENTRY_DATE',
      headerName: 'FECHA ENTRADA',
      filter: true,
      wrapHeaderText: true
    },
    {
      field: 'PHONE_NUMBER',
      headerName: 'NUMERO',
      filter: true,
      wrapHeaderText: true
    },
    {
      headerName: 'ACCIONES',
      cellRenderer: (params: { data: ClientModel }) => (
        <div className="items-start">
          <button
            title="Editar"
            className="rounded-md py-1 px-3 mr-2 text-sm bg-warning text-white bg-opacity-90"
            onClick={() => onClickUpdateClient(params.data.ID_CLIENT)}
          >
            <FontAwesomeIcon icon={faEdit} style={{ marginTop: '5px' }} />
          </button>
          <button
            title="Eliminar"
            className="rounded-md py-1 px-3 ml-2 text-sm bg-danger text-white bg-opacity-90"
            onClick={() => onClickDeleteClient(params.data.ID_CLIENT)}
          >
            <FontAwesomeIcon icon={faTrash} style={{ marginTop: '5px' }} />
          </button>
        </div>
      )
    }
  ]

  const handleAddClient = () => {
    navigate('/configuracion/add-client')
  }

  return (
    <>

      <Breadcrumb pageName="Mantenimiento de Clientes" />

      <div className="mb-8 flex items-center justify-end gap-8">
        <button
          className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
          type="button"
          title='Agregar'
          onClick={handleAddClient}
        >
          Agregar &nbsp;
          <FontAwesomeIcon icon={faSave} style={{ marginTop: '5px' }} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="w-full md:w-max flex gap-4 border-b-2 border-gray-200">
          {
            TABS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`relative py-2 px-4 transition-all duration-300 ${activeTab === value
                  ? 'text-primary font-bold'
                  : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {
                  label
                }
                {
                  activeTab === value && (
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-primary rounded-t-lg animate-slideIn"></span>
                  )
                }
              </button>
            ))
          }
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-4" />
        </div>
      </div>

      <div className="mt-5">
        <div className="ag-theme-quartz" style={{ height: 400 }}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={clients}
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
    </>
  )
}

export default Clients