import { HandleAppState } from "./HandleAppState";

import { Workbox } from "workbox-window";


export const App = ({wb}: { wb: Workbox; }) =>
{
    return (
        <>
            <HandleAppState wb={wb} />
            <h1>React TypeScript Webpack Starter Template</h1>

        </>
    );
};
