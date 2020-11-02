import {BASE_API_URL} from "./cards.constant"
import {QueryParametersType} from "./cards.type";
const headers = {'Content-Type': 'application/json'};
const requestOptions = {method: 'GET', headers};

export const get = async (queryParameters: QueryParametersType) => {
  let output = [];
  try {
      const queryParameterString = Object.entries(queryParameters).map(queryParameter => queryParameter.join('=')).join('&'); 
      const response = await fetch(`${BASE_API_URL}?${queryParameterString}`, requestOptions);
      const cardsData = await response.json();
      output = cardsData.cards.map((cardDataUntyped: any) =>({
        id: cardDataUntyped.id ?? new Date(),
        imageUrl: cardDataUntyped.imageUrl ?? null,
        name: cardDataUntyped.name ?? 'Not Available',
        text: cardDataUntyped.text ?? 'Not Available',
        type: cardDataUntyped.type ?? 'Not Available',
        setName: cardDataUntyped.set?.name ?? 'Not Available'
    }));
  } catch{};
  return {data: output, page: queryParameters.page};
};