import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Insertarticles from "./components/articles/Insertarticles";
import Editarticles from "./components/articles/Editarticles";
import Viewarticles from "./components/articles/Viewarticles";

import Listcategories from "./components/categories/Listcategories";
import Insertcategories from "./components/categories/Insertcategories";
import Editcategories from "./components/categories/Editcategories";
import Viewcategories from "./components/categories/Viewcategories";

import Insertscategories from "./components/scategories/Insertscategories";
import Editscategories from "./components/scategories/Editscategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Listscategories from "./components/scategories/listscategories";
import Menu from "./components/shares/Menu";

function App() {
  return (
    <>
      <div>
        <Router>
          <Menu />
          <Routes>
            <Route path="/articles" element={<Listarticles />}></Route>
            <Route path="/articles/add" element={<Insertarticles />}></Route>
            <Route path="/articles/edit/:id" element={<Editarticles />}></Route>
            <Route path="/articles/view/:id" element={<Viewarticles />}></Route>

            <Route path="/categories" element={<Listcategories />}></Route>
            <Route
              path="/categories/add"
              element={<Insertcategories />}
            ></Route>
            <Route
              path="/categories/edit/:id"
              element={<Editcategories />}
            ></Route>
            <Route
              path="/categories/view/:id"
              element={<Viewcategories />}
            ></Route>

            <Route path="/scategories" element={<Listscategories />}></Route>
            <Route
              path="/scategories/add"
              element={<Insertscategories />}
            ></Route>
            <Route
              path="/scategories/edit/:id"
              element={<Editscategories />}
            ></Route>
            <Route
              path="/scategories/view/:id"
              element={<Viewscategories />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
