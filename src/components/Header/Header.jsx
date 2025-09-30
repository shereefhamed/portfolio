import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import NavItems from './NavItems/NavItems';

const Header = (props)=>{
    
    return (
        <div className={styles.MainHeader}>
            <div className="container">
                <nav className={styles.MainMenu}>
                    <div className={styles.Logo}>
                        <img src={logo} />
                    </div>
                    <div className={styles.DesktopOnly}>
                        <NavItems />
                    </div>
                    <div onClick={props.showSideDrawer} className={styles.MenuToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;