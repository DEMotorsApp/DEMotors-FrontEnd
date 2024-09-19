import { useDispatch, useSelector } from 'react-redux';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState, AppDispatch } from '../../../redux/store';
import { setAnswer } from '../../../redux/slices/serviceFormSlice';
import { useState, useEffect } from 'react';
import { getQuestions } from '../../../services/questionService/questionService';
import { Question } from '../../../models/questioModel';
import LoadComponent from '../../../components/Load/LoadComponent';

const ServiceForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const answers = useSelector((state: RootState) => state.serviceForm.answers);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const result = await getQuestions();
        setQuestions(result);
      } catch (error) {
        console.error('Error al obtener preguntas:', error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, 1000);
      }
    };
    fetchQuestions();
  }, []);

  const handleRadioChange = (questionId: number, questionString: string, answer: string) => {
    dispatch(setAnswer({ questionId, questionString, answer }));
  };

  if (loading || !showContent) return <LoadComponent />;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          <FontAwesomeIcon icon={faPencilRuler} /> &nbsp; Constancia de Entrega
        </h3>
      </div>
      <form action="#">
        <div className="p-6.5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {questions.map((question) => (
            <div key={question.id_question} className="question-item">
              <p className="mb-2 text-black dark:text-white">{question.question}</p>
              <div className="flex space-x-4">
                <label
                  htmlFor={`radioYes-${question.id_question}`}
                  className="flex cursor-pointer select-none items-center text-black dark:text-white"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      id={`radioYes-${question.id_question}`}
                      name={`yesNoGroup-${question.id_question}`}
                      value="Yes"
                      checked={answers[question.id_question]?.answer === 'Yes'}
                      className="sr-only"
                      onChange={() => handleRadioChange(question.id_question, question.question, 'Yes')}
                    />
                    <div
                      className={`mr-2 flex h-5 w-5 items-center justify-center rounded-full border ${
                        answers[question.id_question]?.answer === 'Yes'
                          ? 'border-primary bg-gray dark:bg-transparent'
                          : ''
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          answers[question.id_question]?.answer === 'Yes' ? 'bg-primary' : ''
                        }`}
                      ></span>
                    </div>
                  </div>
                  Sí
                </label>

                <label
                  htmlFor={`radioNo-${question.id_question}`}
                  className="flex cursor-pointer select-none items-center text-black dark:text-white"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      id={`radioNo-${question.id_question}`}
                      name={`yesNoGroup-${question.id_question}`}
                      value="No"
                      checked={answers[question.id_question]?.answer === 'No'}
                      className="sr-only"
                      onChange={() => handleRadioChange(question.id_question, question.question, 'No')}
                    />
                    <div
                      className={`mr-2 flex h-5 w-5 items-center justify-center rounded-full border ${
                        answers[question.id_question]?.answer === 'No'
                          ? 'border-primary bg-gray dark:bg-transparent'
                          : ''
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          answers[question.id_question]?.answer === 'No' ? 'bg-primary' : ''
                        }`}
                      ></span>
                    </div>
                  </div>
                  No
                </label>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;
