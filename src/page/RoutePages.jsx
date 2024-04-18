import { useEffect } from "react";

function RoutePages({ page }) {
  useEffect(() => {
    localStorage.setItem("lastVisitedPath", page);
  });
  return <h1>{page}</h1>;
}

export default RoutePages;
