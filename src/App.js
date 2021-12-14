import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./routers/PrivateRoute";
import Logout from "./components/Logout";
import Donation from "./components/Donation/Donation";

function App() {
    return (

        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<Home />}>
                           <Route exact path='/' element={<PrivateRoute />}/>
                    </Route>
                    <Route
                        path="/rejestracja"
                        element={<Register />}
                    />
                    <Route
                        path="/logowanie"
                        element={<Login />}
                    />
                    <Route
                        path="/wylogowano"
                        element={<Logout />}
                    />
                    <Route
                        path="/oddaj-rzeczy"
                        element={<Donation />}
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
