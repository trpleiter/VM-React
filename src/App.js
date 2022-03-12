import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Homepage from "./pages/homepage";
import VoedieTalk from "./pages/voedie-talk";
import VoedieStomach from "./pages/voedie-stomach";
import LoginPage from "./pages/login-page";
import Contactpage from "./pages/contact-page";
import AboutVoedieMeals from "./pages/about-voediemeals";
import FAQpage from "./pages/faq-page";
import ContactNotification from "./pages/contact-notification";
import SignUp from "./pages/sign-up";
import SignUpNotification from "./pages/sign-up-notification";
import ForgotPassword from "./pages/forgot-password";
import PasswordChangeNotification from "./pages/password-change-notification";
import ResetPassword from "./pages/reset-password";
import SuccesfullPassChange from "./pages/succesfull-pass-change";
import Recipepage from "./pages/recipe-page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage/>}>
                </Route>
                <Route exact path="/voedie-talk" element={<VoedieTalk/>}>
                </Route>
                <Route exact path="/voedie-stomach" element={<VoedieStomach/>}>
                </Route>
                <Route path="/voedie-stomach/:id/:name" element={<Recipepage/>}>
                </Route>
                <Route exact path="/login" element={<LoginPage/>}>
                </Route>
                <Route exact path="/sign-up" element={<SignUp/>}>
                </Route>
                <Route exact path="/welcome" element={<SignUpNotification/>}>
                </Route>
                <Route exact path="/forgot-password" element={<ForgotPassword/>}>
                </Route>
                <Route exact path="/password-change-notification" element={<PasswordChangeNotification/>}>
                </Route>
                <Route exact path="/reset-password" element={<ResetPassword/>}>
                </Route>
                <Route exact path="/succesfull-password-change" element={<SuccesfullPassChange/>}>
                </Route>
                <Route exact path="/contact" element={<Contactpage/>}>
                </Route>
                <Route exact path="/contact-notification" element={<ContactNotification/>}>
                </Route>
                <Route exact path="/about-voediemeals" element={<AboutVoedieMeals/>}>
                </Route>
                <Route exact path="/faq" element={<FAQpage/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
        ;
}

export default App;
