import styles from './PortfolioFilter.module.css';

const PortfolioFilter = (props) => {

    return (
        <ul className={styles.FilterItems}>
            <li className={props.activeFilter === 'All' ? styles.Active : ''} onClick={() => props.setFilter('All')}>All</li>
            <li className={props.activeFilter === 'Mobile' ? styles.Active : ''} onClick={() => props.setFilter('Mobile')}>Mobile</li>
            <li className={props.activeFilter === 'Web' ? styles.Active : ''} onClick={() => props.setFilter('Web')}>Web</li>
        </ul>
    );
}

export default PortfolioFilter;