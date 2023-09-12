export const RecipeCard = ({ recipe }) => {
    const { title, ingredients, image } = recipe;
    return (
        <>
            <div className="card-panel recipe white row">
                <img src={image} alt="recipe thumb" className="recipe-image" />
                <div className="recipe-details">
                    <div className="recipe-title" >
                        {title}
                    </div>
                    <div className="recipe-ingredients" > {ingredients.slice(0, 2)} </div>

                </div>
                <div className="recipe-delete" >
                    <i className="material-icons" >delete_outline</i>
                </div>

            </div>
        </>
    )
}