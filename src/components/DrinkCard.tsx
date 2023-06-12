import { useDrinks } from "../hooks/ContextHooks"
import { drinkData } from "../pages/Store"




type drinkCardSingleProp = {

    index: drinkData
}

export function DrinkCard({ index }: drinkCardSingleProp) {

    const { setDrinks } = useDrinks()

    function changeQuantity(id: number, quantity: number) {
        setDrinks((prevState: drinkData[]) => {
            return prevState.map((el: drinkData) => (el.id === id ? { ...el, drinkQuantity: quantity } : el))
        })
    }

    return (
        <div className="drink-card-div">
            <div className="drink-card-title">{index.drinkName}</div>
            <div className="drink-card-image">
                <img src={index.drinkImage} alt="" />
            </div>
            <div className="drink-card-content">
                <div className="drink-card-price">
                    {index.drinkPrice.toLocaleString("en-US")} LBP
                </div>
                <div className="drink-card-quantity">
                    {index.drinkQuantity === 0 ? <button className="add-to-cart-btn" onClick={() => {
                        changeQuantity(index.id, index.drinkQuantity + 1)
                    }}>Add to Cart</button>
                        :
                        <div className="add-subtract-drink-quantity">
                            <button onClick={() => {
                                changeQuantity(index.id, index.drinkQuantity - 1)
                            }} >-</button>
                            <span>{index.drinkQuantity}</span>

                            <button onClick={() => {
                                changeQuantity(index.id, index.drinkQuantity + 1)
                            }} >+</button>
                        </div>
                    }


                </div>
            </div>

        </div >
    )

}