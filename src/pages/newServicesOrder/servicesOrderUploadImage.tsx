import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import { faSave } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { ColDef } from "ag-grid-community"
import { UploadImageModel } from "../../models/UploadImageModel"
import LoadComponent from "../../components/Load/LoadComponent"
import { AgGridReact } from "ag-grid-react"
import Modal from "../../components/Modal/ModalComponent"
import UploadImageForm from "./uploadImageForm"

const ServicesOrderUploadImage: React.FC = () => {

    const [loading, setLoading] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    const columnDefs: ColDef<UploadImageModel>[] = [
        {
            field: 'NAME',
            headerName: 'Nombre del archivo',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'DESCRIPTION',
            headerName: 'Descripcion de la imagen',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'USER_CREATED',
            headerName: 'Usuario Creo',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'DATE_CREATED',
            headerName: 'Fecha Creo',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'USER_MODIFIED',
            headerName: 'Usuario Modifico',
            filter: true,
            wrapHeaderText: true
        },
        {
            field: 'DATE_MODIFIED',
            headerName: 'Fecha Modifico',
            filter: true,
            wrapHeaderText: true
        }
    ]

    return (
        <>
            <Breadcrumb pageName="Subida de Imagenes" />
            <div className="mb-8 flex items-center justify-end gap-8">
                <button
                    className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                    type="button"
                    title='Agregar'
                    onClick={openModal}
                >
                    Agregar &nbsp;
                    <FontAwesomeIcon icon={faSave} style={{ marginTop: '5px' }} />
                </button>
            </div>
            <div className="mt-5">
                {
                    loading ? (
                        <LoadComponent />
                    ) : (
                        <div className="ag-theme-quartz" style={{ height: 400 }}>
                            <AgGridReact
                                columnDefs={columnDefs}
                                rowData={[]}
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
                    )
                }
            </div>

            <Modal
                isOpen={isModalOpen}
                title="Subir Imagen"
                content={<UploadImageForm closeModal={closeModal}  />}
                onClose={closeModal}
            />
        </>
    )
}

export default ServicesOrderUploadImage