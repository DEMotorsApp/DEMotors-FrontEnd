import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCancel } from '@fortawesome/free-solid-svg-icons';

const SerieForm = () => {
    return (
        <form action="#">
            <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                    Serie <span className="text-meta-1">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Nombre Serie"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
            </div>
            <div className="flex justify-end gap-4.5">
                <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit"
                >

                    Cancelar &nbsp;
                    <FontAwesomeIcon icon={faCancel} style={{ marginTop: '5px' }} />                    </button>
                <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                >
                    Guardar &nbsp;
                    <FontAwesomeIcon icon={faFileAlt} style={{ marginTop: '5px' }} />

                </button>
            </div>
        </form>
    );
};

export default SerieForm;
