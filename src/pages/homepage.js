import React, {useState} from "react";
import {Link} from 'react-router-dom';
import '../styles/homepage.css';
import Burger from "../components/burger/Burger";
import BurgerMenu from "../components/burgermenu/BurgerMenu";
import HomepageArticle from '../components/Homepage-article';
import deliciousfood from '../assets/delicious-food.jpg';
import cozydinner from '../assets/cozy-dinner.jpg';
import nowaste from '../assets/no-waste.jpg';
import voediemeals from '../assets/voedie-logo-homepage.jpg';
import navbottom from "../assets/nav-bottom.jpg";
import loginimg from "../assets/login.svg";
import Footer from "../components/footer/Footer";
import {useAuth} from "../contexts/AuthContext";

function Homepage() {
    const [openBurger, setOpenBurger] = useState(false);
    const {currentUser, logout} = useAuth();

    return (
        <>
            <nav>
                <div className="nav-container-home">
                    <ul className="nav-options">
                        <li><Link className="nav-item" to="/voedie-stomach">Voedie stomach</Link></li>
                        <li><Link className="nav-item" to="/voedie-talk">Voedie talk</Link></li>
                        <li>
                            {!currentUser &&
                            <Link className="nav-item" to="/login">
                            <img src={loginimg} alt="login" id="login"/>
                            Login
                            </Link>}
                            {currentUser &&
                            <Link className="nav-item" to="/logout" onClick={async e => {
                                      e.preventDefault()
                                      logout()}}>
                                <img src={loginimg} alt="logout" id="login"/>
                                Logout
                            </Link>}
                        </li>
                    </ul>
                    <Burger openBurger={openBurger} setOpenBurger={setOpenBurger}/>
                    <BurgerMenu openBurger={openBurger} setOpenBurger={setOpenBurger}/>
                </div>
                <div className="logo-container"><Link to="/"><img src={voediemeals}
                                                                  alt="Voedie"
                                                                  id="logo-homepage"/></Link>
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
                    idart="grid-article1"
                    idimg="cozypic"
                    image={cozydinner}
                    title="Cosiness"
                    content="We all know the moments when you fall into awkward silences during a delicious (Voedie)meal. Fear no longer,
            ask us for random food jokes and get the conversation going again! 😉"

                />
                <HomepageArticle
                    idart="grid-article2"
                    idimg="wastepic"
                    image={nowaste}
                    title="Waste"
                    content="To tackle the climate crisis, change in behavior at people themselves is often necessary. Did you know that
            producing food has a huge impact on the environment? Throwing it away is therefore very unfortunate 😭.
            Would you like to know more about the environmental impact of food production?
            Click "
                    link="https://ourworldindata.org/environmental-impacts-of-food"
                    clickname="Here"
                />

                <HomepageArticle
                    idart="grid-article3"
                    idimg="foodpic"
                    image={deliciousfood}
                    title="Delicious food"
                    content="There are all kinds of leftovers from previous meals and you have no idea what to make from it? Simple
            ingredients from unions and garlic to more complicated ingredients such as... celery?🥬 No problem, indicate
            which leftovers you have left and we will make sure you receive delicious recipes where these leftover
            ingredients are needed for! Did you finish all your leftovers? Good job, we will run the extra mile for you
            and also provide you with meals from scratch to enjoy, make sure you do not buy too much though!"

                />

                <aside className="grid-item" id="grid-aside2">
                    To get a glimp of what VoedieMeals is all about we posted a video where fine dishes out of leftovers
                    are made!
                </aside>

                <iframe className="grid-item" id="ytvid" src="https://www.youtube.com/embed/Ge56ZwJat5A"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;