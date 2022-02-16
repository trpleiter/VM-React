import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomepageArticle from './components/Homepage-article';
import reportWebVitals from './reportWebVitals';
import deliciousfood from './assets/delicious-food.jpg';
import cozydinner from './assets/cozy-dinner.jpg';
import nowaste from './assets/no-waste.jpg';
import voediemeals from './assets/voedie-logo-homepage.jpg';
import navbottom from "./assets/nav-bottom.jpg";
import loginimg from "./assets/login.svg";
import menu from "./assets/menu.svg";


function Index() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <ul>
                        <li><a href="voedie-stomach.html">Voedie stomach</a></li>
                        <li><a href="voedie-talk.html">Voedie talk</a></li>
                        <li><a href="login.html"> <img src={loginimg} alt="login" id="login"/> Login</a></li>
                    </ul>
                    <img src={menu} alt="Menu" id="navigatie-dropdown"/>
                </div>
                <div className="logo-container"><a href="index.html"><img src={voediemeals}
                                                                          alt="Voedie"
                                                                          id="logo-homepage"/></a>
                </div>
                <div className="nav-bottom"><img src={navbottom} alt="nav-bottom" id="img-nav-bottom"/>
                </div>
            </nav>
            <header>
                <h1>Enjoy it cozy and unabashedly!</h1>
            </header>

            <main className="homepage-main">
                <h2 className="grid-item" id="grid-header">Problems, they come in all shapes and sizes. From leftovers
                    of
                    random ingredient to awkward silences during dinner and even to the climate crisis. With VoedieMeals
                    we can at
                    least solve the last mentioned problems! 💪
                </h2>
                <aside className="grid-item" id="grid-aside1">Did you know that celery has negative calories?🥬 The
                    digestion of the
                    vegetable costs more energy than it contains!
                </aside>

            <HomepageArticle
        idart="delicious-food"
        idimg="foodpic"
        image={deliciousfood}
        title="Delicious food"
        content="There are all kinds of leftovers from previous meals and you have no idea what to make from it? Simple
            ingredients from unions and garlic to more complicated ingredients such as... celery?🥬 No problem, indicate
            which leftovers you have left and we will make sure you receive delicious recipes where these leftover
            ingredients are needed for! Did you finish all your leftovers? Good job, we will run the extra mile for you
            and also provide you with meals from scratch to enjoy, make sure you do not buy too much though!"

        />

    <HomepageArticle
        idart="cozyart"
        idimg="cozy-dinner"
        image={cozydinner}
        title="Cosiness"
        content="We all know the moments when you fall into awkward silences during a delicious (Voedie)meal. Fear no longer,
            ask us for random food jokes and get the conversation going again! 😉"

    />
    <HomepageArticle
        idart="wasteart"
        idimg="no-waste"
        image={nowaste}
        title="Waste"
        content= "To tackle the climate crisis, change in behavior at people themselves is often necessary. Did you know that
            producing food has a huge impact on the environment? Throwing it away is therefore very unfortunate 😭.
            Would you like to know more about the environmental impact of food production?
            Click "
        link="https://ourworldindata.org/environmental-impacts-of-food"
        clickname="Here"
    />

                <aside className="grid-item" id="grid-aside2">
                    To get a glimp of what VoedieMeals is all about we posted a video where fine dishes out of leftovers are made!
                </aside>

                <iframe class="grid-item" id="ytvid" src="https://www.youtube.com/embed/Ge56ZwJat5A" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </main>
            <footer className="grid-item" id="grid-footer">
                <span>© 2022 VoedieMeals</span>
                <ul>
                    <li><a href="about-voediemeals.html">About us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </footer>
    </>

    )
}



    ReactDOM.render(
        Index(),
        document.getElementById('root')
    );

    reportWebVitals();
