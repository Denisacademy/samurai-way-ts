import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {changeTextBodyAC, InitialStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
    changeBodyText: (newBody: string) => void
}


export type DialogsTypeProps = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (message: string) => {
            dispatch(sendMessageAC(message))
        },
        changeBodyText: (newBody: string) => {
            dispatch(changeTextBodyAC(newBody))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer