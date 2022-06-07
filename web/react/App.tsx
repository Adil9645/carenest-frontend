import {HandleAppState} from "./HandleAppState";

import {Workbox} from "workbox-window";
import {Home} from "../pages/Home/Home";
import SimpleBottomNavigation from "../components/BottomNav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


export const App = ({wb}: { wb: Workbox; }) => {
    return (
        <>
            {/*<HandleAppState wb={wb}/>*/}
            <Router>

                <Routes>
                    <Route path='/' element={<div><Home/><SimpleBottomNavigation/></div>}/>
                </Routes>
            </Router>

        </>
    );
};
