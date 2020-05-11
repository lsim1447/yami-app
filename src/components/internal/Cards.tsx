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
    card_images: [{image_url: 'https://i.pinimg.com/originals/fd/0c/1c/fd0c1c9ee889c00387dbfb300ec22a9e.jpg'}],
    card_prices: [{amazon_price: ' 0.75 '}],
    card_sets: [],
    def: 0,
    desc: '',
    id: 0,
    level: 0,
    name: '',
    race: '',
    type: ''
}