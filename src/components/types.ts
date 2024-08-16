export interface QuoteType {
    text: string;
    author: string
}
export type FavouriteContextType = {
    favourites: QuoteType[];
    addFavourites: (quote: QuoteType) => void;
    removeFavourites: (quote: QuoteType) => void;
};