import {HandleAppState} from "./HandleAppState";

import {Workbox} from "workbox-window";
import {Home} from "../pages/Home/Home";


export const App = ({wb}: { wb: Workbox; }) => {
    return (
        <>
            <HandleAppState wb={wb}/>
            <Home/>
        </>
    );
};
