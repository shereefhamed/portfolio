import { motion, AnimatePresence } from "motion/react"

import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = (props) => {
    return (
        <div className="row">
            <AnimatePresence>
                {
                    props.projects.map(project =>

                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5 }}
                            className="col-3"
                        >
                            <ProjectItem project={project} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );

}

export default Projects;