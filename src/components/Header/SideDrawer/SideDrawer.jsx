import styles from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';
import logo from '../../../assets/react.svg';
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = (props) => {
    return (
        <>
            <Backdrop sideDrawerisActive={props.sideDrawerisActive} hideSideDrawer={props.hideSideDrawer} />
            <div
                className={styles.SideDrawer}
                style={{
                    width: props.sideDrawerisActive ? '70%' : 0,
                }}
                onClick={props.hideSideDrawer}>
                <div className={styles.SideDrawerContent}>
                    <div className={styles.Logo}>
                        <img src={logo} />
                    </div>
                    <NavItems />
                </div>

            </div>
        </>
    );
}

export default SideDrawer;