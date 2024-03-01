import React from 'react';
import styles from './Main.module.css';
import Foods from '../../assets/images/Mask group.png';

export default function Main () {
    return (
        <main className={styles.main}>
            <div className={styles.maindiv}>
                <img className={styles.foods} src={Foods} alt="Foods" />
                <div className={styles.circle}></div>
            </div>
            <div className={styles.text}>
                <h1>Delicious</h1>
                <p className={styles.quench}>Quench the Hunger</p>
                <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </main>
    );
}
