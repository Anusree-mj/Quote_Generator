import { RoutesType } from "./types"
import QuotePage from "../pages/quotePage"
import FavouritePage from "../pages/favouritePage"
import ErrorPage from "../pages/errorPage"


export const routes: RoutesType = [
    { path: "/", element: QuotePage },
    { path: "/favourites", element: FavouritePage },
    { path: "*", element: ErrorPage }

]
