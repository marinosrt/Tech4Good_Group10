import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "../pages/Landing/Landing"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;