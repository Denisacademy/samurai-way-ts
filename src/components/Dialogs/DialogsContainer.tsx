import {changeTextBodyAC, sendMessageAC} from "../../redux/state";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage

    }
}

const mapDispatchToProps = (dispatch: any) => {
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