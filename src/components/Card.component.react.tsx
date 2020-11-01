import React from 'react';
import styles from './../styles/Cards.module.css';

interface Props {
    data: any
}

const Card: React.FC<Props> = ({data}) => {
    return (
        <figure className={styles.figureDetails}>
            <img src={data.imageUrl} className={styles.imageContainer}/>
            <figcaption>{data.name}</figcaption>
        </figure>
    )
}

export default Card;
