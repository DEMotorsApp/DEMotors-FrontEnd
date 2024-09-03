import apiClient from '../api';
import { Question } from '../../models/questioModel';

const complementURL = 'survey-question'

interface QuestionResponse {
    response: Question[];
}

export const getQuestions = async (): Promise<Question[]> => 
{
    try 
    {
        const response = await apiClient.get<QuestionResponse>(`${complementURL}/getAllQuestion`);
        return response.data.response;
    } 
    catch (error) 
    {
        console.error('Error al obtener las preguntas:', error);
        throw new Error('No se pudieron obtener las preguntas. Por favor, intenta de nuevo más tarde.');
    }
};