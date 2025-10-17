import { Link } from "react-router"
import type { TVacancyListItemProps } from "./vacancyList.types"

export const VacancyListItem = ({
  id,
  vacancyName,
  companyName,
  professionType,
}: TVacancyListItemProps) => {
  return (
    <Link to={`/vacancy/${id}`} className="p-4 rounded-lg border border-gray-300 hover:bg-gray-100 active:bg-gray-200">
      <p className="text-rose-700 text-xl font-medium">{vacancyName}</p>
      <p className="mb-4 text-base">{companyName}</p>
      <p className="font-light text-sm">{professionType}</p>
    </Link>
  )
}