import { Popup, PopupActionType, PopupState, PopupType } from "./interfaces";

function popupReducer(state : PopupType | null, action : PopupActionType) : PopupType{
    switch (action.type){
        case PopupState.SHOW:
            return {
                show : PopupState.SHOW,
                which: Popup.FOLLOWERS
            };
        case PopupState.HIDE:
            return {
                show : PopupState.HIDE,
                which: Popup.FOLLOWING
            }
    }
}

export { popupReducer }