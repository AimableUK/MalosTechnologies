import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "MalosFlix";

    if (location.pathname === "/") {
      title = "Malos Technologies";
    } else if (location.pathname === "/contact") {
      title = "Contact Us";
    } else if (location.pathname === "/projects") {
      title = "Projects We Build";
    } else if (location.pathname === "/aboutus") {
      title = "About Us";
    } else if (location.pathname === "/services") {
      title = "Our Services";
    } else if (location.pathname === "/blog") {
      title = "Tech Trends";
    } else {
      title = "404 Page Not Found";
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
