
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "./Layout/ProjectLayout";
import HomePage from "./pages/HomePage";
import DetailFilm from "./pages/DetailFilm";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProjectLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie/:id' element={<DetailFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  );
}

export default App;