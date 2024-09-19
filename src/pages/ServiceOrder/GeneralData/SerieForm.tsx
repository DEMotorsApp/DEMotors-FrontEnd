import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCancel } from '@fortawesome/free-solid-svg-icons';
import { EquipmentSerieModel } from '../../../models/equipmentSerieModel';
import { createEquipmentSerie } from '../../../services/equipmentSerieService/equipmentSerieService';
import { toast } from 'react-toastify';
import LoadComponent from '../../../components/Load/LoadComponent';

const SerieForm = ({ onNewSerie, closeModal }: { onNewSerie: (newSerie: EquipmentSerieModel) => void, closeModal: () => void }) => {
    const [serieName, setSerieName] = useState<string>('');
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!serieName.trim()) {
            setIsTouched(true);
            return;
        }

        const newSerie: EquipmentSerieModel = {
            ID_SERIE: 0,
            DESCRIPTION_SERIE: serieName
        };

        setLoading(true); 

        try {
            await createEquipmentSerie(newSerie);
            setLoading(false);
            onNewSerie(newSerie);
            setSerieName('');
            closeModal();
        } catch (err) {
            setLoading(false);
            if (err instanceof Error) {
                toast.error(`Error: ${err.message}`);
            } else {
                toast.error('Error desconocido al crear la serie de equipo.');
            }
        }
    };

    if (loading) {
        return <LoadComponent />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    Serie <span className="text-meta-1">*</span>
                </label>
                <input
                    type="text"
                    value={serieName}
                    onChange={(e) => {
                        setSerieName(e.target.value);
                        setIsTouched(false);
                    }}
                    onBlur={() => setIsTouched(true)}
                    placeholder="Nombre Serie"
                    className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${isTouched && !serieName.trim() ? 'border-red-500' : ''}`}
                    required
                />
                {isTouched && !serieName.trim() && (
                    <p className="text-red-500 mt-1">El nombre de la serie es obligatorio.</p>
                )}
            </div>
            <div className="flex justify-end gap-4.5">
                <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="button"
                    onClick={() => {
                        setSerieName('');
                        closeModal();
                    }}
                >
                    Cancelar  
                    <FontAwesomeIcon icon={faCancel} style={{ marginTop: '5px' }} />
                </button>
                <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                >
                    Guardar  
                    <FontAwesomeIcon icon={faFileAlt} style={{ marginTop: '5px' }} />
                </button>
            </div>
        </form>
    );
};

export default SerieForm;
