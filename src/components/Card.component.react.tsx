import {CardType, QueryParametersType} from "./../utilities/Cards.type";

import {CardParametersLabelMappingEnum} from "./../utilities/Cards.constant";
import React from 'react';
import styles from './../styles/Cards.module.css';

interface Props {
    data: CardType
}

const Card: React.FC<Props> = ({data}) => {
    const keys = []
    return (
        <figure className={styles.figureDetails}>
            {
            (data.imageUrl != null)?
                <img src={data.imageUrl} alt="No Image Available" className={styles.imageContainer}/>:
                <img alt="No Image Available" className={styles.imageContainer}/>
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
