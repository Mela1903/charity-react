import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./components/Login";

function App() {
    return (

        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Home />}
                    />
                    <Route
                        path="/rejestracja"
                        element={<Register />}
                    />
                    <Route
                        path="/logowanie"
                        element={<Login />}
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
