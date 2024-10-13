import apiClient from "../api"
import { ClientModel } from "../../models/clientModel"

const complementURL = 'client'

interface CreateClientResponse {
    response: {
        status: string;
        message: string;
        lastId: number;
    }
}

export const createClient = async (client: ClientModel): Promise<CreateClientResponse> => {
    try {
        const responseApi = await apiClient.post<CreateClientResponse>(`${complementURL}/createClient`, client)
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