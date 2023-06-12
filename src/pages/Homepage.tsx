import { useState } from "react";
import { Link } from 'react-router-dom'
export function Homepage() {

    const defaultImages = {
        Drink: "pinkDrink.png",
        pawTop: "homepawtop.png",
        pawBottom: "homepawbottom-full.png",
        miniPaws: 'mini-paws.png'

    }
    const [images, setImages] = useState(defaultImages);

    const [isPinkDrink, setIsPinkDrink] = useState(true)

    const changeDrink = () => {

        if (isPinkDrink) {
            setImages(() => {
                return {
                    Drink: "matcha-latte.png",
                    pawTop: "homepawtop-matcha.png",
                    pawBottom: 'homepawbottom-full-matcha.png',
                    miniPaws: 'mini-paws-matcha.png'
                }
            })
            setIsPinkDrink(false)
        }
        if (!isPinkDrink) {
            setImages(() => {
                return {
                    Drink: "pinkDrink.png",
                    pawTop: "homepawtop.png",
                    pawBottom: "homepawbottom-full.png",
                    miniPaws: 'mini-paws.png'
                }
            })
            setIsPinkDrink(true)
        }

    }


    return (
        <>
            <section className="homepage">
                <div className="homepage-left">
                    <div className="homepage-welcome-text">
                        <h1>welcome to</h1>
                        <h2>Pawffee!</h2>
                    </div>
                    <div className="homepage-buttons">
                        <div className="view-button-container">
                            <Link to="/menu">  <button>View Menu</button></Link>
                        </div>
                        <div className="adopt-button-container">
                            <Link to="/adopt"> <button>Adopt</button></Link>
                        </div>
                    </div>
                    <div className="homepage-mini-paws">
                        <img src={images.miniPaws} alt="" />
                    </div>
                </div>

                <div className="homepage-right">

                    <div className="drink-div">
                        <img src={images.Drink} alt="" className="drink" />

                        <div className="paws-div">
                            <img src={images.pawTop} alt="" className="top-paw" />

                            <button className="arrow-div" onClick={() => changeDrink()}>&lt;</button>

                            <img src={images.pawBottom} alt="" className="bottom-paw" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}