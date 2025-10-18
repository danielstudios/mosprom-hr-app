import { useParams } from 'react-router';
import { mockFullVacancies } from "@/data/mockFullVacancyList";
import { ApplicantsForm } from './applicantsForm';

export const FullVacancy = () => {
  const { slug } = useParams();
  const vacancy = mockFullVacancies.find(item => item.id === slug);

  return (
    <div className='flex w-full items-center flex-col gap-6'>
      <div className="px-6 py-8 rounded-lg border border-gray-300 xl:w-1/3 flex flex-col gap-8">
        <p className="text-rose-700 text-2xl font-medium">{vacancy?.vacancyName}</p>
        <div className='flex justify-between'>
          <p className='text-xl font-medium'>Обязанности</p>
          <ul className='ml-4 text-lg w-2/3'>
            {vacancy?.responsibilities.map(el => <li
              className=''
            >{`• ${el}`}</li>)}
          </ul>
        </div>
        <div className='flex justify-between'>
          <p className='text-xl font-medium'>Требования</p>
          <ul className='ml-4 text-lg w-2/3'>
            {vacancy?.requirements.map(el => <li
              className=''
            >{`• ${el}`}</li>)}
          </ul>
        </div>
        <div className='flex justify-between'>
          <p className='text-xl font-medium'>Условия</p>
          <ul className='ml-4 text-lg w-2/3'>
            {vacancy?.conditions.map(el => <li
              className=''
            >{`• ${el}`}</li>)}
          </ul>
        </div>
      </div>
      <ApplicantsForm />
    </div>
  )
};