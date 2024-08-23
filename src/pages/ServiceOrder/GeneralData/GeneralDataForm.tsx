import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import serviceOrderForm from '../../../hooks/serviceOrderForm';
import CustomerForm from './CustomerForm';
import EquipmentForm from './EquipmentForm';
import ImageUploader from '../ImageUploader/ImageUploader';
import ServiceForm from './ServiceForm';
import SignatureForm from './SignatureForm';

const GeneralDataForm = () => {
  const { step, nextStep, previousStep, isFirstStep, isLastStep } = serviceOrderForm(1, 4);

  return (
    <>
      <Breadcrumb pageName="Datos Generales" />
      <div className="flex justify-end gap-4.5 mb-5">
        {!isFirstStep && (
          <button
            className="flex justify-center rounded bg-gray-600 py-2 px-6 font-medium text-white hover:bg-gray-500"
            onClick={previousStep}
          >
            Atrás &nbsp;
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginTop: '5px' }} />
          </button>
        )}
        {!isLastStep && (
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
            onClick={nextStep}
            type="button"
          >
            Continuar &nbsp;
            <FontAwesomeIcon icon={faArrowRight} style={{ marginTop: '5px' }} />
          </button>
        )}
      </div>

      {step === 1 && <CustomerForm />}
      {step === 2 && <EquipmentForm />}
      {step === 3 && <ServiceForm />}
      {step === 4 && <SignatureForm />}
      {step === 5 && <ImageUploader />}
    </>
  );
};

export default GeneralDataForm;
