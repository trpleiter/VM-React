import React from "react";
import '../styles/faqpage.css';
import NavigationBar from "../components/navigationbar/Nav-bar";
import Footer from "../components/footer/Footer";
import QuestionContainer from "../components/questioncontainer/QuestionContainer";
import AnswerContainer from "../components/answercontainer/AnswerContainer";

function FAQpage() {
    return (
        <>
            <NavigationBar/>
            <div className="outer-container">
                <div className="flexbackground"></div>
                <main>
                    <QuestionContainer
                        question="What are the costs of making use of VoedieMeals?"
                    />
                    <AnswerContainer
                        answer="Absolutely nothing!"
                    />
                    <QuestionContainer
                        question="Are VoedieMeals healthy?"
                    />
                    <AnswerContainer
                        answer="There is no straight answer on this one, it all depends on the recipe you choose.
                                All we know for sure it that is healthy for the environment in the long run by reducing
                                waste of leftovers!"
                    />
                    <QuestionContainer
                        question="Can I donate to VoedieMeals or buy any merchandise of VoedieMeals to support greater
                                  distribution of the idea?"
                    />
                    <AnswerContainer
                        answer="No, VoedieMeals does not have plans to expand on such level, but never say never!"
                    />
                    <QuestionContainer
                        question="Does VoedieMeals support other languages?"
                    />
                    <AnswerContainer
                        answer="At the moment we only provide our services in English."
                    />
                </main>
            </div>
            <Footer
                faq="active"
            />
        </>
    )
}

export default FAQpage;