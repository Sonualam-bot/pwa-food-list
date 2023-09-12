import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS styles
import M from "materialize-css/dist/js/materialize.min.js"; // Import Materialize JS


export const FormRecipe = () => {


    useEffect(() => {
        // Initialize side-form (left edge)
        const sideForms = document.querySelectorAll(".side-form");
        M.Sidenav.init(sideForms, { edge: "left" });
    }, []);



    // Function to open the side-form
    const openSideForm = () => {
        const sideForm = document.getElementById("side-form");
        const instance = M.Sidenav.getInstance(sideForm);
        instance.open();
    };

    return (
        <>
            <div id="side-form" className="sidenav side-form">
                <form className="add-recipe container section">
                    <h6 >New Recipe</h6>
                    <div className="divider"></div>
                    <div className="input-field">
                        <input placeholder="e.g. Ninja soup" id="title" type="text" className="validate" />
                        <label htmlFor="title">Recipe Title</label>
                    </div>
                    <div className="input-field">
                        <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" className="validate" />
                        <label htmlFor="ingredients">Ingredients</label>
                    </div>
                    <div className="input-field center">
                        <button className="btn-small" onClick={openSideForm}>Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}