import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {
    return (
        <div>
            <TopBar />
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart" >Cart</Link>
        </div>
    )
}

export default Header