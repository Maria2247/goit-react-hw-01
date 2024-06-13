import css from './Profile.module.css';

export default function Profile ({user: {avatar, username, tag, location, stats}}) {
return (<div className={css.container}>
<div >
    <img src={avatar} alt="User avatar" className={css.image}/>
    <p className={css.nameText}>{username}</p>
    <p className={css.text}>@{tag}</p>
    <p className={css.text}>{location}</p>
</div>
<ul className={css.list}>{Object.entries(stats).map(([key, value]) => (<li key={key} className={css.listItem}><span>{key}</span><span className={css.statsNum}>{value}</span></li>))}
   </ul>
</div>
);
}