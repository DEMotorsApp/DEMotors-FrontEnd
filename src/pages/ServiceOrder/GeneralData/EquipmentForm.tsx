import { useState } from 'react';
import { faGears, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectSerie from '../../../components/Forms/SelectGroup/SelectSerie';
import Modal from '../../../components/Modal/ModalComponent'; 
import SerieForm from './SerieForm';

const EquipamentForm = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    <FontAwesomeIcon icon={faGears} /> &nbsp; Datos del Equipo
                </h3>
            </div>
            <form action="#">
                <div className="p-6.5">
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Motor <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Motor del Equipo"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Marca <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Marca del Equipo"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Modelo <span className="text-meta-1">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Modelo del Equipo"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Modelo
                            </label>
                            <input
                                type="text"
                                placeholder="Modelo del Equipo"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2 flex items-end">
                            <SelectSerie />
                            <button
                                type="button"
                                className="ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition relative"
                                aria-label="Agregar Serie"
                                title='Agregar Serie'
                                onClick={openModal}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Serie
                            </label>
                            <input
                                type="text"
                                placeholder="Serie del Equipo"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Especificaciones
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Especificaciones del Equipo"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Especificaciones
                                </label>
                                <textarea
                                    rows={6}
                                    placeholder="Especificaciones del Equipo"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    {/* <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                      Send Message
                    </button> */}
                </div>
            </form>

            <Modal
                isOpen={isModalOpen}
                title="Agregar Serie"
                content={<SerieForm/>}
                onClose={closeModal}
            />
        </div>
    );
};

export default EquipamentForm;
