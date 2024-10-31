import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <button className={styles.button}>Acceder</button>
        </div>
    );
};

export default Card;
