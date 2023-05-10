import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/LandingPage"
import ProtectedRoute from './ProtectedRoute'
import Auth from 'pages/Auth/Auth';
import UserArea from 'pages/MiEspacio/UserArea';
import MiEspacio from 'pages/MiEspacio/MiEspacio';
import Reservas from 'pages/MiEspacio/components/Reservar/Reservas';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/auth" element={<Auth />} />

                <Route path="/user-area" element={<ProtectedRoute> <UserArea /> </ProtectedRoute>}>
                    <Route index element={<MiEspacio />} />
                    <Route path="reservas" element={<Reservas />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;