import FriendListItem from "../FriendsListItem/FriendsListItem";
import css from "./FriendsList.module.css"


export default function FriendList ({friends}) {

    

return (
<ul className={css.container}>
{friends.map(friend => (
<li key={friend.id} className={css.card}><FriendListItem friend={friend} /></li>
))}
</ul>
)}