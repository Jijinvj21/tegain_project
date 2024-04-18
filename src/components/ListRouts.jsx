import { useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";
import { useEffect, useState } from "react";

function ListRoutes() {
  const navigate = useNavigate();
  const [provious, setPrevious] = useState(null);
  useEffect(() => {
    const lastVisitedPath = localStorage.getItem("lastVisitedPath");
    console.log("Last visited path:", lastVisitedPath);
    setPrevious(lastVisitedPath);
      localStorage.removeItem('lastVisitedPath');
  },[]);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Routes</h1>
      <ul>
        {routes.map((data, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(`${data.path}`)}
              style={{ color: provious === `${data.page}` ? "red" : "white" }}
            >
              {data.page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListRoutes;
