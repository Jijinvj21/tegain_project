import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RoutePages({ page }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("lastVisitedPath", page);
  });
  return (
    <div>
      <h1>{page}</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default RoutePages;
