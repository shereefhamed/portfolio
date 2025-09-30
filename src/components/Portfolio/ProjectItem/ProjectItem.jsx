import { Link } from 'react-router';

import styles from './ProjectItem.module.css';
import getExcerpt from '../../../utils/getExcerpt';
const ProjectItem = (props) => {
    return (
        <div className={[styles.ProjectCard, 'card'].join(' ')}>
            <div className={styles.ProjectImage}>
                <img src={props.project.image} alt={props.project.title} />
            </div>
            <div className={styles.ProjectCardBody}>
                <div className={styles.ProjectDetails}>
                    <h3>{props.project.title}</h3>
                    <p>{getExcerpt(props.project.description, 10)}</p>
                </div>
                <Link to={`/portfolio/${props.project.id}`} className='button'>Learn more</Link>
            </div>

        </div>
    );
}

export default ProjectItem;