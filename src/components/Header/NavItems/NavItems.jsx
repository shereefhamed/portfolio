import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = (props)=>{
    return (
        <ul className={styles.MainNavItems}>
            <NavItem link="/" >Home</NavItem>
            <NavItem link="/portfolio">Portfolio</NavItem>
            <NavItem link="/resume">Resume</NavItem>
            <NavItem link="/contact">Contact</NavItem>
        </ul>
    );
}

export default NavItems;