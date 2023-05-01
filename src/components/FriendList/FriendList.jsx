import css from './FriendList.module.css'
import classNames from 'classnames'

export const FriendList = ({friends}) => { return (
<ul className="friend-list">
  {friends.map(  ({avatar, name, isOnline, id}) => {
    return (
        <li className={css.item} key={id}>
        <span
            className={classNames(
                css.status,
                isOnline && css.status__true,
                !isOnline && css.status__false
            )}
        />
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
       </li>
    )
  } )}
</ul>
)


}