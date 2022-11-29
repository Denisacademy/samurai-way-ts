import React from "react";
import {RootStateType} from "./redux/state";

//const AppContext = React.createContext({} as RootStateType)
const AppContext = React.createContext(null)

type AppProviderProps = {
    store: RootStateType
    children: React.ReactNode
}

export const AppProvider = (props: any) => {
    return <AppContext.Provider value={props.store}>
        {props.children}
    </AppContext.Provider>
}

export default AppContext