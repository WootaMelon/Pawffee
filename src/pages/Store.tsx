import React, { createContext, useState } from "react";
import { DrinkCardGrid } from "../components/DrinkCardGrid";
import { Link } from "react-router-dom";
import { ShoppingCart } from "../components/ShoppingCart";

export type drinkData = {
    id: number,
    drinkName: string,
    drinkImage: string,
    drinkType: string,
    drinkPrice: number,
    drinkQuantity: number
}


const DRINK_DATA: drinkData[] = [
    {
        id: 0,
        drinkName: 'Matcha',
        drinkImage: 'drink-grid/espresso/matcha.png',
        drinkType: 'Espresso',
        drinkPrice: 120000,
        drinkQuantity: 0

    }, {
        id: 1,
        drinkName: 'Chocolate & Coffee',
        drinkImage: 'drink-grid/espresso/cat-latte.png',
        drinkType: 'Espresso',
        drinkPrice: 120000,
        drinkQuantity: 0
    },
    {
        id: 2,
        drinkName: 'Hot Mocha',
        drinkImage: 'drink-grid/espresso/hot-mocha.png',
        drinkType: 'Espresso',
        drinkPrice: 100000,
        drinkQuantity: 0
    },
    {
        id: 3,
        drinkName: 'Chocolate',
        drinkImage: 'drink-grid/espresso/chocolate.png',
        drinkType: 'Espresso',
        drinkPrice: 110000,
        drinkQuantity: 0
    },
    {
        id: 4,
        drinkName: 'Cappuccino',
        drinkImage: 'drink-grid/espresso/cappuccino.png',
        drinkType: 'Espresso',
        drinkPrice: 90000,
        drinkQuantity: 0
    },
    {
        id: 5,
        drinkName: 'Espresso shot',
        drinkImage: 'drink-grid/espresso/espresso-shot.png',
        drinkType: 'Espresso',
        drinkPrice: 100000,
        drinkQuantity: 0
    },
    {
        id: 6,
        drinkName: 'Matcha Latte',
        drinkImage: 'drink-grid/Latte/matcha-latte.png',
        drinkType: 'Latte',
        drinkPrice: 140000,
        drinkQuantity: 0

    },
    {
        id: 7,
        drinkName: 'Marble Latte',
        drinkImage: 'drink-grid/Latte/marble-latte.png',
        drinkType: 'Latte',
        drinkPrice: 120000,
        drinkQuantity: 0
    },
    {
        id: 8,
        drinkName: 'Matcha Milk',
        drinkImage: 'drink-grid/frappe/matcha-milk.png',
        drinkType: 'Frappe',
        drinkPrice: 160000,
        drinkQuantity: 0
    },
    {
        id: 9,
        drinkName: 'Mocha',
        drinkImage: 'drink-grid/frappe/mocha.png',
        drinkType: 'Frappe',
        drinkPrice: 130000,
        drinkQuantity: 0
    },
    {
        id: 10,
        drinkName: 'Charcoal',
        drinkImage: 'drink-grid/frappe/charcoal.png',
        drinkType: 'Frappe',
        drinkPrice: 145000,
        drinkQuantity: 0
    },
    {
        id: 11,
        drinkName: 'Caramel Machiato',
        drinkImage: 'drink-grid/frappe/caramel-machiato.png',
        drinkType: 'Frappe',
        drinkPrice: 145000,
        drinkQuantity: 0
    },
    {
        id: 12,
        drinkName: 'Choco Chip & Biscuit',
        drinkImage: 'drink-grid/frappe/choco.png',
        drinkType: 'Frappe',
        drinkPrice: 135000,
        drinkQuantity: 0
    },
    {
        id: 13,
        drinkName: 'Strawberry Milk & lotus',
        drinkImage: 'drink-grid/frappe/strawberry-milk-lotus.png',
        drinkType: 'Frappe',
        drinkPrice: 160000,
        drinkQuantity: 0
    },
    {
        id: 14,
        drinkName: 'Pink Drink',
        drinkImage: 'drink-grid/refreshers/pink-drink.png',
        drinkType: 'Refreshers',
        drinkPrice: 140000,
        drinkQuantity: 0
    },
    {
        id: 15,
        drinkName: 'Strawberry Acai',
        drinkImage: 'drink-grid/refreshers/strawberry-acai.jpg',
        drinkType: 'Refreshers',
        drinkPrice: 120000,
        drinkQuantity: 0
    },
    {
        id: 16,
        drinkName: 'Strawberry Milk & lotus',
        drinkImage: 'drink-grid/refreshers/lemonade.png',
        drinkType: 'Refreshers',
        drinkPrice: 100000,
        drinkQuantity: 0
    },
]

