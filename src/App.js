import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./routers/PrivateRoute";
import Logout from "./components/Logout";

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
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
