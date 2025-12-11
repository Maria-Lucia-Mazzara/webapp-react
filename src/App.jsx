
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "./Layout/ProjectLayout";
import HomePage from "./pages/HomePage";
import DetailFilm from "./pages/DetailFilm";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<ProjectLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<DetailFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;