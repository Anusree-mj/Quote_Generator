import QuotePage from "../pages/quotePage"
import FavouritePage from "../pages/favouritePage"
import { RoutesType } from "./types"


export const routes: RoutesType = [
    { path: "/", element: QuotePage },
    { path: "/favourites", element: FavouritePage },
]
