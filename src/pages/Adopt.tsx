// import { createContext } from "react";
import { CatCard } from "../components/CatCard";

export type catData = {
    id: number,
    name: string,
    gender: string,
    image: string,
}



const DATA: catData[] = [
    {
        id: 1,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat.png'
    },
    {
        id: 2,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat1.png'
    },
    {
        id: 3,
        name: 'Tiger',
        gender: '/male.png',
        image: '/cat3.png'
    },
    {
        id: 4,
        name: 'Rex',
        gender: '/male.png',
        image: '/cat4.png'
    },
    {
        id: 5,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat5.png'
    },
    {
        id: 6,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat6.png'
    },
    {
        id: 7,
        name: 'snowy',
        gender: '/female.png',
        image: '/cat7.png'
    },
    {
        id: 8,
        name: 'Ash',
        gender: '/male.png',
        image: '/cat8.png'
    },
]

// type catContextData = {
//     cats: catData[]
//     setCats: (React.Dispatch<React.SetStateAction<catData[]>>)
// }

// export const CatContext = createContext<catContextData | null>(null);

export function Adopt() {

    return (
        <>
            <div className="adopt-top-div">
                <div>
                    <h1 className="adopt-header-text">Find the purrfect</h1>
                    <h1 className="adopt-header-text-bottom">companion !</h1>
                </div>
                <div>
                    <h3 className="adopt-header-text-body">
                        our pet services include instore meetings<br></br>
                        and playdates with our playful rescue cats.
                    </h3>
                </div>
                <div className="adopt-top-paw">
                    <img src="/homepawtop.png" alt="" />
                </div>
            </div>
            <div className="adopt-bottom-div">
                <div className="cat-card-grid">
                    {DATA.map((index) => (
                        < CatCard id={index.id} name={index.name} gender={index.gender} image={index.image} key={index.id} />
                    ))}
                </div>

                <div className="adopt-bottom-paw">
                    <img src="/homepawbottom-full.png" alt="" />
                </div>
            </div>
        </>
    )
}