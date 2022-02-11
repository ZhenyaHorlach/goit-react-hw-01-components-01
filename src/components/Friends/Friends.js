import PropTypes from 'prop-types';

export default function Friends({ id, avatar, name, isOnline }) {
  return (
    <li key={id}>
      {isOnline ? (
        <span class="status">&bull;</span>
      ) : (
        <span class="status">&bull;</span>
      )}

      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
