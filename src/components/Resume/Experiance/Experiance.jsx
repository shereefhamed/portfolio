import { motion, AnimatePresence } from 'motion/react';

import styles from './Experiance.module.css';
import experiances from '../../../constants/experinces';
import ExperianceCard from './ExperianceCard/ExperianceCard';

const Experiance = (props) => {

    return (
        <div className={styles.Experiance}>
            <h1>EXPERIANCE</h1>
            <AnimatePresence>
                {
                    experiances.map(experiance =>
                        <motion.div
                            key={experiance.id}
                            /* initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                            }} */
                            initial={{ opacity: 0, scale:0 }}
                            whileInView={{ opacity: 1,scale: 1 }}
                            transition={{
                                duration: 1,
                                scale: { type: "spring", visualDuration: 0.4,},
                            }}
                            viewport={{ once: true }}
                        >
                            <ExperianceCard experiance={experiance} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}

export default Experiance;