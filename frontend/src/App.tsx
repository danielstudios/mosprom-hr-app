import { Routes, Route } from "react-router"
import { Vacancies } from "@pages/Vacancies";

function App() {

  return (
    <Routes>
      <Route index element={<Vacancies />} />
    </Routes>
  )
}

export default App
