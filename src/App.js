import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Switch, Route, Redirect } from "react-router-dom";

import './styles/App.scss';
import Header from "./components/Header";
import Footer from './components/Footer';
import WeWatch from './components/WeWatch';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/HomeScreen';
import SignalRiskScreen from "./components/SignalRiskScreen";
import LaunchCauseScreen from "./components/LaunchCauseScreen";

const routes = [
    {
        path: "/",
        component: HomeScreen
    },
    {
        path: "/login",
        component: LoginScreen
    },
    {
        path: "/register",
        component: RegisterScreen
    },
	{
        path: "/signal-risk",
        component: SignalRiskScreen
    },
	{
        path: "/launch-cause",
        component: LaunchCauseScreen
    }
];

const App = () => {
    return (
        <div className="app">
            <Header />
                <Switch>
                    {routes.map(route => (
                        <Route exact path={route.path} component={route.component} key={`router-${route.path}`} />
                    ))}
                    <Redirect to="/" />
                </Switch>
            <WeWatch />
            <Footer />
        </div>
    );
}

export default App;
