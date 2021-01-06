import React from "react";

import "./HomePage.scss";
import MenuItem from "../../components/menu-item/menu-item";
import Directory from "../../components/directory/directory";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;