import { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input placeholder="Entrez votre mail" />
    </footer>
  );
}

export default Footer;
