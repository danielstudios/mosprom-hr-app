import { Routes, Route } from "react-router"
import { VacancyListPage } from "@pages/VacancyListPage";
import { VacancyPage } from "@pages/VacancyPage";
import { VacancyHrListPage } from '@pages/VacancyHrListPage'
import { Layout } from "@pages/Layout";
import { LoginPage } from "@pages/LoginPage";
import { ProfilePage } from "@pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<VacancyListPage />} />
        <Route path="vacancy/:slug" element={<VacancyPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="myvacancy" element={<VacancyHrListPage />} />
      </Route>
    </Routes>
  )
}

export default App
