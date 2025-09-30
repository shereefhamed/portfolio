import styles from './Education.module.css';

const Education = (props) => {
    return (
        <div className={styles.Education}>
            <h1>EDUCATION</h1>
            <div className={[styles.EducationCard, 'card'].join(' ')}>
                <h3>Zagazig University | 2002</h3>
                <p>Bachelor's degree / computer science at Faculty of Computer Science and Information System</p>
            </div>
        </div>
    );
}

export default Education;