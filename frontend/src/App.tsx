import { Routes, Route } from "react-router"
import { Vacancies } from "@pages/Vacancies";
import { Layout } from "@pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Vacancies />} />
      </Route>
    </Routes>
  )
}

export default App
