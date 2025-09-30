import styles from './Footer.module.css';
import SocialMedaiIcons from '../shared/SocialMedaiIcons/SocialMediaIcons';

const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <div className={['container', styles.FooterCotent].join(' ')}>
                <div>
                    <p>© 2025. All rights reserved</p>
                </div>
                <SocialMedaiIcons />
            </div>

        </footer>
    );
}
export default Footer;