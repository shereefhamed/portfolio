import { Link } from "react-router";

import styles from './PageNotFound.module.css';

const PageNotFound = (props) => {
    return (
        <div className={styles.PageNotFound}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/" className="button button-primary">Go back home</Link>
        </div>
    );
}

export default PageNotFound;