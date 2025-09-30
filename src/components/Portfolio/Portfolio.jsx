import { useState } from "react";

import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";
import allProjects from "../../constants/projects";
import Projects from "./Projects/Projects";
import styles from './Portfolio.module.css';

const Portfolio = (props) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [projects, setProjects] = useState(allProjects)

    const setActiveFilterHandler = (filter) => {
        setActiveFilter(filter);
        if (filter === 'All') {
            setProjects(allProjects);
        } else {
            const filterdProjects = allProjects.filter(proj => proj.type === filter);
            setProjects(filterdProjects);
        }
    }

    return (

        <div className={styles.Portfolio}>
            <div className="container">
                <h1>PORTFOLIO</h1>
                <PortfolioFilter activeFilter={activeFilter} setFilter={setActiveFilterHandler} />
                <Projects projects={projects} />
            </div>
        </div>
    );
}

export default Portfolio;