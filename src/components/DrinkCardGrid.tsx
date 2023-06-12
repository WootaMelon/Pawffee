import { useDrinks } from "../hooks/ContextHooks"
import { DrinkCard } from "./DrinkCard"

type drinkProps = {
    drinkType: string
}




export function DrinkCardGrid({ drinkType }: drinkProps) {

    const drinks = useDrinks()



    const reduced = drinks?.drinks.reduce((drinkArray: typeof drinks.drinks, index) => {
        if (index.drinkType == drinkType) {
            const newElement = { id: index.id, drinkName: index.drinkName, drinkImage: index.drinkImage, drinkType: index.drinkType, drinkPrice: index.drinkPrice, drinkQuantity: index.drinkQuantity }
            drinkArray.push(newElement)
        }
        return drinkArray
    }, [])
    console.log("drinks from Grid: ", drinks)

    return <>
        {
            reduced.map((index) => (

                <DrinkCard index={index} key={index.id} />


            ))}




    </>
}
