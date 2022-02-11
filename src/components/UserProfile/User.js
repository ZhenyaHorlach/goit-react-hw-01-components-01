import PropTypes from 'prop-types';
import s from './User.css'

export default function User({
    avatar,
    username,
    tag,
    location,
    userFollowers,
    userViews,
    userLikes }) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={s.avatar}
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{userFollowers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{userViews}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{userLikes}</span>
                </li>
            </ul>
        </div>
    );
};

User.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    userFollowers: PropTypes.number.isRequired,
    userViews: PropTypes.number.isRequired,
    userLikes: PropTypes.number.isRequired,
};