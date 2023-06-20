import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../pages/LandingPage/Landing";
import Map from 'pages/Map/Map';
import Error404 from 'pages/Error404';
import Table from 'pages/Table/Table';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<LandingPage />} />
                <Route path="/map" element={<Map />} />
                <Route path="/table" element={<Table />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;