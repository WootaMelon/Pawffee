import { useContext } from "react";
import { DrinkContext, ShoppingCartContext } from "../pages/Store";
// import { CatContext } from "../pages/Adopt";

export const useCart = () => {
    const shoppingCart = useContext(ShoppingCartContext);

    if (!shoppingCart) throw new Error("Cart Context used outside of ShoppingCartContextProvider");

    return shoppingCart;
}

export const useDrinks = () => {
    const drinks = useContext(DrinkContext);

    if (!drinks) throw new Error("useDrinks used outside of DrinkContextProvider");

    return drinks;
}

// export const useCats = () => {
//     const cats = useContext(CatContext);

//     if (!cats) throw new Error("useCats used outside of CatContextProvider");

//     return cats;
// }