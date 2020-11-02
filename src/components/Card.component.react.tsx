import {CardType} from "../utilities/cards.type";
import React from 'react';
import styles from './../styles/Cards.module.css';

interface Props {
    data: CardType
}

const Card: React.FC<Props> = ({data}) => {
    return (
        <figure className={styles.figureDetails}>
            {
            (data.imageUrl != null)?
                <img src={data.imageUrl} alt="Not Available" className={styles.imageContainer}/>:
                <img alt="Not Available" className={styles.imageContainer}/>
            }
            <figcaption>
                <div>
                    <b>Name: </b> 
                    {data.name}
                </div>
                <div>
                    <b>Text: </b> 
                    {data.text}
                </div>
                <div>
                    <b>Set Name: </b> 
                    {data.setName}
                </div>
                <div>
                    <b>Type: </b> 
                    {data.type}
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;
