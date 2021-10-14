import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import './styles/App.scss';
import Header from "./components/Header";
import Footer from './components/Footer';
import WeWatch from './components/WeWatch';
import Test from './components/Test';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/HomeScreen';

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

const App2 = () => {
    return (
        <Test />
    );
}

export default App;
