import styles from './Download.module.css';
import cvFile from './assets/shereef-hamed.pdf';

const Download = (props) => {
    return (
        <div className={styles.Download}>
            <a href={cvFile} download>
                <span className={styles.DownloadIcon}><i className="fa-solid fa-download"></i></span> Download Resume
            </a>

        </div>
    );
}

export default Download;