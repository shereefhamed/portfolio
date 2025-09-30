import styles from './Backdrop.module.css';

const Backdrop = (props)=>{
    if(!props.sideDrawerisActive){
        return null;
    }
    return (
        <div className={styles.Backdrop} onClick={props.hideSideDrawer}></div>
    );
}

export default Backdrop;