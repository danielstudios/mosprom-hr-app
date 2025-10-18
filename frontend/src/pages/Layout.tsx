import { Link, Outlet } from "react-router";
import { useDrawer } from "@components/ui/drawer";
import { LeftMenu } from "@components/features/leftMenu/leftMenu";
import { BurgerMenuIcon } from "@assets/icons/burgerMenuIcon";

export const Layout = () => {
  const { isOpen, open, close } = useDrawer();

  return (
    <>
    <div>
      <header className="flex h-14 shadow-md items-center p-8 gap-4 fixed w-full bg-white top-0">
        <button 
          className="hover:bg-gray-50 size-12 flex justify-center items-center rounded-full active:bg-gray-100" title="Открыть меню"
          onClick={open}
        >
          <BurgerMenuIcon className="fill-gray-400" size={32}/>
        </button>
        <Link className="text-xl font-medium text-rose-700" to="/">Техноработа</Link>
        <Link className="ml-auto text-xl text-rose-700 hover:bg-gray-50 p-2 rounded-lg active:bg-gray-100" to='/profile'>Личный кабинет</Link>
      </header>
      <main className="z-50 mt-16">
        <Outlet />
      </main>
    </div>
    <LeftMenu isOpen={isOpen} close={close} />
    </>
  );
};