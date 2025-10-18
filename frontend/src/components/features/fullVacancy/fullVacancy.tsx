import { useParams } from 'react-router';
import { mockFullVacancies } from "@/data/mockFullVacancyList";

export const FullVacancy = () => {
  const { slug } = useParams();
  const vacancy = mockFullVacancies.find(item => item.id === slug);

  return (
    <div className="p-4 rounded-lg border border-gray-300">
      <p className="text-rose-700 text-2xl font-medium">{vacancy?.vacancyName}</p>
      
    </div>
  )
};