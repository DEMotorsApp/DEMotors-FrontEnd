import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ServicesOrderModel } from "../models/serviceOrderModel"
import { createClientServiceOrder, createServiceOrder, validateServiceOrder, deleteClientServices } from "../services/servicesOrderService/servicesOrderService"
import { toast } from "react-toastify"
import { ClientModel } from "../models/clientModel"
import { createClient } from "../services/clientService/clientService"
import { EquipmentModel } from "../models/equipmentModel"
import { createEquipment } from "../services/equipmentService/equipmentService"
import { ClientServicesModel } from "../models/clientServicesModel"
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"


const servicesOrderRequest = () => {
    const MySwal = withReactContent(Swal)

    const { servicesOrderForm, customerForm, equipamentForm } = useSelector((state: RootState) => state)

    const { attentionTo, serviceOrder } = servicesOrderForm

    const getValidateServicesOrder = async (serviceOrder: string) => {
        const responseApi = await validateServiceOrder(serviceOrder)
        const { response } = responseApi
        const { VALIDATE_SERVICES } = response[0]
        return VALIDATE_SERVICES
    }

    const postServiceOrder = async (correlative: string) => {
        const newService: ServicesOrderModel = {
            ATTETION_TO: attentionTo,
            NO_ORDER: correlative,
            USER_CREATED: ''
        }
        console.log(newService)
        const responseApi = await createServiceOrder(newService)
        const { response } = responseApi
        const { message } = response
        toast.success(message, {
            autoClose: 3000,
            className: 'dark:bg-boxdark dark:text-white'
        })
    }

    const postClient = async () => {
        const { name, email, address, date, phone, nit, id } = customerForm
        const newClient: ClientModel = {
            ID_CLIENT: id,
            FULL_NAME: name,
            EMAIL: email,
            ADDRESS_CLIENT: address,
            ENTRY_DATE: date,
            PHONE_NUMBER: phone,
            NIT: nit
        }
        const responseApi = await createClient(newClient)
        const { response } = responseApi
        const { message } = response
        toast.success(message, {
            autoClose: 3000,
            className: "dark:bg-boxdark dark:text-white"
        })
    }

    const postClientServices = async (servicesOrder: string, idClient: number) => {
        const newClientServices: ClientServicesModel = {
            SERVICES_ORDER: servicesOrder,
            ID_CLIENT: idClient
        }
        const responseApi = await createClientServiceOrder(newClientServices)
        const { response } = responseApi
        const { message } = response
        toast.success(message, {
            autoClose: 3000,
            className: 'dark:bg-boxdark dark:text-white'
        })
    }

    const postEquipment = async () => {
        const { motor, marca, modelo, segundoModelo, idSerie, serie, especificaciones, segundaEspecificacion } = equipamentForm
        const newEquipment: EquipmentModel = {
            ENGINE: motor,
            TRADEMARK: marca,
            MODEL_1: modelo,
            MODEL_2: segundoModelo,
            ID_SERIE: idSerie,
            EQUIPMENT_SERIE: serie,
            DESCRIPTION: especificaciones,
            DESCRIPTION_2: segundaEspecificacion,
            SERVICES_ORDER: serviceOrder
        }
        let responseApi = await createEquipment(newEquipment)
        const { response } = responseApi
        const { message } = response
        toast.success(message, {
            autoClose: 3000,
            className: "dark:bg-boxdark dark:text-white"
        })
    }

    const deleteClientServicesHooks = async (servicesOrder: string, idClient: number) => {
        const responseApi = await deleteClientServices(servicesOrder, idClient)
        const { response } = responseApi
        const { message } = response
        toast.success(message, {
            autoClose: 3000,
            className: "dark:bg-boxdark dark:text-white"
        })
        /* MySwal.fire({
            title: '¿Desea eliminar este registro?',
            text: 'Recuerde que esta accion ya no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'Si, deseo eliminarlo'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const responseApi = await deleteClientServices(servicesOrder, idClient)
                const { response } = responseApi
                const { message } = response
                toast.success(message, {
                    autoClose: 3000,
                    className: "dark:bg-boxdark dark:text-white"
                })
            }
        }) */
    }

    return { postServiceOrder, postClient, postEquipment, getValidateServicesOrder, postClientServices, deleteClientServicesHooks }
}

export default servicesOrderRequest