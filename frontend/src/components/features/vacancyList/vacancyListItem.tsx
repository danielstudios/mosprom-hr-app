import { Link, useMatch } from "react-router"
import type { TVacancyListItemProps } from "./vacancyList-types"
import { statuses } from "./vacancyList-const"

export const VacancyListItem = ({
  id,
  vacancyName,
  companyName,
  professionType,
  status
}: TVacancyListItemProps) => {
  const hrMode = useMatch('/myvacancy');

  const statusClasses = {
    active: 'bg-green-50 text-green-700',
    pending: 'bg-blue-50 text-blue-700',
    hidden: 'bg-gray-50 text-gray-700',
    decline: 'bg-red-50 text-red-700',
  }

  return (
    <Link to={`/vacancy/${id}`} className="px-4 py-6 rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100">
      <p className="text-rose-700 text-xl font-medium">{vacancyName}</p>
      {hrMode && <p className={`rounded-lg py-1 px-2 my-1 inline-block ${statusClasses[status]}`}>{statuses[status]}</p>}
      {!hrMode && <p className="text-base">{companyName}</p>}
      <p className="font-light text-sm mt-4">{professionType}</p>
    </Link>
  )
}