import React from "react";
import style from "../Dialogs.module.css";

export type MessageItemProps = {
    message: string
}

export const MessageItem: React.FC<MessageItemProps> = ({message}) => {
    return <div className={style.message}>{message}</div>
}