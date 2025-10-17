import { Outlet } from "react-router";
import { Drawer, useDrawer } from "@components/ui/drawer";
import { BurgerMenuIcon } from "@assets/icons/burgerMenuIcon";

export const Layout = () => {
  const { isOpen, open, close } = useDrawer();

  return (
    <div>
      <header className="flex h-14 shadow-md items-center p-8">
        <button 
          className="hover:bg-gray-100 size-12 flex justify-center items-center rounded-full active:bg-gray-200" title="Открыть меню"
          onClick={open}
        >
          <BurgerMenuIcon className="fill-gray-500" size={32}/>
        </button>
      </header>
      <main>
        <Outlet />
        <Drawer
          isOpen={isOpen}
          onClose={close}
          title="Basic Drawer"
          position="left"
        >
          <div className="p-4">
            <p>This is a basic drawer content.</p>
          </div>
        </Drawer>
      </main>
    </div>
  );
};