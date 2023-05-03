import css from './FriendListItem.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} key={id}>
            <span
              className={classNames(
                css.status,
                isOnline && css.status__true,
                !isOnline && css.status__false
              )}
            />
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </>
  );
};

FriendListItem.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
