import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${title}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
