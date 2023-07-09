import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddClients from "./Pages/Clients/AddClients";
import AddReservation from "./Pages/Reservation/AddReservation";
import CalendarPage from "./Pages/Calendrie/CalendarPage";
import LoginPage from "./Pages/login/LoginPage";
import PasswordPage from "./Pages/login/PasswordPage";
import CodeGR from "./Pages/CodeGR";
import EditPassword from "./Pages/ModifierCompte/EditPassword";
import Revues from "./Pages/Revues";
import Abonnenment from "./Pages/Abonnenment";
import AddGestionnaire from "./Pages/Gestionnaire/AddGestionnaire";
import Statistics from "./Pages/Chart/Statistics";
import Dashbord from "./Pages/Dashbord/Dashbord";
import DashbordPage from "./Pages/DashbordPage";
import axios from "axios";
import {UserContextProvider} from "./userContext";
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true


function App() {
  return (
      <div className="app">
          <BrowserRouter>
              <UserContextProvider>
              <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/forgetPassword" element={<PasswordPage />} />
                  <Route path="/EditProfil" element={<EditPassword />} />
                  <Route path="/terrain" element={<Dashbord />} />
                  <Route path="/dashbord" element={<DashbordPage />} />
                     <Route path="/client" element={<AddClients />} />
                    <Route path="/reservation" element={<AddReservation />} />
                  <Route path="/calendrie" element={<CalendarPage/>} />
                  <Route path="/codeQR" element={<CodeGR/>} />
                  <Route path="/revue" element={<Revues/>} />
                  <Route path="/abonnements" element={<Abonnenment/>} />
                  <Route path="/Gestionnaire" element={<AddGestionnaire/>} />
                  <Route path="/statistique" element={<Statistics/>} />

              </Routes>
              </UserContextProvider>
          </BrowserRouter>/
      </div>


  );
}

export default App;
