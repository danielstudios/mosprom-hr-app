import { mockVacancies } from "@/data/mockVacanciesList"
import { VacancyListItem } from "./vacancyListItem"
import { VacancyFilters } from "./vacancyFilters"

export const VacancyList = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-4xl mb-4 text-medium">Вакансии и стажировки</p>
      <input 
        className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4"
        placeholder="Введите название компании или должности"
      />
      <div className="flex gap-4">
        <VacancyFilters />
        <div className="flex flex-col gap-4">
          {mockVacancies.map(({id, companyName, vacancyName, professionType }) => 
            <VacancyListItem
              key={id}
              id={id}
              companyName={companyName}
              vacancyName={vacancyName}
              professionType={professionType}
            />
          )}
        </div>
      </div>
    </div>
  )
}