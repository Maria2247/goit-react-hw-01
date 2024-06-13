import css from "./FriendsListItem.module.css";
import clsx from "clsx";


export default function FriendsListItem({friend: {avatar, name, isOnline}}){
    const statusClassClsx = clsx(css.status, isOnline ? css.isOnline : css.isOffline)
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.image}/>
            <p className={css.name}>{name}</p>
            <p className={statusClassClsx}>{isOnline ? "Online" : "Offline" }</p>
        </>
    )
}
