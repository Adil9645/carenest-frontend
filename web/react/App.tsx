import {HandleAppState} from "./HandleAppState";

import {Workbox} from "workbox-window";
import {Home} from "../pages/Home/Home";
import SimpleBottomNavigation from "../components/BottomNav";


export const App = ({wb}: { wb: Workbox; }) => {
    return (
        <>
            <HandleAppState wb={wb}/>
            <Home/>
            <SimpleBottomNavigation/>
        </>
    );
};
