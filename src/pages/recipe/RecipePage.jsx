import RecipesData from "../../utils/RecipiesData"

import "./Recipe.css"
import { RecipeCard } from "./RecipeCard";

export const RecipePage = () => {
    return (
        <>

            <div className="recipies container grey-text text-darken-1" >
                {RecipesData.map((recipe, index) => {


                    return (

                        <RecipeCard recipe={recipe} key={index} />
                    )

                })}

            </div >
        </>
    )
}