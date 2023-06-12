import { useEffect, useState } from "react"

const IMAGES_ARRAY = ["/Menu/menu-bg-0.png", "/Menu/menu-bg-0.png", "/Menu/menu-bg-0.png", "/Menu/menu-bg-0.png"]


export function Menu() {

    const [activeIndicatorIndex, setActiveIndicatorIndex] = useState(0)



    useEffect(() => {
        const intervalId = setInterval(() => {
            if (activeIndicatorIndex === IMAGES_ARRAY.length - 1) {
                setActiveIndicatorIndex(0);
            }
            else {

                setActiveIndicatorIndex(activeIndicatorIndex + 1);

            }
        }, 5000)

        return () => clearInterval(intervalId);
    }, [activeIndicatorIndex])



    return <>
        <div className="top-carousel-div">
            <img src={IMAGES_ARRAY[activeIndicatorIndex]} alt="" className="carousel-image animate-carousel-image" />
            <h1 className="meet-text">Meet The New <br></br> Recruites</h1>


            <nav className="carousel-nav">
                <button className={activeIndicatorIndex === 0 ? "carousel-indicator active-carousel-indicator " : "carousel-indicator"} onClick={() => {
                    setActiveIndicatorIndex(0)




                }}></button>
                <button className={activeIndicatorIndex === 1 ? "carousel-indicator active-carousel-indicator " : "carousel-indicator"} onClick={() => {
                    setActiveIndicatorIndex(1)



                }}></button>
                <button className={activeIndicatorIndex === 2 ? "carousel-indicator active-carousel-indicator " : "carousel-indicator"} onClick={() => {
                    setActiveIndicatorIndex(2)


                }}></button>
                <button className={activeIndicatorIndex === 3 ? "carousel-indicator active-carousel-indicator " : "carousel-indicator"} onClick={() => {
                    setActiveIndicatorIndex(3)

                }}></button>

            </nav>


        </div>

        <div className="main-body container">

            <div className="beverages-menu-container">
                <h1>Beverages</h1>

                <div className="beverages-menu-content">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>

            <div className="food-menu-container">
                <h1>Food</h1>

                <div className="food-menu-content">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>

        </div>


    </>
}