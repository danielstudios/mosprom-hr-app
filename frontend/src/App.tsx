import { Routes, Route } from "react-router"
import { VacancyListPage } from "@pages/VacancyListPage";
import { VacancyPage } from "@pages/VacancyPage";
import { Layout } from "@pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<VacancyListPage />} />
        <Route path="vacancy/:slug" element={<VacancyPage />} />
      </Route>
    </Routes>
  )
}

export default App
