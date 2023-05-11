import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/LandingPage"
import ProtectedRoute from './ProtectedRoute'
import Auth from 'pages/Auth/Auth';
import UserArea from 'pages/UserArea/UserArea';
import MiEspacio from 'pages/UserArea/MiEspacio';
import Reservas from 'pages/UserArea/components/Reservas/Reservas';
import Step1 from 'pages/UserArea/components/Reservas/steps/Step1';
import Step2 from 'pages/UserArea/components/Reservas/steps/Step2';
import Step3 from 'pages/UserArea/components/Reservas/steps/Step3';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/auth" element={<Auth />} />

                <Route path="/user-area" element={<ProtectedRoute> <UserArea /> </ProtectedRoute>}>
                    <Route index element={<MiEspacio />} />
                    <Route path="reservas" element={<Reservas />} >
                        <Route index element={<Step1 />} />
                        <Route path="step2" element={<Step2 />} />
                        <Route path="step3" element={<Step3 />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;