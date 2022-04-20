import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../styles/voedie-stomach.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import IntroFunctionality from "../components/introfunctionality/IntroFunctionality";
import searchicon from "../assets/search-icon.png";
import mouseicon from "../assets/mouse-icon.png";
import cookicon from "../assets/cook-icon.png";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase";
import {useAuth} from "../contexts/AuthContext";

function VoedieStomach() {
    const [query, setQuery] = useState('');
    const [leftover, setLeftover] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {currentUser} = useAuth();

    const defaultRecipes = [
        {
            id: 645418,
            image: "https://spoonacular.com/recipeImages/645418-312x231.jpg",
            title: "Green Beans with Pearl Onions and Salmon",
        },
        {
            id: 655589,
            image: "https://spoonacular.com/recipeImages/655589-312x231.jpg",
            title: "Penne with Goat Cheese and Basil"
        },
        {
            id: 663933,
            image: "https://spoonacular.com/recipeImages/663933-312x231.jpg",
            title: "Tuna mousse dip"
        },
        {
            id: 665734,
            image: "https://spoonacular.com/recipeImages/665734-312x231.jpg",
            title: "Zucchini Chicken Omelette",
        },
        {
            id: 649722,
            image: "https://spoonacular.com/recipeImages/649722-312x231.jpg",
            title: "Lemon Pepper Steak",
        },
        {
            id: 660101,
            image: "https://spoonacular.com/recipeImages/660101-312x231.jpg",
            title: "Simple Garlic Pasta",
        },
        {
            id: 652965,
            image: "https://spoonacular.com/recipeImages/652965-312x231.jpg",
            title: "Nasi Pudina (Mint Rice)",
        },
        {
            id: 644148,
            image: "https://spoonacular.com/recipeImages/644148-312x231.jpg",
            title: "Gambas Al Ajo",
        },
        {
            id: 640803,
            image: "https://spoonacular.com/recipeImages/640803-312x231.jpg",
            title: "Crispy Buttermilk Fried Chicken",
        },
        {
            id: 633547,
            image: "https://spoonacular.com/recipeImages/633547-312x231.jpg",
            title: "Baked Cinnamon Apple Slices",
        }
    ];

    const [recipes, setRecipes] = useState(defaultRecipes);

    useEffect(() => {
        async function fetchRecipe() {
            toggleError(false);
            toggleLoading(true);

            try {
                const resultRecipes = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${leftover}&apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(resultRecipes.data);
                setRecipes(resultRecipes.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (leftover) {
            fetchRecipe();
        }

    }, [leftover]);

    async function trackLeftovers() {
        try {

            await addDoc(collection(db, currentUser.uid), {
                leftover: query.toUpperCase()
            });

        } catch (e) {
            console.error(e)
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();
        setLeftover(query);
        trackLeftovers();
    }

    return (
        <>
            <NavigationBar/>
            <IntroFunctionality
                title="Voedie stomach!"
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

            <h3>Delicious {leftover.toUpperCase()} recipes</h3>
            <div className="background-container">
                {loading && <div className="loader"/>}
                <div className="recipeResults">
                    {recipes.map((infoRecipes) => {
                        return (
                            <article className="recipeResult" key={infoRecipes.id}>
                                <Link to={`/voedie-stomach/${infoRecipes.id}/${infoRecipes.title}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="recipe-link">
                                    <h4>{infoRecipes.title}</h4>
                                    <img className="recipeimg" src={infoRecipes.image} alt="recipe"/>
                                    <p>You are only missing {infoRecipes.missedIngredientCount} other ingredients to
                                        make this recipe!
                                    </p>
                                </Link>
                            </article>
                        )
                    })}
                </div>
                {error &&
                <span>Something went wrong, we could not retrieve the data. Sorry for the inconvenience.</span>}
                {recipes.length === 0 && !error &&
                <span className="potential-error">
                Do you not see any results? Please check your search input and try again.
                </span>}
                <Footer/>
            </div>
        </>
    )
}

export default VoedieStomach