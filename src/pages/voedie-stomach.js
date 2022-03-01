import React from "react";
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
    return (
        <>
            <NavigationBar
                voediestomach="active"
            />

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
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Enter the leftover that you want to use for your VoedieMeal here.."
                    id="user-food-input"
                    name="food-input"
                />
                <Button
                    type="button"
                    text="Search"
                />
            </div>

            <h3>Delicious recipes</h3>
            <div className="background-container">
                <RecipeResult
                    picture1="Picture"
                    name1="Name"
                    picture2="Picture"
                    name2="Name"
                    picture3="Picture"
                    name3="Name"
                    picture4="Picture"
                    name4="Name"
                />
                <RecipeResult
                    picture1="Picture"
                    name1="Name"
                    picture2="Picture"
                    name2="Name"
                    picture3="Picture"
                    name3="Name"
                    picture4="Picture"
                    name4="Name"
                />
            </div>
            <Footer/>
        </>
    )
}

export default VoedieStomach