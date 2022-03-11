import React from "react";
import { useParams } from "react-router-dom";
import '../styles/recipe-page.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import InteractionIntro from "../components/interactionintro/Interaction-intro";
import Footer from "../components/footer/Footer";


function Recipepage() {
    const { id } = useParams();

    return (
        <>
            <NavigationBar />
            <div className="page-container-recipe">
            <main className="recipe-main">
                <div className="recipe-container">
                    <InteractionIntro>
                        <h3>Save your leftovers by making: {id}</h3>
                        <p>content 😉</p>
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