type drinkContextData = {
    drinks: drinkData[],
    setDrinks: (React.Dispatch<React.SetStateAction<drinkData[]>>)
}

type shoppingCartContext = {
    openCart: boolean,
    setOpenCart: (React.Dispatch<React.SetStateAction<boolean>>)
}


export const DrinkContext = createContext<drinkContextData | null>(null);




export const ShoppingCartContext = createContext<shoppingCartContext | null>(null)


export function Store() {

    const [drinkType, setDrinkType] = useState("Espresso")

    const [currentTab, setCurrentTab] = useState("Beverages")

    const [drinks, setDrinks] = useState(DRINK_DATA)

    const [openCart, setOpenCart] = useState(false)



    console.log("Drinks from Store: ", drinks)




    return <>
        <div className={!openCart ? "store-main-container" : "store-main-container open-cart"}>
            <nav className="store-top-nav">
                <div className="back-arrow">
                    <Link to=".." relative="path">
                        <img src="back-arrow.png" alt="" />
                    </Link>
                </div>
                <div className="store-item-types">
                    <button className={currentTab === "Beverages" ? "beverages-btn active-type-button" : "beverages-btn"} onClick={() => setCurrentTab("Beverages")}>Beverages</button>
                    <button className={currentTab === "Foods" ? "food-btn active-type-button" : "food-btn"} onClick={() => setCurrentTab("Foods")}>Foods</button>
                </div>
                <div className="cart-div">
                    <img src="cart-icon.png" className="cart-icon-store" alt="" onClick={() => setOpenCart(!openCart)} />
                    {openCart ?
                        <DrinkContext.Provider value={{ drinks, setDrinks }}>
                            <ShoppingCartContext.Provider value={{ openCart, setOpenCart }}>
                                <ShoppingCart />
                            </ShoppingCartContext.Provider>
                        </DrinkContext.Provider>
                        : <></>}
                </div>
            </nav >
            {currentTab === "Beverages" ?
                <>
                    <nav className="store-bottom-nav">
                        <div className="search-buttons">
                            <img src="search-button.png" alt="" />
                            <button className={drinkType === "Espresso" ? "espresso-btn active-beverages-button" : "espresso-btn"} onClick={() => setDrinkType("Espresso")}>Espresso</button>
                            <button className={drinkType === "Latte" ? "latte-btn active-beverages-button" : "latte-btn"} onClick={() => setDrinkType("Latte")}>Latte</button>
                            <button className={drinkType === "Frappe" ? "frappe-btn active-beverages-button" : "frappe-btn"} onClick={() => setDrinkType("Frappe")}>Frappe</button>
                            <button className={drinkType === "Refreshers" ? "refreshers-btn active-beverages-button" : "refreshers-btn"} onClick={() => setDrinkType("Refreshers")}>Refreshers</button>
                        </div>
                    </nav>

                    <div className="drink-cards">
                        <DrinkContext.Provider value={{ drinks, setDrinks }}>
                            <DrinkCardGrid drinkType={drinkType} />
                        </DrinkContext.Provider>
                    </div >
                </>
                :
                <div className="foods-container">
                    <img src="bongo-cat-transparent.gif" alt="" />
                    <h1 className="foods-header">Coming Soon...</h1>
                </div>
            }

        </div >
    </>
}