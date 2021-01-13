import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../Constants/routes.js";

const Navigation = () => (
    <div>
        <header className="nav-header">
            <ul className="nav-list-container">
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.NEW_LIST}>New List</Link>
                </li>
                <li>
                    <Link to={ROUTES.OVERVIEW}>Overview</Link>
                </li>
            </ul>
        </header>
        <div className="form-container"></div>
    </div>
);
export default Navigation;
