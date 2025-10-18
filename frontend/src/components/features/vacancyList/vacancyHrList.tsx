import { VacancyHrTable } from "./vacancyHrTable"
import { VacancyFilters } from "./vacancyFilters"

export const VacancyHrList = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-4xl mb-4 text-medium">Мои вакансии</p>
      <input 
        className="rounded-lg border-gray-300 border h-10 outline-none hover:bg-gray-50 focus:border-rose-700 p-4"
        placeholder="Введите название компании или должности"
      />
      <div className="flex gap-4 flex-col">
        <VacancyFilters />
        <div className="flex flex-col gap-4">
          <VacancyHrTable />
        </div>
      </div>
    </div>
  )
}