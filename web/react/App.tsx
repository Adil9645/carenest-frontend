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
import {Profile} from "../pages/Home/Profile";
Search
Appointments
Profile

export const App = ({wb}: { wb: Workbox; }) => {
    return (
        <>
            {/*<HandleAppState wb={wb}/>*/}
            <Router>

                <Routes>
                    <Route path='/Profile' element={<div><Profile/><SimpleBottomNavigation/></div>}/>


                    <Route path='/' element={<div><Appointments/><SimpleBottomNavigation/></div>}/>


                </Routes>
            </Router>

        </>
    );
};
