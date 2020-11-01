import {CardType, QueryParametersType} from "./../utilities/Cards.type";
import {MAX_HEIGHT_BEFORE_NEXT_API_CALL, MAX_RESULT_LIMIT} from "./../utilities/Cards.constant";
import React, {useEffect, useMemo, useRef, useState} from 'react';

import Spinner from "./../components/Spinner.component.react";
import { get } from "./../utilities/Api.helper";
import styles from './../styles/Cards.module.css';

const Card = React.lazy(() => import('./../components/Card.component.react'));

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
        if(prevSearchString !== searchString){
            setCardsData([]);
            setTriggerCardApi(existingState => !existingState);
        }
    }, [searchString]);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setTriggerCardApi(existingState => !existingState);
    }
    
    const loadCards = async () =>{
        setIsLoading(true);
        const queryParameters = {
            name: searchString,      
            page: Math.floor(cardsData.length/20)+1,
            pageSize: MAX_RESULT_LIMIT, 
        }
        const {page, data} = await get(queryParameters);
        if(prevSearchString === searchString){
            setCardsData(existingState => page === 1 ? data: [...existingState, ...data]);
        }
        setIsLoading(false);
    }

    return (
        <div className={styles.columns}>
            {cardsData.map(cardData => 
                <Card data={cardData} key={cardData.id}/>
            )}
            {isLoading && <Spinner />}
        </div>
    )
}

export default Cards;
