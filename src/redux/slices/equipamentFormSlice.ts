import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EquipamentFormState {
    motor: string;
    marca: string;
    modelo: string;
    segundoModelo: string;
    idSerie: number;
    serie: string;
    especificaciones: string;
    segundaEspecificacion: string;
}

const initialState: EquipamentFormState = {
    motor: '',
    marca: '',
    modelo: '',
    segundoModelo: '',
    idSerie: 0,
    serie: '',
    especificaciones: '',
    segundaEspecificacion: ''
};

const equipamentFormSlice = createSlice({
    name: 'equipamentForm',
    initialState,
    reducers: {
        setMotor(state, action: PayloadAction<string>) {
            state.motor = action.payload;
        },
        setMarca(state, action: PayloadAction<string>) {
            state.marca = action.payload;
        },
        setModelo(state, action: PayloadAction<string>) {
            state.modelo = action.payload;
        },
        setSegundoModelo(state, action: PayloadAction<string>){
            state.segundoModelo = action.payload
        },
        setIdSerie(state, action: PayloadAction<number>) {
            state.idSerie = action.payload;
        },
        setSerie(state, action: PayloadAction<string>) {
            state.serie = action.payload;
        },
        setEspecificaciones(state, action: PayloadAction<string>) {
            state.especificaciones = action.payload;
        },
        setSegundaEspecificacion(state, action: PayloadAction<string>) {
            state.segundaEspecificacion = action.payload;
        }
    }
});

export const { setMotor, setMarca, setModelo, setSegundoModelo, setIdSerie, setSerie, setEspecificaciones, setSegundaEspecificacion } = equipamentFormSlice.actions;

export default equipamentFormSlice.reducer;
