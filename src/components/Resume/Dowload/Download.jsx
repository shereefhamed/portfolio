import styles from './Download.module.css';

const Download = (props) => {
    return (
        <div className={styles.Download}>
            <a href="/shereef-hamed.pdf" download>
                <span className={styles.DownloadIcon}><i className="fa-solid fa-download"></i></span> Download Resume
            </a>

        </div>
    );
}

export default Download;