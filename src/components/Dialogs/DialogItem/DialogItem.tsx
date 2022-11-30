import React from "react";
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";

export const DialogItem: React.FC<DialogType> = ({name, id}) => {
    let path = `/dialogs/${id}`

    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>{name}</NavLink>
        {/*<NavLink to={'/dialogs/' + id}>{name}</NavLink>*/}
    </div>
}