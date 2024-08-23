import DatePickerOne from '../../../components/Forms/DatePicker/DatePickerOne';
import { faAddressCard, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AddressForm from './AddresForm';
import Modal from '../../../components/Modal/ModalComponent';

const CustomerForm = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          <FontAwesomeIcon icon={faAddressCard} /> &nbsp; Datos del Cliente
        </h3>
      </div>
      <form action="#">
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Cliente <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Nombre del Cliente"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Atención A <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Atención a"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Correo Electrónico <span className="text-meta-1">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">


            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Dirección <span className="text-meta-1">*</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Dirección Cliente"
                  className="flex-grow rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition"
                  aria-label="Agregar Dirección"
                  title="Agregar Dirección"
                  onClick={openModal}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </div>


            <div className="w-full xl:w-1/2">
              <DatePickerOne />
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                Teléfonos <span className="text-meta-1">*</span>
              </label>
              <input
                type="tel"
                placeholder="Teléfono del Cliente"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-2.5 block text-black dark:text-white">
                NIT <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="NIT del Cliente"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          {/* <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button> */}
        </div>
      </form>
      <Modal
                isOpen={isModalOpen}
                title="Ingrese la Ubicación"
                content={<AddressForm/>}
                onClose={closeModal}
            />
    </div>

    
  );

  
};

export default CustomerForm;
