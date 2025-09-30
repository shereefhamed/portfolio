import { motion } from 'motion/react';

import styles from './Courses.module.css';
import courses from '../../../constants/courses';

const Courses = (props) => {
    return (
        <div className={styles.Courses}>
            <h1>COURSES</h1>
            <div className="row">
                {
                    courses.map(
                        course =>
                        (
                            <motion.div
                                key={course.id}
                                className="col-3"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <div className={[styles.CoursesCard, 'card'].join(' ')}>
                                    <h3>Udemy</h3>
                                    <p> {course.title}</p>
                                </div>
                            </motion.div>
                        )
                    )
                }

            </div>
        </div>
    );
}

export default Courses;