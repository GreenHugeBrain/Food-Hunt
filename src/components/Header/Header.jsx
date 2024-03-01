import React from 'react';
import styles from './Header.module.css';
import myImage from '../../assets/images/Vector.png';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src={myImage} alt="My Image" />
                <ul className={styles.ul}>
                    <a href=""><li>Breakfast</li></a>
                    <a href=""><li>Lunch</li></a>
                    <a href=""><li>Dinner</li></a>
                </ul>
            </nav>
        </header>
    );
}
