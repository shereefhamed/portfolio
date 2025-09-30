import styles from './ExperianceCard.module.css';

const ExperianceCard = (props) => {
    return (
        <div className={[styles.ExperianceCard, 'card'].join(' ')}>
            <h3>{props.experiance.title}</h3>
            <p><strong>{props.experiance.company}</strong> | from {props.experiance.from} to {props.experiance.to}</p>
            <ul>
                {
                    props.experiance.roles.map(
                        role =>
                        (
                            <li key={role}>{role}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default ExperianceCard;