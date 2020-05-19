export interface ICardImages
{
    image_url?: string,
    image_url_small?: string
}

export interface ICardPrices
{
    amazon_price: string,
    cardmarket_price?: string,
    ebay_price?: string,
    tcgplayer_price?: string
}

export interface ICardSets
{
    set_code?: string,
    set_name?: string,
    set_price?: string,
    set_rarity?: string
}

export interface ICardDetails
{
    archetype?: string,
    atk?: number, 
    attribute?: string,
    card_images: ICardImages[],
    card_prices: ICardPrices[],
    card_sets?: ICardSets[],
    def?: number,
    desc: string,
    id: number,
    level?: number,
    name: string,
    race?: string,
    type?: string
}

export type CardProps = {
    id?: number;
    isFullDescriptionVisible: boolean,
    card?: ICardDetails
}

export const DEFAULT_CARD_VALUE: ICardDetails = {
    archetype: '',
    atk: 0, 
    attribute: '',
    card_images: [{image_url: 'data:image/jpeg;base64,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'}],
    card_prices: [{amazon_price: ' 0 '}],
    card_sets: [],
    def: 0,
    desc: '',
    id: 0,
    level: 0,
    name: '',
    race: '',
    type: ''
}

export const getInitialCardList = (nrOfCardsToShow: number) => {
    const initialCards: ICardDetails[] = [];
    for (let index = 0; index < nrOfCardsToShow; index++) {
        initialCards.push(DEFAULT_CARD_VALUE);
    }
    
    return initialCards;
}

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}