import { createContext } from "react";
import { PopupProviderContext, PopupProviderContextType, PopupState } from "../core/interfaces";

export const PopupContext = createContext<PopupProviderContext | null>(null);

function PopupProvider({state, dispatch, children } : PopupProviderContextType){
    return <PopupContext.Provider value={{ state, dispatch }}>
        {children}
    </PopupContext.Provider>
}

export default PopupProvider;