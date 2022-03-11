import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/voedie-stomach.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import searchicon from "../assets/search-icon.png";
import mouseicon from "../assets/mouse-icon.png";
import cookicon from "../assets/cook-icon.png";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import RecipeResult from "../components/reciperesult/RecipeResult";

function VoedieStomach() {
    const [query, setQuery] = useState('');
    const [leftover, setLeftover] = useState('');
    const [recipes, setRecipes] = useState('');

    useEffect(() => {
    async function fetchRecipe() {
        try {
            const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${leftover}&apiKey=f7b5d72783cd4b168e57cc54e500f7ed`);
            console.log(result.data);
            setRecipes(result.data);
        } catch (e) {
            console.error(e);
        }
    };

        if (leftover) {
            fetchRecipe();
        }

    }, [leftover]);



console.log(recipes);

        function onFormSubmit(event) {
        event.preventDefault();
        setLeftover(query);
        console.log(leftover);
    }

    return (
        <>
            <NavigationBar />

            <IntroFunctionality
                title="Voedie stomach, [username]!"
                intro="Prepare your VoedieMeal via the following steps:"
            />

            <div className="tutorial-voediemaag">
                <section className="=section-search">
                    <img src={searchicon}
                         id="search-icon"
                         alt="search"
                    />
                    <h2>Search your leftover</h2>
                    <p>Enter which leftover you want to use to make a dish and click “Search”</p>
                </section>

                <section className="section-choose">
                    <img src={mouseicon}
                         id="mouse-icon"
                         alt="choose"
                    />
                    <h2>Choose your recipe</h2>
                    <p>Click on the dish that you want</p>
                </section>

                <section className="section-cook">
                    <img src={cookicon}
                         id="cook-icon"
                         alt="cook"
                    />
                    <h2>Cook & enjoy</h2>
                    <p>Follow the instructions on the chosen recipe and enjoy your VoedieMeal!</p>
                </section>

            </div>
            <form className="searchbar" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter the leftover that you want to use for your VoedieMeal here.."
                    id="user-food-input"
                    name="food-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button
                    type="submit"
                    text="Search"
                />
            </form>

            <h3>Delicious recipes</h3>
            <div className="background-container">
                <RecipeResult
                    picture1="Picture"
                    name1="Name"
                    picture2="Picture"
                    name2="Name"
                    picture3="Picture"
                    name3="Name"

                />
                <RecipeResult
                    picture1="Picture"
                    name1="Name"
                    picture2="Picture"
                    name2="Name"
                    picture3="Picture"
                    name3="Name"
                />
            </div>
            <Footer/>
        </>
    )
}

export default VoedieStomach