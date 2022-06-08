import {HandleAppState} from "./HandleAppState";

import {Workbox} from "workbox-window";
import {Home} from "../pages/Home/Home";
import SimpleBottomNavigation from "../components/BottomNav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Search} from "../pages/Search/Search";
import {Appointments} from "../pages/Appoinments/Appointments";
import {Profile} from "../pages/Profile/Profile";
import {Pharmacy1} from "../pages/Pharmacy/Pharmacy1";
import {Pharmacy2} from "../pages/Pharmacy/Pharmacy2";
import {Findhomenurse} from "../pages/FindHomeNurse/Findhomenurse";
import {Medicalhistory} from "../pages/MedicalHistory/Medicalhistory";
import Floatingbutton from "../components/floatingbutton";



export const App = ({wb}: { wb: Workbox; }) => {
    return (
        <>
            {/*<HandleAppState wb={wb}/>*/}
            <Router>
                <Routes>
                    <Route path='/' element={<div><Pharmacy2/><SimpleBottomNavigation/></div>}/>
                </Routes>
            </Router>

        </>
    );
};
