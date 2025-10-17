import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <header className="flex h-14 shadow-md">
        <nav>Навигация</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};