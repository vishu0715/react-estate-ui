import { useState } from "react";
import "./navbar.scss";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <div className="left">
                <a href="/">
                    <img src="/logo.png" alt="" />
                    <span>EstateLogo</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign In</a>
                <a className="register" href="/">Sign Up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setMenuOpen((prev) => !prev)} />
                </div>
            <div className={menuOpen ? "menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign In</a>
                <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar