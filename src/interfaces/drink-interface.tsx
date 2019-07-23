export default interface Drink {
    strDrinkThumb: string,
    strDrink: string,
    strInstructions: string,
    [index: string]: string,
}

export interface DrinkResponse {
    drinks: Array<{strIngredient1: string}>,
}