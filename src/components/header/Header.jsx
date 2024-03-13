import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header(props) {
  let title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt={title} className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}
