import { useParams, Navigate, Link } from "react-router";
import { motion } from "motion/react";

import allProjects from '../../../constants/projects';
import styles from './ProjectDetails.module.css';

const ProjectDetails = (props) => {
    const params = useParams();
    const project = allProjects.find(proj => proj.id === params.id);
    if (!project) {
        return <Navigate to='/' />
    }
    const projectIndex = allProjects.findIndex(proj => proj.id == params.id);
    const nextProject =
        projectIndex === allProjects.length - 1
            ? null
            : allProjects[projectIndex + 1];
    const prevProject =
        projectIndex === 0
            ? null
            : allProjects[projectIndex - 1];
    return (
        <>
            <div className={styles.ProjectDetails}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <div>
                                <h3>Details</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Client:</th>
                                            <td>{project.client}</td>
                                        </tr>
                                        <tr>
                                            <th>Platform & Languaegs:</th>
                                            <td>{project.platformAndLanguaegs}</td>
                                        </tr>
                                        <tr>
                                            <th>Technologies:</th>
                                            <td>{project.technology}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.Links}>
                                {
                                    project.googlePlayLink
                                        ? <a
                                            href={project.googlePlayLink}
                                            className="button button-primary"
                                            target="_blank"
                                        >
                                            Download Now <i className="fa-brands fa-google-play"></i>
                                        </a>
                                        : null
                                }
                                {
                                    project.iosLink
                                        ? <a
                                            href={project.iosLink}
                                            className="button button-primary"
                                            target="_blank"
                                        >
                                            Download Now <i className="fa-brands fa-apple"></i>
                                        </a>
                                        : null
                                }
                                {
                                    project.websiteLink
                                        ? <a
                                            href={project.websiteLink}
                                            className="button button-primary"
                                            target="_blank"
                                        >
                                            Website
                                        </a>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ease: 'easeInOut', duration: 0.5}}>
                                <div className={styles.ProjectImage}>
                                    <img src={project.projectImage} alt={project.title} />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
                <div className={styles.ProjectNavigator}>
                    {
                        prevProject
                            ? <Link to={`/portfolio/${prevProject.id}`} className={styles.Prev}>
                                <span><i className="fa-solid fa-arrow-left"></i></span>
                            </Link>
                            : null
                    }
                    {
                        nextProject
                            ? <Link to={`/portfolio/${nextProject.id}`} className={styles.Next}>
                                <span><i className="fa-solid fa-arrow-right"></i></span>
                            </Link>
                            : null
                    }
                </div>
            </div>
            <div className={styles.CallToAction}>
                <div className="container">
                    <h1>Let's build something together</h1>
                    <Link to="/contact" className="button-secoundary">Contact me</Link>
                </div>
            </div>
        </>
    );
}

export default ProjectDetails;