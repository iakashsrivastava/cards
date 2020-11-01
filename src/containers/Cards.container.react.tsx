import {CardType, QueryParametersType} from "./../utilities/Cards.type";
import {MAX_HEIGHT_BEFORE_NEXT_API_CALL, MAX_RESULT_LIMIT} from "./../utilities/Cards.constant";
import React, {Suspense, useEffect, useRef, useState} from 'react';

import { get } from "./../utilities/Api.helper";
import styles from './../styles/Cards.module.css';

const Card = React.lazy(() => import('./../components/Card.component.react'));

const Cards = () => {
    
    const [cardsData, setCardsData] = useState<Array<CardType>>([]);
    const [searchText, setSearchText] = useState<string>('');
    const stateRef = useRef(0);
    stateRef.current = cardsData.length;
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        loadCards();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        loadCards();
      }
    
    const loadCards = async () =>{
        const currentData = stateRef.current;
        const queryParameters = {
            name: searchText,      
            page: Math.floor(stateRef.current/20)+1,
            pageSize: MAX_RESULT_LIMIT, 
        }
        const cardsDataUntyped = await get(queryParameters);
        const cardsDataTyped:Array<CardType> = cardsDataUntyped.map((cardDataUntyped: any) =>({
            id: cardDataUntyped.id ?? new Date(),
            imageUrl: cardDataUntyped.imageUrl ?? null,
            name: cardDataUntyped.name ?? 'Not Available',
            text: cardDataUntyped.text ?? 'Not Available',
            type: cardDataUntyped.type ?? 'Not Available',
            setName: cardDataUntyped.set?.name ?? 'Not Available'
        }));
        setCardsData(existingState => [...existingState, ...cardsDataTyped]);
    }

    console.log("Total => ", cardsData.length);
    return (
        <div className={styles.columns}>
            {cardsData.map(cardData => 
                
                    <Suspense fallback={<></>}>
                        <Card data={cardData} />
                    </Suspense>
              
            )}
        </div>
    )
}

export default Cards;
