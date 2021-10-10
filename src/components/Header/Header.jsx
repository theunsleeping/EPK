import React from "react";
import logo from "../../assets/1.png"
import { Nav } from "../Nav/Nav";
import "./Header.scss"

export const Header = () => (
    <div className="Header">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <Nav />
    </div>
)