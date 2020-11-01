export interface QueryParametersType {
    name: string,      
    page: number,
    pageSize: number, 
}

export interface CardType {
    id: string,
    imageUrl: string | null,
    name: string,
    text: string,
    type: string,
    setName: string
}