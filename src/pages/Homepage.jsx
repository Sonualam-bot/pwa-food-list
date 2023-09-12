import { RecipePage } from "./recipe/RecipePage"
import { FormRecipe } from "./recipe/FormRecipe"
import { useState } from "react"
import { Contact } from "./Contact"


export const Homepage = () => {

    const handleClick = () => {
        // console.log("hello")
        setShowForm(!showForm)
    }

    return (
        <>
            <RecipePage />
            <div className="center" >
                <div className="btn-floating btn-small  add-btn sidenav-trigger" data-target="side-form" onClick={handleClick} >
                    <i className="material-icons"  >add</i>
                </div>

            </div>

            <div>

                <FormRecipe />
            </div>


        </>
    )
}