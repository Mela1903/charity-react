import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <span>Copyright by Coders Lab</span>
            <div
                className="footer-media"
            >
                <Link to="#">
                    <img src={require("../assets/Facebook.svg").default} alt="Facebook"/>
                </Link>

                <Link to="#">
                    <img src={require("../assets/Instagram.svg").default} alt="Instagram"/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;