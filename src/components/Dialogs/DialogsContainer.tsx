import Dialogs from "./Dialogs";
import {changeTextBodyAC, sendMessageAC} from "../../redux/state";

const DialogsContainer = (props: any) => {
    const state = props.store.getState().dialogsPage

    const addMessage = (message: string) => {
        console.log('add',message)
        props.store.dispatch(sendMessageAC(message))
    }

    const changeBodyText = (newBody: string) => {
        props.store.dispatch(changeTextBodyAC(newBody))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}

            addMessage={addMessage}
            changeBodyText={changeBodyText}

            newMessageBody={state.newMessageBody}
        />
    )
}

export default DialogsContainer