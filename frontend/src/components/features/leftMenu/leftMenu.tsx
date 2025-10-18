import { NavLink } from "react-router";
import { Drawer } from "@components/ui/drawer";
import { AllVacanciesIcon } from "@/assets/icons/allVacanciesIcon";
import { HrNavItems } from "./hrNavItems";

export const LeftMenu = ({ isOpen, close }: { isOpen: boolean, close: () => void }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={close}
      title="Меню"
      position="left"
    >
      <ul className="p-6 flex flex-col">
        <li>
          <NavLink 
            className={({ isActive }) => 
              `${isActive ? 'bg-gray-100 cursor-default' : 'hover:bg-gray-50'} flex p-3 items-center rounded-lg gap-2 text-xl`
            }
            to="/"
            onClick={close}
          >
            <AllVacanciesIcon className={'fill-gray-400'} size={28}/>Все вакансии
          </NavLink>
        </li>
        <HrNavItems close={close} />
      </ul>
    </Drawer>
  )
}