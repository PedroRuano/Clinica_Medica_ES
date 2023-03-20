import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { StartPage } from "../Pages/StartPage";
import { Login } from "../Pages/Login";
import { Availability } from "../Pages/Availability";
import { Callendar } from "../Pages/Callendar";
import { HistoryPage } from "../Pages/HistoryPage";
import { PrescriptionHistory } from "../Pages/PrescriptionHistory";
import { RegisterUser } from "../Pages/RegisterUser";
import { RemedyHistory } from "../Pages/RemedyHistory";
import { RequestExams } from "../Pages/RequestExams";



export default function RoutesSwitcher() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/startPage" element={<StartPage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/availability" element={<Availability />} />
                <Route path="/callendar" element={<Callendar />} />
                <Route path="/historyPage" element={<HistoryPage />} />
                <Route path="/prescriptionHistory" element={<PrescriptionHistory />} />
                <Route path="/registerUser" element={<RegisterUser />} />
                <Route path="/remedyHistory" element={<RemedyHistory />} />
                <Route path="/requestExams" element={<RequestExams />} />
            </Routes>
        </BrowserRouter>
    );
};

