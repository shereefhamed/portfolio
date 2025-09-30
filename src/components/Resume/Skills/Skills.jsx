
import styles from './Skills.module.css';
import allSkills from '../../../constants/skills';
import SkillBar from './SkillBar/SkillBar';

const Skills = (props) => {
    const webSkills = allSkills.filter(skill => skill.type === 'web');
    const mobileSkills = allSkills.filter(skill => skill.type === "mobile");

    return (
        <div className={styles.Skills}>
            <h1>SKILLS</h1>
            <div className={styles.SkillsCard}>
                <div className="row">
                    <div className="col-6">
                        {
                            webSkills.map(skill =>
                                <SkillBar key={skill.title} skill={skill} />
                            )
                        }
                    </div>
                    <div className="col-6">
                        {
                            mobileSkills.map(skill =>
                                <SkillBar key={skill.title} skill={skill} />
                            )
                        }
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Skills;

