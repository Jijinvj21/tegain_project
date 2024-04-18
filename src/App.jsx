import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import "./App.css";
import ListRoutes from "./components//ListRouts";
import RoutePages from "./page/RoutePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ListRoutes />} />
        {routes.map((data, index) => (
          <Route
            key={index}
            path={`/${data.path}`}
            element={<RoutePages page={data.page} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
