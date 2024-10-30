import apiClient from '../api'
import { ServicesOrderModel } from '../../models/serviceOrderModel'

const complementURL = 'services-order'

interface CreateServicesOrderResponse {
    response: {
        status: string;
        message: string;
        lastId: number;
    }
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