import { NavLink } from "react-router";

import styles from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={styles.NavItem}>
            <NavLink
                to={props.link}
                className={({ isActive, isPending }) =>
                    isActive
                        ? styles.Active
                        : isPending
                            ? "pending"
                            : ""
                }
            >
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavItem;