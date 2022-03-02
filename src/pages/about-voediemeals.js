import React from "react";
import "../styles/about-voediemeals.css";
import NavigationBar from "../components/navigationbar/Nav-bar";
import AboutUs from "../components/aboutus/AboutUs";
import AboutAside from "../components/aboutaside/AboutAside";
import Footer from "../components/footer/Footer";

function AboutVoedieMeals() {
    return (
        <>
            <NavigationBar/>
            <main>
                <div className="outer-container1">
                    <AboutUs title="About VoedieMeals">
                        <p>VoedieMeals was created as a final assignment for the "Frontend development" bootcamp at NOVI
                            University
                            of Applied Sciences. The creator of the website started his career in logistics as a Supply
                            Chain
                            Coordinator. After working in this sector for couple of years, he realized it was time to
                            take on a new
                            challenge, namely the bootcamp to become a frontend developer. A challenge that has been
                            fantasized
                            about for a while.</p>

                        <p>VoedieMeals is labeled as the “hello world” project by the maker. The goal after this
                            project is to learn more techniques and to gain experience that the maker can contribute to
                            the
                            creation of even more beautiful projects in the future!</p>
                    </AboutUs>
                    <AboutAside/>
                </div>
                <div className="outer-container2">
                    <AboutAside/>
                    <AboutUs title="Why this project?">
                        <p>After the creator of this website lived and traveled in Asia for a couple of months, he
                            observed
                            how much environmental pollution there is. From that moment on, the interest in
                            sustainability arose.
                            Thereby good food has always been a hobby.</p>
                        <p>The climate crisis is increasingly mentioned in politics and in the news. One of the causes
                            of this
                            crisis is the current food industry. The production of our food is not sustainable. Throwing
                            away food
                            is already a shame on its own, but it also has a negative effect on the environment. With
                            VoedieMeals an
                            attempt is made to combat food waste in a playful manner, while also providing users with
                            insights
                            into which leftovers they often have themselves. All that to potentially prevent unnecessary
                            food waste.</p>
                    </AboutUs>
                </div>
            </main>
            <Footer
            aboutus="active"
            />
        </>
)
}

export default AboutVoedieMeals;