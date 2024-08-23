import DatePickerOne from '../../../components/Forms/DatePicker/DatePickerOne';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AddressForm from './AddresForm';
import Modal from '../../../components/Modal/ModalComponent';

const ServiceForm = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          <FontAwesomeIcon icon={faGear} /> &nbsp; Datos del Servicio
        </h3>
      </div>
      <form action="#">
        <div className="p-6.5">
          <div className="mb-4.5">
            {/* <label className="mb-2.5 block text-black dark:text-white">
              Cliente <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Nombre del Cliente"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            /> */}

<div>
      <label
        htmlFor="checkboxLabelOne"
        className="flex cursor-pointer select-none items-center mb-2.5 block text-black dark:text-white"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelOne"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
            ></span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>

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

export default ServiceForm;
