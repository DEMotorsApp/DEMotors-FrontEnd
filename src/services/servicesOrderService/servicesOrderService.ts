import apiClient from '../api'
import { ServicesOrderModel } from '../../models/serviceOrderModel'
import { ClientServicesModel } from '../../models/clientServicesModel';
import { ClientModel } from '../../models/clientModel';

const complementURL = 'services-order'

interface CreateServicesOrderResponse {
    response: {
        status: string;
        message: string;
        lastId: number;
    }
}

interface ClientsServiceResponse {
    response: ClientModel[]
}

interface ValidateServicesOrderResponse {
    response: [
        {
            VALIDATE_SERVICES: number;
        }
    ]
}

export const createServiceOrder = async (servicesOrder: ServicesOrderModel): Promise<CreateServicesOrderResponse> => {
    try {
        const responseApi = await apiClient.post<CreateServicesOrderResponse>(`${complementURL}/createServicesOrders`, servicesOrder)
        const { data: response } = responseApi
        return response
    } catch (error) {
        return {
            response: {
                status: 'ERROR',
                message: 'Error al intentar comunicarse con la API',
                lastId: 0
            }
        }
    }
}

export const getClientServices = async (servicesOrder: string): Promise<ClientModel[]> => {
    try {
        const response = await apiClient.get<ClientsServiceResponse>(`${complementURL}/getClientServicesOrder/${servicesOrder}`)
        return response.data.response
    } catch (error) {
        console.error('Error al obtener los Clientes:', error);
        throw new Error('No se pudieron obtener los Clientes. Por favor, intenta de nuevo más tarde.');
    }
}

export const createClientServiceOrder = async (servicesOrder: ClientServicesModel): Promise<CreateServicesOrderResponse> => {
    try {
        const responseApi = await apiClient.post<CreateServicesOrderResponse>(`${complementURL}/createClientServicesOrder`, servicesOrder)
        const { data: response } = responseApi
        return response
    } catch (error) {
        return {
            response: {
                status: 'ERROR',
                message: 'Error al intentar comunicarse con la API',
                lastId: 0
            }
        }
    }
}

export const deleteClientServices = async (servicesOrder: string, idClient: number): Promise<CreateServicesOrderResponse> => {
    try {
        const responseApi = await apiClient.delete<CreateServicesOrderResponse>(`${complementURL}/deleteClientServices/${servicesOrder}/${idClient}`)
        const { data: response } = responseApi
        return response
    } catch (error) {
        return {
            response: {
                status: 'ERROR',
                message: 'Error al intentar comunicarse con la API',
                lastId: 0
            }
        }
    }
}

export const validateServiceOrder = async (servicesOrder: string): Promise<ValidateServicesOrderResponse> => {
    try {
        const responseApi = await apiClient.get<ValidateServicesOrderResponse>(`${complementURL}/validateServicesOrder/${servicesOrder}`)
        return responseApi.data
    } catch (error) {
        return {
            response: [
                {
                    VALIDATE_SERVICES: 0
                }
            ]
        }
    }
}