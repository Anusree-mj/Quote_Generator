import * as React from 'react';
import { QuoteType, FavouriteContextType } from '../types';

export const FavouriteContext = React.createContext<FavouriteContextType>({
  favourites: [],
  addFavourites: () => { },
  removeFavourites: () => { },
});

const FavouritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = React.useState<QuoteType[]>([]);

  const addFavourites = (data: QuoteType) => {
    setFavourites((prev) => [...prev, data]);
  };

  const removeFavourites = (data: QuoteType) => {
    setFavourites((prev) =>
      prev.filter(
        (favourite) => favourite.text !== data.text || favourite.author !== data.author
      )
    );
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addFavourites, removeFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouritesProvider;
