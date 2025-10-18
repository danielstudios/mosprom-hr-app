import { NavLink } from "react-router";
import { HrVacanciesIcon } from "@assets/icons/hrVacanciesIcon";
import { BankResumeIcon } from "@assets/icons/bankResumeIcon";

export const HrNavItems = ({ close }: { close: () => void }) => {
  return (
    <>
      <li>
          <NavLink
            onClick={close}
            className={({ isActive }) => 
              `${isActive ? 'bg-gray-100 cursor-default' : 'hover:bg-gray-50'} flex items-center p-3 rounded-lg gap-2 text-xl`
            }
            to="/myvacancy"
          >
            <HrVacanciesIcon className={'fill-gray-400'} size={28}/>Мои вакансии
          </NavLink>
      </li>
      <li>
          <NavLink 
            onClick={close}
            className={({ isActive }) => 
              `${isActive ? 'bg-gray-100 cursor-default' : 'hover:bg-gray-50'} flex items-center p-3 rounded-lg gap-2 text-xl`
            }
            to="/resumebank"
          >
            <BankResumeIcon className={'fill-gray-400'} size={28}/>Банк резюме
          </NavLink>
      </li>
    </>
  )
}