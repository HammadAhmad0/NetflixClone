import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Pass the event handler function to remove the listener
        };
    }, []);

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="NETFLIX"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="AVATAR"
            />
        </div>
    );
}

export default Navbar;
