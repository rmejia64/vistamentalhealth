import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useDynamicTitles() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Vista Mental Health | Home",
      "/Team": "Vista Mental Health | Meet Our Team",
      "/Services": "Vista Mental Health | Services",
      "/Resources": "Vista Mental Health | Resources",
      "/Contact": "Vista Mental Health | Contact Us",
      "/Blog": "Vista Mental Health | Blog",
      "/Privacy": "Vista Mental Health | Privacy",
    };

    const title = pageTitles[location.pathname] || "Vista Mental Health";
    document.title = title;
  }, [location]);
}

export default useDynamicTitles;
