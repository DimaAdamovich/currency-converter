import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {NavBar} from "./components/Navbar";
import {ExchangeRatesPage} from "./pages/ExchangeRates";
import {ConverterPage} from "./pages/Converter";
import {useInit} from "./hooks/init";

function App() {
    useInit()
    return (
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/rates">
                        <ExchangeRatesPage/>
                    </Route>
                    <Route exact path="/">
                        <ConverterPage/>
                    </Route>
                    <Route path="*">
                        <Redirect to={'/'}/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
