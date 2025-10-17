import { VacancyListItem } from "./vacancyListItem";
import { mockVacancies } from "@/data/mockVacanciesList";

export const VacancyList = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl">Все вакансии</p>
      {mockVacancies.map(({id, companyName, vacancyName, professionType}) => 
        <VacancyListItem
          key={id}
          id={id}
          companyName={companyName}
          vacancyName={vacancyName}
          professionType={professionType}
        />
      )}
    </div>
  )
}