import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "../styles/recipe-page.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";

function Recipepage() {
    const {id, name} = useParams();
    const [recipeDetails, setRecipeDetails] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchIngredientById() {
            toggleError(false);
            toggleLoading(true);

            try {
                const resultRecipeDetails = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`);
                setRecipeDetails(resultRecipeDetails.data[0].steps);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchIngredientById();

    }, [id]);

    const recipeEquipment = recipeDetails.map((equipmentForRecipe) => {
        return equipmentForRecipe.equipment;
    });

    let equipmentNames = recipeEquipment.flatMap(equipment => equipment);

    const recipeIngredients = recipeDetails.map((ingredientsForRecipe) => {
        return ingredientsForRecipe.ingredients;
    });

    let ingredientNames = recipeIngredients.flatMap(ingredients => ingredients);

    console.log(ingredientNames);

    return (
        <>
            <NavigationBar/>
            <div className="page-container-recipe">
                <main className="recipe-main">
                    <div className="recipe-container">
                        <InteractionIntro>
                            <article className="recipe-instructions">
                                <h3>Save your leftovers by making: {name}</h3>
                                {loading && <div className="loader"></div>}
                                <p>In order to start making this delicious VoedieMeal, you will need the following
                                    equipment:</p>

                                {error &&
                                <span className="potential-error">
    	                        Something went wrong, we could not retrieve the data. Sorry for the inconvenience.
                                </span>}

                                <ul>
                                    {equipmentNames.map((equipment) => {
                                        return (
                                            <li key={equipment.id}>
                                                {equipment.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p>Alright, now that we mentioned all the equipment, we will follow up with all the
                                    ingredients that are needed:</p>

                                {error &&
                                <span className="potential-error">
    	                        Something went wrong, we could not retrieve the data. Sorry for the inconvenience.
                                </span>}

                                <ul>
                                    {ingredientNames.map((ingredients) => {
                                        return (
                                            <li key={ingredients.id}>
                                                {ingredients.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <p>Are you ready to start cooking? Follow our instructions in below order and everything
                                    will be fine!</p>

                                {error &&
                                <span className="potential-error">
    	                        Something went wrong, we could not retrieve the data. Sorry for the inconvenience.
                                </span>}

                                <ol>
                                    {recipeDetails.map((infoRecipes) => {
                                        return (
                                            <li key={infoRecipes.step}>
                                                {infoRecipes.step}
                                            </li>
                                        )
                                    })}
                                </ol>
                                <p>It is finally time to enjoy your VoedieMeal cozy and unabashedly! We hope to catch
                                    you again!</p>
                            </article>
                        </InteractionIntro>
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Recipepage;