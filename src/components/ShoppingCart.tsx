import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useCart, useDrinks } from "../hooks/ContextHooks";
import { drinkData } from "../pages/Store";

export function ShoppingCart() {

    const { drinks, setDrinks } = useDrinks();
    const { openCart, setOpenCart } = useCart()

    const [swapAnim, setSwapAnim] = useState(openCart)

    function setTotal() {
        const totalarr = drinks.filter((el: drinkData) => el.drinkQuantity > 0).map((i) => i.drinkPrice * i.drinkQuantity)
        if (totalarr.length === 0)
            return
        console.log(totalarr)
        let total = 0
        for (let i = 0; i < totalarr.length; i++) {
            total += totalarr[i]
        }
        return total
    }

    const totalPrice = setTotal()
    console.log(totalPrice)


    const cartRef = useRef<HTMLDivElement>(null)

    function clickEventHandler(event: Event) {
        if (cartRef.current && !cartRef.current.contains(event.target as HTMLElement)) {
            closeCart()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickEventHandler);



        return () => {
            document.removeEventListener('mousedown', clickEventHandler);
        };


    })



    function closeCart() {
        setSwapAnim(false)
        setTimeout(() => {
            setOpenCart(!openCart)
        }, 1000);
    }

    function updateQuantity(id: number, quantity: number, action: string) {
        if (action === "clear")
            setDrinks((prevState: drinkData[]) => {
                return prevState.map((el: drinkData) => (el.id === id ? { ...el, drinkQuantity: quantity } : el))
            })
        if (action === "sub")
            setDrinks((prevState: drinkData[]) => {
                return prevState.map((el: drinkData) => (el.id === id ? { ...el, drinkQuantity: quantity - 1 } : el))
            })
        if (action === "add")
            setDrinks((prevState: drinkData[]) => {
                return prevState.map((el: drinkData) => (el.id === id ? { ...el, drinkQuantity: quantity + 1 } : el))
            })
    }

    return <>
        <div ref={cartRef} className={swapAnim ? "shopping-cart-container slide-left" : "shopping-cart-container slide-right"}>
            <div className="shopping-cart-header" onClick={() => closeCart()}>
                <Link to="." relative="path">
                    <img src="back-arrow.png" alt="" />
                </Link>
                <h1>My Cart</h1>
            </div>
            {drinks?.filter((drink) => drink.drinkQuantity !== 0).length === 0 ? <>
                <img src="menhera-sulk.png" alt="" className="menhera-img" />
                <h1>Nothing in Cart as of yet...</h1>
            </> : drinks?.filter((drink) => drink.drinkQuantity !== 0).map((index) => (
                <div className="shopping-cart-item-container" key={index.id}>
                    <div className="shopping-cart-image-container">
                        <button className="clear-drink-btn" onClick={() => updateQuantity(index.id, 0, "clear")}>x</button>
                        <img src={index.drinkImage} alt="" />
                    </div>

                    <div className="shopping-cart-item-details">
                        <div className="shopping-cart-item-details-left">
                            <p>{index.drinkName}</p>
                            <p>{(index.drinkPrice * index.drinkQuantity).toLocaleString("en-US")} LBP</p>
                        </div>

                        <div className="shopping-cart-item-details-right">
                            <button onClick={() => updateQuantity(index.id, index.drinkQuantity, "sub")} >-</button>
                            <p>{index.drinkQuantity}</p>
                            <button onClick={() => updateQuantity(index.id, index.drinkQuantity, "add")}>+</button>
                        </div>


                    </div>

                </div>
            ))}
            {totalPrice !== undefined && totalPrice !== undefined ? <div className="total-price-div">Total: {totalPrice} LBP</div> : <></>}
        </div>


    </>
}