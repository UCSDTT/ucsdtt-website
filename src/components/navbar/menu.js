import React, { useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import "../../style/menu.css";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ show, onClose }) => {
  // disable scrolling
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="menu">
      <AiOutlineClose id="closeMenu" onClick={onClose} />

      <div className="linkContainer">
        <Link to="/" onClick={onClose}>
          HOME
        </Link>
        <div className="line"></div>
        <Link to="/about" onClick={onClose}>
          ABOUT US
        </Link>
        <div className="line"></div>

        <Link to="/rush" onClick={onClose}>
          RUSH
        </Link>
        <div className="line"></div>

        <Link to="/brothers" onClick={onClose}>
          BROTHERS
        </Link>
        <div className="line"></div>

        <Link to="/gallery" onClick={onClose}>
          GALLERY
        </Link>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Menu;
