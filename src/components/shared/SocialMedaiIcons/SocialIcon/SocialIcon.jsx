import styles from './SocialIcon.module.css';

const SocialIcon = (props) => {
    return (
        <a 
            href={props.link} 
            className={styles.SocialIcon}
            target='_blank'>
            {props.children}
        </a>
    );
}

export default SocialIcon;