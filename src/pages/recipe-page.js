import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../styles/recipe-page.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";


function Recipepage( {} ) {


    const { id , name} = useParams();
    const [recipeDetails, setRecipeDetails] = useState([]);
    useEffect(() => {
    async function fetchIngredientById() {
        try {
            const resultRecipeDetails = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=f7b5d72783cd4b168e57cc54e500f7ed`);
            setRecipeDetails(resultRecipeDetails.data);

        } catch (e) {
            console.error(e);
        }
    } }, []);

    console.log(recipeDetails);

        return (
            <>
                <NavigationBar/>
                <div className="page-container-recipe">
                    <main className="recipe-main">
                        <div className="recipe-container">
                            <InteractionIntro>
                                <h3>Save your leftovers by making: {name}</h3>
                                <p>we need </p>
                            </InteractionIntro>
                        </div>
                    </main>
                </div>
                <Footer
                    fillpage="lower-footer"
                />
            </>
        )
    }


export default Recipepage;