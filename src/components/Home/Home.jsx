import { Link } from 'react-router';

import hero from '../../assets/hero.png';
import styles from './Home.module.css';
import TypewriterText from './TypewriterText/TypewriterText';

const Home = (props) => {
    return (
        <div className="container">
            <div className={[styles.Hero, 'row'].join(' ')}>
                <div className="col-6">
                    <div className={styles.HeroDescription}>
                        <p className={styles.Badge}>Mobile · Web · Development</p>
                        <h2 className={styles.SubTitle}>I can help your business</h2>
                        <h1 className={styles.TypewriterText}>
                            TO
                            <TypewriterText
                                texts={[" GET ONLINE.", " GROW FAST.", " STAY AHEAD."]}
                                speed={100}
                                deleteSpeed={50}
                                loop={true}
                                delay={1000} />
                        </h1>
                        <div className={styles.ActionButtons}>
                            <Link to='/resume' className='button button-primary' style={{ marginRight: '16px' }}>Resume</Link>
                            <Link to='/portfolio' className='button'>Portfolio</Link>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className={styles.HeroImage}>
                        <img src={hero} />
                    </div>
                </div>
            </div>
            <section>
                <h1>ABOUT ME</h1>
                <p>I'm a talented web and mobile developer with a passion for crafting exceptional digital experiences. </p>
                <p>With my expertise in HTML, CSS, JavaScript, PHP, and WordPress, I have the ability to create responsive websites and web applications that meet the unique needs of any clients. My attention to detail and commitment to delivering high-quality work sets me apart in the industry.</p>
                <p>I also have good experience in in Dart programming language and Flutter framework, I have the ability to craft intuitive user interfaces, engaging animations, and performant functionality.</p>
            </section>
        </div>
    )
}

export default Home;