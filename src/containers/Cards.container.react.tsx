import React, {useEffect, useRef, useState} from 'react';

import Card from './../components/Card.component.react';
import {CardType} from "../utilities/cards.type";
import { MAX_RESULT_LIMIT } from "../utilities/cards.constant";
import Spinner from "./../components/Spinner.component.react";
import { get } from "../utilities/api.helper";
import styles from './../styles/Cards.module.css';

interface Props {
    searchString: string,
}

const Cards: React.FC<Props> = ({searchString}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cardsData, setCardsData] = useState<Array<CardType>>([]);
    const [triggerCardApi, setTriggerCardApi] = useState<boolean>(true);
    
    const usePrevious = (value: string) =>{
        const ref = useRef('');
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
    }

    const prevSearchString = usePrevious(searchString);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        loadCards();
    }, [triggerCardApi]);

    useEffect(() => {
        // To avoid merge issues incase of fast typing in search box
        if(prevSearchString !== searchString){
            setCardsData([]);
            setTriggerCardApi(existingState => !existingState);
        }
    }, [searchString]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setTriggerCardApi(existingState => !existingState);
    }
    
    const loadCards = async () => {
        setIsLoading(true);
        const queryParameters = {
            name: searchString,      
            page: Math.floor(cardsData.length/MAX_RESULT_LIMIT)+1,
            pageSize: MAX_RESULT_LIMIT, 
        }
        const {page, data} = await get(queryParameters);
        // Do not update stale results
        if(prevSearchString === searchString){
            setCardsData(existingState => page === 1 ? data: [...existingState, ...data]);
        }
        setIsLoading(false);
    }

    return (
        <div className={styles.columnContainer}>
            <div className={styles.columns}>
                {isLoading && <Spinner />}
                {cardsData.map(cardData => 
                    <Card data={cardData} key={cardData.id}/>
                )}
            </div>
        </div>
    )
}

export default Cards;
