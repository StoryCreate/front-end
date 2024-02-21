import { Dispatch, ReactElement } from "react";

enum PopupState{
    SHOW = "show",
    HIDE = "hide"
}

enum Popup{
    FRIENDS = 'friends',
    FOLLOWING = 'following',
    FOLLOWERS = 'followers',
    NONE = 'null',
}

interface PopupType{
    show: PopupState;
    which: Popup;
}

interface PopupProviderContextType{
    state : PopupType;
    dispatch : Dispatch<PopupActionType>
    children : ReactElement
}

interface PopupProviderContext{
    state : PopupType;
    dispatch : Dispatch<PopupActionType>
}

interface PopupActionType{
    type : PopupState;
    payload : Object
}

export type { PopupType, PopupActionType, PopupProviderContext, PopupProviderContextType };
export { Popup, PopupState }