import {CardsType, QueryParametersType} from "./../utilities/Cards.type";
import {DEFAULT_QUERY_PARAMETERS, MAX_RESULT_LIMIT} from "./../utilities/Cards.constant";
import React, {Suspense, useEffect, useState} from 'react';

import { get } from "./../utilities/Api.helper";

const Card = React.lazy(() => import('./../components/Card.component.react'));

const Cards = () => {
    
    const [cardsData, setCardsData] = useState<Array<CardsType>>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () =>{
        const queryParameters = {
            name: searchText,      
            page: Math.floor(cardsData.length/20)+1,
            pageSize: MAX_RESULT_LIMIT, 
        }
        const cardsDataUntyped = await get(queryParameters);
        const cardsDataTyped:Array<CardsType> = cardsDataUntyped.map((cardDataUntyped: any) =>({
            id: cardDataUntyped.id ?? new Date(),
            imageUrl: cardDataUntyped.imageUrl ?? null,
            name: cardDataUntyped.name ?? 'Not Available',
            text: cardDataUntyped.text ?? 'Not Available',
            type: cardDataUntyped.type ?? 'Not Available',
            setName: cardDataUntyped.set?.name ?? 'Not Available'
        }));
        let newCardsState = [...cardsData, ...cardsDataTyped];
        setCardsData(newCardsState);
    }
    console.log("Total => ", cardsData.length);
    return (
        <div className="row">
            {cardsData.map(cardData => 
                <div className="col-xs-3 col-md-3" key={cardData.id}>
                    <Suspense fallback={<></>}>
                        <Card data={cardData} />
                    </Suspense>
                </div>
            )}
        </div>
    )
}

export default Cards;
