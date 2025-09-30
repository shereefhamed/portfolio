import styles from './Resume.module.css';
import Experiance from './Experiance/Experiance';
import Education from './Education/Education';
import Courses from './Courses/Courses';
import Skills from './Skills/Skills';
import Download from './Dowload/Download';

const Resume = (props) => {
    return (

        <div className={styles.Resume}>
            <div className="container">
                <Experiance />
                <Education />
                <Courses />
                <Skills />
                <Download />
            </div>
        </div>
    );
}

export default Resume;