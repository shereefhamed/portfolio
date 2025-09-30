import { motion } from 'framer-motion';

import styles from './SkillBar.module.css';

const SkillBar = (props) => {
    return (
        <div className={styles.SkillBarContainer}>
            <div className={styles.SkillBarTitles}>
                <span><strong>{props.skill.title}</strong></span>
                <span><strong>{props.skill.level}%</strong></span>
            </div>
            <div className={styles.SkillBarOuter}>
                <motion.div
                    className={styles.SkillBarInner}
                    initial={{ width: 0 }}
                    //animate={{ width: `${props.skill.level}%` }}
                    whileInView={{ width: `${props.skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >

                </motion.div>
            </div>
            <span className={styles.TooltipText}>{props.skill.title} {props.skill.level}%</span>
        </div>
    );
}

export default SkillBar;