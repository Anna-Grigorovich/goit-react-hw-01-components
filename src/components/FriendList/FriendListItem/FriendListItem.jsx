import css from './FriendListItem.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span
        className={classNames(
          css.status,
          isOnline && css.status__true,
          !isOnline && css.status__false
        )}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
