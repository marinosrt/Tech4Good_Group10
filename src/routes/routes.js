import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/LandingPage"
import Login from 'pages/Login/Login';
import Signup from 'pages/Login/Signup';
import MiEspacio from 'pages/MiEspacio/MiEspacio';
import ProtectedRoute from './ProtectedRoute'
import Auth from 'pages/Login/Auth';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<Auth />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} /> */}

                <Route path="/miespacio" element={
                    <ProtectedRoute>
                        <MiEspacio />
                    </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;