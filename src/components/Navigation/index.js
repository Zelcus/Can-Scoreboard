import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {(authUser) =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);
const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.SPOOKTOBER}>Spooktober</Link>
        </li>
        <li>
            <SignOutButton />
        </li>
    </ul>
);
const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.SPOOKTOBER}>Spooktober</Link>
        </li>
    </ul>
);
export default Navigation;
